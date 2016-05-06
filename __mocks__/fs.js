const FILE_1 = ` _  _  _  _  _  _  _  _  _ \n
| || || || || || || || || |\n
|_||_||_||_||_||_||_||_||_|\n
                           \n
                           \n
  |  |  |  |  |  |  |  |  |\n
  |  |  |  |  |  |  |  |  |\n
                           \n
 _  _  _  _  _  _  _  _  _ \n
 _| _| _| _| _| _| _| _| _|\n
|_ |_ |_ |_ |_ |_ |_ |_ |_ \n
                           \n
 _  _  _  _  _  _  _  _  _ \n
 _| _| _| _| _| _| _| _| _|\n
 _| _| _| _| _| _| _| _| _|\n
                           \n
                           \n
|_||_||_||_||_||_||_||_||_|\n
  |  |  |  |  |  |  |  |  |\n
                           \n
 _  _  _  _  _  _  _  _  _ \n
|_ |_ |_ |_ |_ |_ |_ |_ |_ \n
 _| _| _| _| _| _| _| _| _|\n
                           \n
 _  _  _  _  _  _  _  _  _ \n
|_ |_ |_ |_ |_ |_ |_ |_ |_ \n
|_||_||_||_||_||_||_||_||_|\n
                           \n
 _  _  _  _  _  _  _  _  _ \n
  |  |  |  |  |  |  |  |  |\n
  |  |  |  |  |  |  |  |  |\n
                           \n
 _  _  _  _  _  _  _  _  _ \n
|_||_||_||_||_||_||_||_||_|\n
|_||_||_||_||_||_||_||_||_|\n
                           \n
 _  _  _  _  _  _  _  _  _ \n
|_||_||_||_||_||_||_||_||_|\n
 _| _| _| _| _| _| _| _| _|\n
                           \n
    _  _     _  _  _  _  _ \n
  | _| _||_||_ |_   ||_||_|\n
  ||_  _|  | _||_|  ||_| _|\n
                           `;

const FILE_3 = ` _  _  _  _  _  _  _  _    \n
| || || || || || || ||_   |\n
|_||_||_||_||_||_||_| _|  |\n
                           \n
    _  _  _  _  _  _     _ \n
|_||_|| || ||_   |  |  | _ \n
  | _||_||_||_|  |  |  | _|\n
                           \n
    _  _     _  _  _  _  _ \n
  | _| _||_| _ |_   ||_||_|\n
  ||_  _|  | _||_|  ||_| _ \n
                           `;

const FILE_4 = `                           \n
  |  |  |  |  |  |  |  |  |\n
  |  |  |  |  |  |  |  |  |\n
                           \n
 _  _  _  _  _  _  _  _  _ \n
  |  |  |  |  |  |  |  |  |\n
  |  |  |  |  |  |  |  |  |\n
                           \n
 _  _  _  _  _  _  _  _  _ \n
 _|| || || || || || || || |\n
|_ |_||_||_||_||_||_||_||_|\n
                           \n
 _  _  _  _  _  _  _  _  _ \n
 _| _| _| _| _| _| _| _| _|\n
 _| _| _| _| _| _| _| _| _|\n
                           \n
 _  _  _  _  _  _  _  _  _ \n
|_||_||_||_||_||_||_||_||_|\n
|_||_||_||_||_||_||_||_||_|\n
                           \n
 _  _  _  _  _  _  _  _  _ \n
|_ |_ |_ |_ |_ |_ |_ |_ |_ \n
 _| _| _| _| _| _| _| _| _|\n
                           \n
 _  _  _  _  _  _  _  _  _ \n
|_ |_ |_ |_ |_ |_ |_ |_ |_ \n
|_||_||_||_||_||_||_||_||_|\n
                           \n
 _  _  _  _  _  _  _  _  _ \n
|_||_||_||_||_||_||_||_||_|\n
 _| _| _| _| _| _| _| _| _|\n
                           \n
    _  _  _  _  _  _     _ \n
|_||_|| || ||_   |  |  ||_ \n
  | _||_||_||_|  |  |  | _|\n
                           \n
    _  _     _  _  _  _  _ \n
 _| _| _||_||_ |_   ||_||_|\n
  ||_  _|  | _||_|  ||_| _|\n
                           \n
 _     _  _  _  _  _  _    \n
| || || || || || || ||_   |\n
|_||_||_||_||_||_||_| _|  |\n
                           \n
    _  _  _  _  _  _     _ \n
|_||_|| ||_||_   |  |  | _ \n
  | _||_||_||_|  |  |  | _|\n
                           `;

const readFile = (filePath, callback) => {
  let error = null;
  let data = null;
  switch (filePath) {
    case '1.txt':
      data = FILE_1;
      break;
    case '3.txt':
      data = FILE_3;
      break;
    case '4.txt':
      data = FILE_4;
      break;
    default:
      error = new Error(`Error: ENOENT, no such file or directory '${filePath}'`);
      break;
  }

  callback(error, data);
};

const fs = jest.genMockFromModule('fs');
fs.readFile = readFile;

export default fs;
