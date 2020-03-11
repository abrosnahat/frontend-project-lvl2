import { each, has } from 'lodash';
import path from 'path';
import parse from './parser';

const fs = require('fs');

const readFile = (file) => {
  const fullPath = path.resolve(__dirname, `../__tests__/__fixtures__/${file}`);
  const fileContent = fs.readFileSync(fullPath, 'utf-8');

  return fileContent;
};

const genDiff = (file1, file2) => {
  const firstFile = readFile(file1);
  const secondFile = readFile(file2);
  const firstFileParse = parse(firstFile, path.extname(file1));
  const secondFileParse = parse(secondFile, path.extname(file2));

  let result = '{';

  each(firstFileParse, (value, key) => {
    if (has(secondFileParse, key) && secondFileParse[key] === value) {
      result += `
    ${key}: ${value}`;
    } else if (has(secondFileParse, key)) {
      result += `
  - ${key}: ${value}
  + ${key}: ${secondFileParse[key]}`;
    }

    if (!has(secondFileParse, key)) {
      result += `
  - ${key}: ${value}`;
    }
  });

  each(secondFileParse, (value, key) => {
    if (!has(firstFileParse, key)) {
      result += `
  + ${key}: ${value}`;
    }
  });

  // console.log(`${result}
  // }`);
  return `${result}
}`;
};

export default genDiff;
