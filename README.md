
# Project Overview

This is the project where we utilize test-driven methodology to define and check our project functions and features. The main app is a web-based RSS feed that will provide different articles based on imported RSS links. [Jasmine](http://jasmine.github.io/) is the main testing library we used in the project, and we'll be writing a variety of test cases to ensure our code passes - there are 14 test cases that we are required to write to pass this project.


## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.

## How to run this app?

* clone the repo to your local machine
* open the index.html file in your browser
* Towards the bottom of the webpage you'll find Jasmine summary page for all the tests it has run - green if all passed, and red if any of the spec failed. 
* The 14 required specs are defined in the jasmine/spec/feedreader.js

## Notes on the project
In addition to the 14 required test specs, I provided 2 more specs:
* check each url in allFeeds objects matches with "http://" as a web link --> this currently passes
* check each RSS feed will be hidden after they have been clicked --> this currently fails, needs to add function in app.js
  * I assume that each news feed link (a tag) will get a class of "visited" once they're clicked, then I simulate a click on the first link and expect the $(."visted") array length will differ befor and after the click.
