import genDiff from '../src/index';

const expected = `{
    host: hexlet.io
  - timeout: 50
  + timeout: 20
  - proxy: 123.234.53.22
  - follow: false
  + verbose: true
}`;

test('json', () => {
  expect(genDiff('before.json', 'after.json')).toEqual(expected);
});

test('yaml', () => {
  expect(genDiff('before.yaml', 'after.yaml')).toEqual(expected);
});

test('ini', () => {
  expect(genDiff('before.ini', 'after.ini')).toEqual(expected);
});
