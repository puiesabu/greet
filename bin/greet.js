#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2));
greet = require('greet');
console.log(greet(process.argv[2], argv['drunk']));  
// console.log("Hello World");
