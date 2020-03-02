const fs = require('fs');

const genDiff = (file1, file2) => {
  const firstFile = fs.readFileSync(file1);
  const secondFile = fs.readFileSync(file2);
  const firstFileParse = JSON.parse(firstFile);
  const secondFileParse = JSON.parse(secondFile);

  const firstFileArray = Object.entries(firstFileParse).map((item) => `${item[0]}: ${item[1]}`);
  const secondFileArray = Object.entries(secondFileParse).map((item) => `${item[0]}: ${item[1]}`);

  const result = firstFileArray.reduce((acc, key) => {
    if (secondFileArray.includes(key)) {
      let accumulator = acc;
      accumulator += key;
      console.log('bia');
    }
  }, '');

  console.log(result);
};

export default genDiff;
