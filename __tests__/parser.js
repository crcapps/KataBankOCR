import { readFile, sanityCheck } from '../src/file';
import { lexFile } from '../src/lexer';
import { parseFile } from '../src/parser';

import {
  FILENAME_OK,
} from '../__mocks__/fs';

jest.mock('fs');
jest.unmock('../src/file');
jest.unmock('../src/lexer');
jest.unmock('../src/parser');

describe('', () => {
  pit('', () => readFile(FILENAME_OK)
  .then(sanityCheck)
  .then(lexFile)
  .then(parseFile));
});
