import { readFile, sanityCheck } from '../src/file';
import { lexFile } from '../src/lexer';
import { parseFile } from '../src/parser';

import {
  FILENAME_1,
} from '../__mocks__/fs';

jest.mock('fs');
jest.unmock('../src/file');
jest.unmock('../src/lexer');
jest.unmock('../src/parser');

describe('', () => {
  pit('', () => readFile(FILENAME_1)
  .then(sanityCheck)
  .then(lexFile)
  .then(parseFile));
});
