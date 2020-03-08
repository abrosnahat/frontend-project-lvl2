import genDiff from '../src/index';

test('json', () => {
  const expected = `{
    host: hexlet.io
  - timeout: 50
  + timeout: 20
  - proxy: 123.234.53.22
  - follow: false
  + verbose: true
}`;
  expect(genDiff('before.json', 'after.json')).toEqual(expected);
});

test('yaml', () => {
  const expected = `{
    host: hexlet.io
  - timeout: 50
  + timeout: 20
  - proxy: 123.234.53.22
  - follow: false
  + verbose: true
}`;
  expect(genDiff('before.yaml', 'after.yaml')).toEqual(expected);
});
