#ESRI JSAPI Jasmine Template

A template to simplify unit testing ESRI JSAPI code, using Jasmine.

#Goals:

- Support Jasmine and Dojo frameworks without needing local installations, i.e., using the Dojo framework from ESRI's JSAPI
- Support AMD loading for both project code and tests, so that each test module can simply require its production module
- Provide a Grunt task for CI integration

#Requirements:

- [Node](http://nodejs.org/)
- [Grunt](http://gruntjs.com/)

#Quick start:

```
git clone <repository-url>
cd <repository directory>
npm install
grunt test
```

#Template:

By default, the test runner will pull in source files that match js/app/*.js, and test files that match js/spec/*spec.js; these paths can be changed by editing 
the dojoConfig variable in the test runner template (esri_amd.html).

#Tooling and Inspiration:

This template makes use of [grunt-contrib-jasmine](https://github.com/gruntjs/grunt-contrib-jasmine), 
and draws heavily from the work done on the 
[grunt-template-jasmine-requirejs](https://github.com/cloudchen/grunt-template-jasmine-requirejs) template, as well as Dave Bouwman's [blog](http://blog.davebouwman.com/).