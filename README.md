# Apple Documentation Archive Scraper

## Overview

This repo is a very simple [node] script that renders PDF from the 
[Apple Documentation Archive]. I made this because I wanted to read
the docs printed out.

## Initial setup

You need the [wkhtmltopdf] binary to be installed. If you're using
[brew], it's as simple as a `brew cask install wkhtmltopdf`. If you're
using another OS or another package manager, the most easiest way to
do it would be downloading from the [official
site](http://wkhtmltopdf.org/downloads.html). Be sure the binary is in
`PATH`.

## Scrape the pages and generating the PDF

This doesn't have a command line parser or anything yet: it's just a
simple script, so you can just execute `index.js` with the `node`
binary. Below is a real use case where I'm trying to download
PDFs from the [Concurrency Programming Guide].

``` shellsession
$ node index.js
info Loading article 'Introduction'... 
info Loading article 'Concurrency and Application Design'... 
info Loading article 'Operation Queues'... 
info Loading article 'Dispatch Queues'... 
info Loading article 'Dispatch Sources'... 
info Loading article 'Migrating Away from Threads'... 
info Loading article 'Glossary'... 
info Constructed DOM tree for article 'Introduction' 
info Constructed DOM tree for article 'Glossary' 
info Constructed DOM tree for article 'Migrating Away from Threads' 
info Constructed DOM tree for article 'Concurrency and Application Design' 
info Constructed DOM tree for article 'Dispatch Sources' 
info Finished loading article 'Introduction' 
info Generating 'Introduction.pdf'... 
info Finished loading article 'Glossary' 
info Generating 'Glossary.pdf'... 
info Finished loading article 'Migrating Away from Threads' 
info Generating 'Migrating Away from Threads.pdf'... 
info Finished loading article 'Dispatch Sources' 
info Generating 'Dispatch Sources.pdf'... 
info Finished loading article 'Concurrency and Application Design' 
info Generating 'Concurrency and Application Design.pdf'... 
info Constructed DOM tree for article 'Operation Queues' 
info Constructed DOM tree for article 'Dispatch Queues' 
info Finished loading article 'Operation Queues' 
info Generating 'Operation Queues.pdf'... 
info Finished loading article 'Dispatch Queues' 
info Generating 'Dispatch Queues.pdf'... 
info Finished generating 'Introduction.pdf' 
info Finished generating 'Glossary.pdf' 
info Finished generating 'Migrating Away from Threads.pdf' 
info Finished generating 'Concurrency and Application Design.pdf' 
info Finished generating 'Dispatch Sources.pdf' 
info Finished generating 'Operation Queues.pdf' 
info Finished generating 'Dispatch Queues.pdf' 
```

[node]: https://nodejs.org/
[Apple Documentation Archive]: http://developer.apple.com/library/archive/
[wkhtmltopdf]: https://wkhtmltopdf.org/
[brew]: https://brew.sh/
[Concurrency Programming Guide]: http://developer.apple.com/library/archive/documentation/General/Conceptual/ConcurrencyProgrammingGuide/
