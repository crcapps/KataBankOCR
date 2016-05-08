import { checksum } from './checksum';

const S000 = '   ';
const S001 = '  |';
const S010 = ' _ ';
const S011 = ' _|';
const S100 = '|  ';
const S101 = '| |';
const S110 = '|_ ';
const S111 = '|_|';

export const ILLEGIBLE = 'ILL';
export const CHECKSUM_ERROR = 'ERR';
export const AMBIGUOUS = 'AMB';

const GRAMMAR = {
  [S000]: {
    [S001]: {
      [S001]: 1,
    },
    [S111]: {
      [S001]: 4,
    },
  },
  [S010]: {
    [S001]: {
      [S001]: 7,
    },
    [S011]: {
      [S011]: 3,
      [S110]: 2,
    },
    [S101]: {
      [S111]: 0,
    },
    [S110]: {
      [S011]: 5,
      [S111]: 6,
    },
    [S111]: {
      [S011]: 9,
      [S111]: 8,
    },
  },
};

const matchSymbol = symbol => {
  const noMatch = '?';
  try {
    let number = GRAMMAR[symbol[0]][symbol[1]][symbol[2]];
    if (number === 0 || number) {
      return number;
    } else {
      return noMatch;
    }
  } catch (error) {
    return noMatch;
  }
};

export const parseFile = file => new Promise((fulfill, reject) => {
  try {
    let lines = [];
    for (let line of file) {
      let lineNumber = '';
      let status = null;
      for (let symbol of line) {
        let number = matchSymbol(symbol);
        if (number == '?') {
          status = ILLEGIBLE;
        }

        lineNumber = `${lineNumber}${number}`;
      }

      if (!status) {
        if (!checksum(lineNumber)) {
          status = CHECKSUM_ERROR;
        }
      }

      let parsedLine = {
        number: lineNumber,
        status: status,
        guesses: null,
      };

      lines.push(parsedLine);
    }

    fulfill(lines);
  } catch (error) {
    reject(error);
  }
});
