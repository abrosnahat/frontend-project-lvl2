const fs = require('fs');

const genDiff = (file1, file2) => {
    const firstFile = fs.readFileSync(file1);
    const firstFileParse = JSON.parse(firstFile);

    console.log(firstFileParse);
};

export default genDiff;
