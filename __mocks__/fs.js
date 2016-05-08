export const FILENAME_1 = '1.txt';
export const FILENAME_3 = '3.txt';
export const FILENAME_4 = '4.txt';
export const FILENAME_404 = 'bar.txt';
export const FILENAME_OK = 'ok.txt';
export const FILENAME_BAD = 'bad.txt';
export const FILENAME_EMPTY = 'empty.txt';
export const FILENAME_INVALID_CHARACTERS = 'characters.txt';
export const FILENAME_INVALID_LINE_LENGTH = 'length.txt';
export const FILENAME_INVALID_LINE_COUNT = 'count.txt';
export const FILENAME_INVALID_BLANK_LINE = 'blankline.txt';

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

const FILE_OK = ` _  _  _  _  _  _  _  _  _ \n
| || || || || || || || || |\n
|_||_||_||_||_||_||_||_||_|\n
                           `;

const FILE_LENGTH = ` _   _  _  _  _  _  _  _  _ \n
| || || || || || || || || |\n
|_||_||_||_||_||_||_||_||_|\n
                           `;

const FILE_COUNT = ` _  _  _  _  _  _  _  _  _ \n
|_||_||_||_||_||_||_||_||_|\n
                           `;

const FILE_CHARACTERS = ` _  q  _  _  _  _  _  _  _ \n
| || || || || || || || || |\n
|_||_||_||_||_||_||_||_||_|\n
                           `;

const FILE_BLANKLINE = ` _  _  _  _  _  _  _  _  _ \n
| || || || || || || || || |\n
|_||_||_||_||_||_||_||_||_|\n
                          _`;

const FILE_BAD = ` _  _  _  _  _  _  _  _  _ \n
|  | || || || || || || || |\n
|_||_||_||_||_||_||_||_||_|\n
                           `;

const readFile = (filePath, callback) => {
  let error = null;
  let data = null;
  switch (filePath) {
    case FILENAME_1:
      data = FILE_1;
      break;
    case FILENAME_3:
      data = FILE_3;
      break;
    case FILENAME_4:
      data = FILE_4;
      break;
    case FILENAME_OK:
      data = FILE_OK;
      break;
    case FILENAME_BAD:
      data = FILE_BAD;
      break;
    case FILENAME_INVALID_CHARACTERS:
      data = FILE_CHARACTERS;
      break;
    case FILENAME_INVALID_BLANK_LINE:
      data = FILE_BLANKLINE;
      break;
    case FILENAME_INVALID_LINE_LENGTH:
      data = FILE_LENGTH;
      break;
    case FILENAME_INVALID_LINE_COUNT:
      data = FILE_COUNT;
      break;
    case FILENAME_EMPTY:
      data = '';
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
