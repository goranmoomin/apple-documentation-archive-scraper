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
Loading article 'Introduction'...
Loading article 'Concurrency and Application Design'...
Loading article 'Operation Queues'...
Loading article 'Dispatch Queues'...
Loading article 'Dispatch Sources'...
Loading article 'Migrating Away from Threads'...
Loading article 'Glossary'...
Constructed DOM tree for article 'Introduction'
Constructed DOM tree for article 'Glossary'
Constructed DOM tree for article 'Concurrency and Application Design'
Finished loading article 'Introduction'
Generating 'Introduction.pdf'...
Constructed DOM tree for article 'Dispatch Sources'
Constructed DOM tree for article 'Dispatch Queues'
Constructed DOM tree for article 'Operation Queues'
Finished loading article 'Glossary'
Generating 'Glossary.pdf'...
Constructed DOM tree for article 'Migrating Away from Threads'
Finished loading article 'Dispatch Sources'
Generating 'Dispatch Sources.pdf'...
Finished loading article 'Concurrency and Application Design'
Generating 'Concurrency and Application Design.pdf'...
Finished loading article 'Dispatch Queues'
Generating 'Dispatch Queues.pdf'...
Finished loading article 'Operation Queues'
Generating 'Operation Queues.pdf'...
Finished loading article 'Migrating Away from Threads'
Generating 'Migrating Away from Threads.pdf'...
Finished generating Introduction.pdf
Finished generating Glossary.pdf
Finished generating Concurrency and Application Design.pdf
Finished generating Dispatch Sources.pdf
Finished generating Dispatch Queues.pdf
Finished generating Migrating Away from Threads.pdf
Finished generating Operation Queues.pdf
```

[node]: https://nodejs.org/
[Apple Documentation Archive]: http://developer.apple.com/library/archive/
[wkhtmltopdf]: https://wkhtmltopdf.org/
[brew]: https://brew.sh/
[Concurrency Programming Guide]: http://developer.apple.com/library/archive/documentation/General/Conceptual/ConcurrencyProgrammingGuide/
