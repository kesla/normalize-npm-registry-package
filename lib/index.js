import {without, set} from 'immutable-object-methods';
import {valid} from 'semver';

module.exports = packageJson => {
  let newVersions = packageJson.versions;

  Object.keys(packageJson.versions).forEach(key => {
    if (!valid(key)) {
      newVersions = without(newVersions, key);
    }
  });
  return set(packageJson, 'versions', newVersions);
};
