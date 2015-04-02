var argv = process.argv.slice(2);
rechoir = argv.map(function(module){
  return "var " + module + " = require('" + module + "');";
  // return 'a';
}).join('\n');


var str = require('string-to-stream');
str(rechoir).pipe(process.stdout);


var fs = require('fs');
