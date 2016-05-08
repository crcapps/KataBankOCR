import { readFile, sanityCheck } from '../src/file';
import { lexFile } from '../src/lexer';
import { parseFile } from '../src/parser';

import {
  FILENAME_4,
} from '../__mocks__/fs';

import {
  AMBIGUOUS,
} from '../src/parser';

jest.mock('fs');
jest.unmock('../src/file');
jest.unmock('../src/lexer');
jest.unmock('../src/parser');
jest.unmock('../src/checksum');

describe('User Story 4: Parsing Numbers', () => {

  // Feed it the first use case data.
  pit('', () => readFile(FILENAME_4)
  .then(sanityCheck)
  .then(lexFile)
  .then(parseFile)
  .then(data => {
    let first = data[0];
    expect(first.number).toContain('711111111');
    expect(first.status).toBeNull;
    expect(first.guesses).toBeNull();

    let second = data[1];
    expect(second.number).toContain('777777177');
    expect(second.status).toBeNull;
    expect(second.guesses).toBeNull();

    let third = data[2];
    expect(third.number).toContain('200800000');
    expect(third.status).toBeNull;
    expect(third.guesses).toBeNull();

    let fourth = data[3];
    expect(fourth.number).toContain('333393333');
    expect(fourth.status).toBeNull;
    expect(fourth.guesses).toBeNull();

    let fifth = data[4];
    expect(fifth.number).toContain('888888888');
    expect(fifth.status).toEqual(AMBIGUOUS);
    expect(fifth.guesses).toEqual(['888886888', '888888880', '888888988']);

    let sixth = data[5];
    expect(sixth.number).toContain('555555555');
    expect(sixth.status).toEqual(AMBIGUOUS);
    expect(sixth.guesses).toEqual(['555655555', '559555555']);

    let seventh = data[6];
    expect(seventh.number).toContain('666666666');
    expect(seventh.status).toEqual(AMBIGUOUS);
    expect(seventh.guesses).toEqual(['666566666', '686666666']);

    let eighth = data[7];
    expect(eighth.number).toContain('999999999');
    expect(eighth.status).toEqual(AMBIGUOUS);
    expect(eighth.guesses).toEqual(['899999999', '993999999', '999959999']);

    let ninth = data[8];
    expect(ninth.number).toContain('490067715');
    expect(ninth.status).toEqual(AMBIGUOUS);
    expect(ninth.guesses).toEqual(['490067115', '490067719', '490867715']);

    let tenth = data[9];
    expect(tenth.number).toContain('123456789');
    expect(tenth.status).toBeNull();
    expect(tenth.guesses).toBeNull();

    let eleventh = data[10];
    expect(eleventh.number).toContain('000000051');
    expect(eleventh.status).toBeNull();
    expect(eleventh.guesses).toBeNull();

    let twelfth = data[11];
    expect(twelfth.number).toContain('490867715');
    expect(twelfth.status).toBeNull();
    expect(twelfth.guesses).toBeNull();
  }));
});
