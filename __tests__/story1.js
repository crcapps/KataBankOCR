import { readFile, sanityCheck } from '../src/file';
import { lexFile } from '../src/lexer';
import { parseFile } from '../src/parser';

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
jest.unmock('../src/parser');

describe('', () => {
  pit('', () => readFile(FILENAME_OK)
  .then(sanityCheck)
  .then(lexFile));
});
