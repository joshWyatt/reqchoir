var test = require('tape');
var concat = require('concat-stream');

var modules = ['through2', 'concat-stream', 'ecstatic'];

var reqs = modules.map(function(module){
  return "var " + module + " = require('" + module + "');";
}).join('\n');

var testFile = "var through2 = require('through2');\n" +
"var concat-stream = require('concat-stream');\n" +
"var ecstatic = require('ecstatic');";

var str = require('string-to-stream');
var writeableStream = concat(function(modules){
  
  test('index.js', function(t){
    t.plan(1);

    t.equals(modules.toString(), testFile);
  });
});


str(reqs).pipe(writeableStream);
