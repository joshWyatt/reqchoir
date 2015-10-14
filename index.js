#!/usr/bin/env node

var file = require('path').resolve(process.argv.slice(2)[0]);
var modules = process.argv.slice(3);

var reqs = modules.map(function(module){
  return "var " + module + " = require('" + module + "');";
}).join('\n');


var str = require('string-to-stream');
var ws = require('fs').createWriteStream(file);
str(reqs).pipe(ws);

