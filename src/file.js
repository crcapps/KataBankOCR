import fs from 'fs';

const LINE_LENGTH = 27;
const LINE_COUNT = 4;
const NEWLINE_REGEX = /(\r\n|\n|\r)+/gm;
const VALID_CHARACTER_REGEX = /^[ _\|\n]+$/g;
const WHITESPACE_LINE_REGEX = /^ {27,27}$/;

export const readFile = filePath => new Promise((fulfill, reject) => {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      reject(error);
    } else {
      fulfill(data);
    }
  });
});

const computeFileChecksum = data => {

  // Bouncer for empty data
  if (!data.length > 0) {
    return false;
  }

  const trimData = data.replace(NEWLINE_REGEX, '');

  // Bouncer for data consisting of only newlines
  if (!trimData.length > 0) {
    return false;
  }

  const lineLength = (trimData.length) % LINE_LENGTH;
  const lineCount = (trimData.length) % LINE_COUNT;
  const lineCountCheck = lineCount === 0;
  const lineLengthCheck = lineLength === 0;
  return lineCountCheck && lineLengthCheck;
};

// There is a line consisting of only whitespace between the numbers
const validateBlankLines = data => {
  const lines = data.split('\n');
  let iteration = 1;
  for (let line of lines) {
    if (iteration % 4 === 0) {
      if (!line.match(WHITESPACE_LINE_REGEX)) {
        return false;
      }
    }

    iteration++;
  }

  return true;
};

const validateFileContents = data => {
  let validContentsCheck = data.match(VALID_CHARACTER_REGEX);
  let blankLinesCheck = validateBlankLines(data);
  return validContentsCheck && blankLinesCheck;
};

// Makes sure that the file conforms to line length and count ratios
// Default is length of 27 in groups of 4
// Ensures no invalid characters are in file
export const sanityCheck = data => new Promise((fulfill, reject) => {

  // Normalize line endings.
  const cleanData = data.replace(NEWLINE_REGEX, '\n');
  const checksumValid = computeFileChecksum(cleanData);
  const contentsValid = validateFileContents(cleanData);
  if (checksumValid && contentsValid) {
    fulfill(cleanData);
  } else {
    const checksumMsg = ' Invalid file checksum.';
    const contentsMsg = ' Invalid file contents.';
    const checksumErrMsg = `${checksumValid ? '' : checksumMsg}`;
    const contentsErrMsg = `${contentsValid ? '' : contentsMsg}`;
    const errMsg = `Invalid input:${checksumErrMsg}${contentsErrMsg}`;

    reject(new Error(errMsg));
  }
});
