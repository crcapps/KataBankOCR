import { readFile, sanityCheck } from '../src/file';

const FILENAME_1 = `1.txt`;
const FILENAME_3 = `3.txt`;
const FILENAME_4 = `4.txt`;
const BAD_FILENAME = `foo.txt`;

jest.mock('fs');
jest.unmock('../src/file');

describe('File handler', () => {
  pit('reads an existing file', () => readFile(FILENAME_3)
  .then(data => expect(data).toBeDefined()));

  pit('rejects the promise on an error', () => readFile(BAD_FILENAME)
  .catch(error => expect(error).toBeDefined()));

  pit('sanity checks the line length and line count of the input file',
  () => readFile(FILENAME_3)
  .then(sanityCheck)
  .then(data => {
    expect(data).toBeDefined();
    console.log(`\n${data}`);
  }));
});
