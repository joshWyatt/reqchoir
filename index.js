var file = require('path').resolve(process.argv.slice(2)[0]);
var modules = process.argv.slice(3);

var rechoir = modules.map(function(module){
  return "var " + module + " = require('" + module + "');";
}).join('\n');


var str = require('string-to-stream');
var ws = require('fs').createWriteStream(file);
str(rechoir).pipe(ws);