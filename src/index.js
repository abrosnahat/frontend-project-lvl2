const fs = require('fs');

const genDiff = (file1, file2) => {
  const firstFile = fs.readFileSync(file1);
  const secondFile = fs.readFileSync(file2);
  const firstFileParse = JSON.parse(firstFile);
  const secondFileParse = JSON.parse(secondFile);

  const firstFileArray = Object.entries(firstFileParse).map(item => `${item[0]}: ${item[1]}`);
  const secondFileArray = Object.entries(secondFileParse).map(item => `${item[0]}: ${item[1]}`);

  const result = firstFileArray.reduce((accumulator, key) => {
    if (secondFileArray.includes(key)) {
      accumulator += key;
      console.log(key);
      return key;
    }
  }, '');

  console.log(result);
};

export default genDiff;
