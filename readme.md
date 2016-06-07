# normalize-npm-registry-package 

Normalize a package metadata from the npm registry

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install normalize-npm-registry-package --save
```

## Usage

```js
import normalize from 'normalize-npm-registry-package';

const registryPackage = {
  versions: {
    'not-valid-semver': {
      // ...
    }
  }
  // ... etc
};

// will normalize a npm registry package, like remove none-semver versions in .versions
normalize(registryPackage);

```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [immutable-object-methods](https://github.com/micnews/immutable-object-methods): Update normal plain javascript object, immutable style. Simlar to how immutable.js, seamless-immutable etc does it but a lot smaller and simpler.

## Dev Dependencies

- [babel-cli](https://github.com/babel/babel/tree/master/packages): Babel command line.
- [babel-core](https://github.com/babel/babel/tree/master/packages): Babel compiler core.
- [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages): Babel preset for all es2015 plugins.
- [babel-tape-runner](https://github.com/wavded/babel-tape-runner): Babel + Tape for running your ES Next tests
- [package-json-to-readme](https://github.com/zeke/package-json-to-readme): Generate a README.md from package.json contents
- [semistandard](https://github.com/Flet/semistandard): All the goodness of `feross/standard` with semicolons sprinkled on top.
- [snazzy](https://github.com/feross/snazzy): Format JavaScript Standard Style as Stylish (i.e. snazzy) output
- [tapava](https://github.com/kesla/tapava): the syntax of ava, run through tape


## License

MIT

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_