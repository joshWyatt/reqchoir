#reqchoir

For this README you'll learn how to make reqchoir. Then you will know how to use it.

Create a new repo, clone it and cd into it.

From the command line in the root directory of your repo:
`echo -e '#reqchoir\n\nCreate new JavaScript files with all your requires required.\n\n####Usage\n\n' > README.md`

`git commit`

`npm adduser`
`npm init`

Add to your package.json the property:
`test: npm test.config.js test/*.js | faucet`

`npm i --save-dev tape pre-commit faucet`

From the command line in the root directory of your repo:
`.gitignore`

Add to your package.json the property:
`precommit: test`

`git commit`

write test.config, which will load all the files in /test and pipe them through tape into stdout:

```javascript
var test = require('tape');
var path = require('path');

test.createStream().pipe(process.stdout);

process.argv.slice(2).forEach(function(file){
  require(path.resolve(file));
});
```

`git commit`

create index.js and test/index.test.js

write a passing version of test/index.test.js:

```javascript
var test = require('tape');

test('index.js', function(t){
  t.plan(1);

  t.pass('t.pass');
});
```

`git commit`

npm i s minimist
write index.js

`git commit`

fill in index.test.js

`git commit`

mkcd gt/
npm i g reqchoir
reqchoir yes.js through2 trumpet muxdemux --minimist ('minimist')() faucet path --concat ('concat-stream') --- fs hyperquest

npm publish (except this part won't work for you cause it's alread published)