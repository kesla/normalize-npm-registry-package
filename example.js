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
