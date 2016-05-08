import { readFile, sanityCheck } from '../src/file';
import { lexFile } from '../src/lexer';
import { parseFile } from '../src/parser';

import {
  FILENAME_OK,
  FILENAME_BAD,
} from '../__mocks__/fs';

import {
  ILLEGIBLE,
} from '../src/parser';

jest.mock('fs');
jest.unmock('../src/file');
jest.unmock('../src/lexer');
jest.unmock('../src/parser');

const logData = data => {
  console.log('\n');
  console.log(data);
};

const logError = error => {
  console.log('\n');
  console.error(error);
};

describe('Parser', () => {
  pit('parses a valid number', () => readFile(FILENAME_OK)
  .then(sanityCheck)
  .then(lexFile)
  .then(parseFile)
  .then(data => {
    for (let line of data) {
      expect(line.number).toContain('000000000');
      expect(line.status).toBeNull();
      expect(line.guesses.length).toEqual(0);
    }
  }));

  pit('marks invalid numbers', () => readFile(FILENAME_BAD)
  .then(sanityCheck)
  .then(lexFile)
  .then(parseFile)
  .then(data => {
    for (let line of data) {
      expect(line.number).toContain('?00000000');
      expect(line.status).toContain(ILLEGIBLE);
    }
  }));
});
