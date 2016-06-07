import test from 'tapava';
import normalize from './lib';

test('normalize()', t => {
  const input = {
    versions: {
      '1.0.2': {},
      'this-is-not-valid-semver': {}
    }
  };
  const actual = normalize(input);
  const expected = {
    versions: {
      '1.0.2': {}
    }
  };
  t.deepEqual(actual, expected);
  t.not(input, actual);
});
