const fs = require("fs").promises;
const { URL } = require("url");
const fetch = require("node-fetch");
const { JSDOM } = require("jsdom");
const wkhtmltopdf = require("wkhtmltopdf");
const getStream = require("get-stream");

const baseURL = new URL("https://developer.apple.com/library/archive/documentation/");
const bookURL = new URL("Cocoa/Conceptual/CocoaViewsGuide/", baseURL);

(async () => {
    const toc = await (await fetch(new URL("book.json", bookURL))).json();
    await Promise.all(toc.sections.filter(({ title }) => title !== "Revision History").map(async ({ href, title }) => {
        const sectionURL = new URL(href, bookURL);
        console.log(`Loading article '${title}'...`);
        const { window: section } = await JSDOM.fromURL(sectionURL, {
            resources: "usable"
        });

        section.addEventListener("load", async () => {
            console.log(`Finished loading article '${title}'`);
            console.log(`Generating '${title}.pdf'...`);
            const articleHTML = section.document.querySelector("article").innerHTML;
            const styleSheets = [...section.document.styleSheets];
            const cssRules = styleSheets.reduce((acc, cur) => [...acc, ...cur.cssRules], []);
            const cssText = cssRules.map(cssRule => cssRule.cssText).join("\n");
            const pdfDom = new JSDOM();
            const { document } = pdfDom.window;
            document.body.innerHTML = articleHTML;
            const styleEl = document.createElement("style");
            const baseEl = document.createElement("base");
            const charsetEl = document.createElement("meta");
            styleEl.innerHTML = cssText;
            baseEl.href = sectionURL;
            charsetEl.setAttribute("charset", "utf-8");
            document.head.append(styleEl, charsetEl, baseEl);
            const pdf = await getStream.buffer(wkhtmltopdf(pdfDom.serialize()));
            section.close();
            pdfDom.window.close();
            await fs.writeFile(`${title}.pdf`, pdf);
            console.log(`Finished generating ${title}.pdf`);
        });
    }));
})();
