import { readFile, sanityCheck } from '../src/file';
import { lexFile } from '../src/lexer';
import { parseFile } from '../src/parser';

import {
  FILENAME_4,
} from '../__mocks__/fs';

jest.mock('fs');
jest.unmock('../src/file');
jest.unmock('../src/lexer');
jest.unmock('../src/parser');

describe('User Story 1: Parsing Numbers', () => {

  // Feed it the first use case data.
  pit('correctly parses valid numbers', () => readFile(FILENAME_4)
  .then(sanityCheck)
  .then(lexFile)
  .then(parseFile)
  .then(data => {
  }));
});
