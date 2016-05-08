import { readFile, sanityCheck } from '../src/file';
import { lexFile } from '../src/lexer';
import { parseFile } from '../src/parser';

import {
  FILENAME_3,
} from '../__mocks__/fs';

import {
  ILLEGIBLE,
  CHECKSUM_ERROR,
} from '../src/parser';

jest.mock('fs');
jest.unmock('../src/file');
jest.unmock('../src/lexer');
jest.unmock('../src/parser');

describe('User Story 1: Parsing Numbers', () => {

  // Feed it the first use case data.
  pit('correctly parses valid numbers', () => readFile(FILENAME_3)
  .then(sanityCheck)
  .then(lexFile)
  .then(parseFile)
  .then(data => {
    const first = data[0];
    expect(first.number).toContain('000000051');
    expect(first.status).toContain(CHECKSUM_ERROR);
    const second = data[1];
    expect(second.number).toContain('49006771?');
    expect(second.status).toContain(ILLEGIBLE);
    const third = data[2];
    expect(third.number).toContain('1234?678?');
    expect(third.status).toContain(ILLEGIBLE);
  }));
});
