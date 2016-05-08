import { readFile, sanityCheck } from '../src/file';
import { lexFile } from '../src/lexer';
import { parseFile } from '../src/parser';

import {
  FILENAME_1,
} from '../__mocks__/fs';

import {
  SYMBOLS_PER_LINE
} from '../src/lexer';

jest.mock('fs');
jest.unmock('../src/file');
jest.unmock('../src/lexer');
jest.unmock('../src/parser');

describe('User Story 1: Parsing Numbers', () => {

  // Feed it the first use case data.
  pit('correctly parses valid numbers', () => readFile(FILENAME_1)
  .then(sanityCheck)
  .then(lexFile)
  .then(parseFile)
  .then(data => {
    expect(data.length).toEqual(11);
    let last = data.pop();
    expect(last.number).toContain('123456789');
    let iterator = 0;
    for (let line of data) {

      // 000000000 to 999999999
      let match = iterator.toString().repeat(SYMBOLS_PER_LINE);
      expect(line.number).toContain(match);
      ++iterator;
    }
  }));
});
