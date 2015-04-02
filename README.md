#reqchoir
Create new JavaScript files with all your requires required.

####How to use / build

For this README you'll learn how to make reqchoir. Then you will know how to use it.

Create a new repo, clone it and cd into it.

From the command line in the root directory of your repo:

`echo -e '#reqchoir\n\nCreate new JavaScript files with all your requires required.\n\n####Usage\n\n' > README.md`

`npm adduser`

`npm init`

Add to your package.json the property:
`test: npm test.config.js test/*.js | faucet`

`npm i --save-dev tape pre-commit faucet`

From the command line in the root directory of your repo:

`echo node\/modules\/* > .gitignore`

Add to `package.json` the property:
`pre-commit: test`

write `test.config`, which will load all the files in `/test` and pipe them through tape into stdout:

```javascript
var test = require('tape');
var path = require('path');

test.createStream().pipe(process.stdout);

process.argv.slice(2).forEach(function(file){
  require(path.resolve(file));
});
```

create `index.js` and `test/index.test.js`

write a passing version of `test/index.test.js`:

```javascript
var test = require('tape');

test('index.js', function(t){
  t.plan(1);

  t.pass('t.pass');
});
```

`npm i -s string-to-stream concat-stream`

Here's `index.js`:

```javascript
var file = require('path').resolve(process.argv.slice(2)[0]);
var modules = process.argv.slice(3);

var rechoir = modules.map(function(module){
  return "var " + module + " = require('" + module + "');";
}).join('\n');


var str = require('string-to-stream');
var ws = require('fs').createWriteStream(file);
str(rechoir).pipe(ws);
```

Use `index.js` as a template to write a test in `index.test.js`:

```javascript
var test = require('tape');
var concat = require('concat-stream');

var modules = ['through2', 'concat-stream', 'ecstatic'];

var rechoir = modules.map(function(module){
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


str(rechoir).pipe(writeableStream);

```

If you're publishing to npm, test it locally:

`npm i -g ./`

`mkdir local_test/`

`cd temp/`

`reqchoir yes.js through2 trumpet fs hyperquest`

confirm it worked:

`cat yes.js`

clean up:

`cd ..`
`rm -rf local_test/`

And finally:

`npm publish`