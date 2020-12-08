# Purpose

A basic react app to test out writing xAPI statements and LRS functionality. Users enter their login information (actor), which then takes them to a different screen. Users may choose different buttons to press (verb), depending on the activity (object), which will be sent to https://lrs.adlnet.gov.

**Validated** statements can be viewed at http://adlnet.github.io/xapi-statement-viewer/

Pulls cryptojs_v3.1.2.js & xapiwrapper.js from the xAPIWrapper library


***


## Installation

1. Clone this repo
```
    git clone https://github.com/bumbot/xapi-lrs-practice
```
2. Install the modules to create the package-lock file
```
    npm install
```
3. Start the server
```
    npm start
```