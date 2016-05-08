import { checksum } from '../src/checksum';

jest.unmock('../src/checksum');

describe('Checksum', () => {
  it('passes checksum for valid numbers', () => {
    let validZeros = '000000000';
    let validOneToNine = '123456789';
    let validFiftyOne = '000000051';
    expect(checksum(validZeros)).toBeTruthy();
    expect(checksum(validOneToNine)).toBeTruthy();
    expect(checksum(validFiftyOne)).toBeTruthy();
  });

  it('fails checksum for invalid numbers', () => {
    let invalidNumber = '111111111';
    let notNumber = '1A223D345';
    expect(checksum(invalidNumber)).toBeFalsy();
    expect(checksum(notNumber)).toBeFalsy();
  });
});
