import { readFile, sanityCheck } from '../src/file';
import { lexFile } from '../src/lexer';

import {
  LINE_GROUP_COUNT,
  SYMBOL_SIZE,
  SYMBOLS_PER_LINE
} from '../src/lexer';

import {
  FILENAME_1,
  FILENAME_3,
  FILENAME_4,
  FILENAME_404,
  FILENAME_OK,
  FILENAME_EMPTY,
  FILENAME_INVALID_CHARACTERS,
  FILENAME_INVALID_LINE_LENGTH,
  FILENAME_INVALID_LINE_COUNT,
  FILENAME_INVALID_BLANK_LINE,
} from '../__mocks__/fs';

jest.mock('fs');
jest.unmock('../src/file');
jest.unmock('../src/lexer');

const logData = data => {
  console.log('\n');
  console.log(data);
};

describe('Lexer', () => {
  pit('separates the input into lines of 9 3x3 symbols',
  () => readFile(FILENAME_OK)
  .then(sanityCheck)
  .then(lexFile)
  .then((data) => {
    for (let line of data) {
      expect(line.length).toEqual(SYMBOLS_PER_LINE);
      for (let symbol of line) {
        expect(symbol.length).toEqual(SYMBOL_SIZE);
        for (let row of symbol) {
          expect(row.length).toEqual(SYMBOL_SIZE);
        }
      }
    }
  }));
});
