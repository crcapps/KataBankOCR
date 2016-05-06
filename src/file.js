import fs from 'fs';
import * as constants from './constants/file';

export const readFile = filePath => new Promise((fulfill, reject) => {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      reject(error);
    } else {
      fulfill(data);
    }
  });
});

export const sanityCheck = data => new Promise((fulfill, reject) => {
  let newLineRegex = /(\r\n|\n|\r)+/gm;
  let trimData = data.replace(newLineRegex, '');
  let cleanData = data.replace(newLineRegex, '\n');
  let lineLength = (trimData.length) % constants.LINE_LENGTH;
  let lineCount = (trimData.length) % constants.LINE_COUNT;
  if (lineLength === 0 && lineCount === 0) {
    fulfill(cleanData);
  } else {
    reject(new RangeError(`Invalid input data.`));
  }
});