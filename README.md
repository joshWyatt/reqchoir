#reqchoir

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

`.gitignore`

Add to `package.json` the property:
`precommit: test`

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

`npm i s string-to-stream concat-stream`

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

Copy `index.js` into `index.test.js` and add some tests:

```javascript

```

If you're publishing to npm, test it locally:

`npm i g reqchoir`

`mkdir temp/`

`cd temp/`

`reqchoir yes.js through2 trumpet --ecstatic ('esctatic')(__dirname + '/static') --concat ('concat-stream') --- fs hyperquest`

And finally:

`npm publish`