import 'babel-polyfill';

import pjson from '../package.json';

import program from 'commander';

import { readFile, sanityCheck, writeFile } from './file';
import { lexFile } from './lexer';
import { parseFile } from './parser';

function* dataToStrings(data) {
  while (data.length) {
    let item = data.splice(0, 1)[0];
    let status = item.status ? ` ${item.status}` : '';
    let guesses = item.guesses ? ` ${item.guesses}` : '';
    yield `${item.number}${status}${guesses}`;
  };
}

const formatData = data => {
  let formattedData = [];
  let lines = dataToStrings(data);
  for (let line of lines) {
    formattedData.push(line);
  }

  return formattedData.join('\n');
};

const logError = error => {
  console.error(error.message);
};

const logData = data => {
  console.log('\n');
  console.log(formatData(data));
};

let inFile = null;
let outFile = null;

program
  .version(pjson.version)
  .usage('<infile> [outfile]')
  .arguments('<infile> [outfile]')
  .action((infile, outfile) => {
    inFile = infile;
    outFile = outfile;
  })
  .parse(process.argv);

if (inFile) {
  readFile(inFile)
  .then(sanityCheck)
  .then(lexFile)
  .then(parseFile)
  .then((data) => {
    if (outFile) {
      console.log(`Writing output to ${outFile}`);
      writeFile(outFile, formatData(data));
    } else {
      logData(data);
    }
  })
  .catch(logError);
} else {
  console.log('Input file is required.  Use the -h option for help.');
}
