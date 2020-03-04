import { each, has } from 'lodash';

const fs = require('fs');

const genDiff = (file1, file2) => {
  const firstFile = fs.readFileSync(file1);
  const secondFile = fs.readFileSync(file2);
  const firstFileParse = JSON.parse(firstFile);
  const secondFileParse = JSON.parse(secondFile);

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

  console.log(`${result}
}`);
  return `${result}
}`;
};

export default genDiff;
