import { readFile, sanityCheck } from '../src/file';
import { lexFile } from '../src/lexer';
import { parseFile } from '../src/parser';
import { checksum } from '../src/checksum';

import {
  ILLEGIBLE,
  CHECKSUM_ERROR,
} from '../src/parser';

import {
  FILENAME_1,
} from '../__mocks__/fs';

jest.mock('fs');
jest.unmock('../src/file');
jest.unmock('../src/lexer');
jest.unmock('../src/parser');
jest.unmock('../src/checksum');

describe('User Story 2: Calculating Checksums', () => {

  // Feed it the first use case data.
  pit('calculates checksums of parsed numbers', () => readFile(FILENAME_1)
  .then(sanityCheck)
  .then(lexFile)
  .then(parseFile)
  .then(data => {
    let last = data.pop();
    expect(last.status).toBeNull;  // 123456789 passes checksum

    let first = data.shift();
    expect(first.status).toBeNull; // 000000000 passes checksum

    for (let line of data) {

      // 111111111 to 999999999 do not pass checksum
      expect(line.status).toContain(CHECKSUM_ERROR);
    }
  }));
});
