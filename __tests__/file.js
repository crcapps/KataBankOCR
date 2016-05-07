import { readFile, sanityCheck } from '../src/file';

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

const CHECKSUM_REGEX = /checksum/g;
const CONTENTS_REGEX = /contents/g;

jest.mock('fs');
jest.unmock('../src/file');

describe('File handler', () => {
  pit('reads an existing file', () => readFile(FILENAME_OK)
  .then(data => expect(data).toBeDefined()));

  pit('rejects the promise on file not found', () => readFile(FILENAME_404)
  .catch(error => expect(error.message).toContain('ENOENT')));

  pit('sanity checks the line length,line count, and contents of the input file',
  () => readFile(FILENAME_OK)
  .then(sanityCheck)
  .then(data => expect(data).toBeDefined()));

  pit('rejects the promise when the lines are not all the right length',
  () => readFile(FILENAME_INVALID_LINE_LENGTH)
  .then(sanityCheck)
  .catch(error => expect(error.message).toMatch(CHECKSUM_REGEX)));

  pit('rejects the promise when the line count is wrong',
  () => readFile(FILENAME_INVALID_LINE_COUNT)
  .then(sanityCheck)
  .catch(error => expect(error).toMatch(CHECKSUM_REGEX)));

  pit('rejects the promise when the input is empty',
  () => readFile(FILENAME_EMPTY)
  .then(sanityCheck)
  .catch(error => expect(error).toMatch(CHECKSUM_REGEX)));

  pit('rejects the promise when there are invalid characters in the file',
  () => readFile(FILENAME_INVALID_CHARACTERS)
  .then(sanityCheck)
  .catch(error => expect(error).toMatch(CONTENTS_REGEX)));

  pit('rejects the promise if every fourth line is not a full line of spaces',
  () => readFile(FILENAME_INVALID_BLANK_LINE)
  .then(sanityCheck)
  .catch(error => expect(error).toMatch(CONTENTS_REGEX)));
});
