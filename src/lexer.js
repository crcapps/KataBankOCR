export const LINE_GROUP_COUNT = 4;
export const SYMBOL_SIZE = 3;
export const SYMBOLS_PER_LINE = 9;

function* groupLines(lines) {
  while (lines.length >= LINE_GROUP_COUNT) {
    let group = lines.splice(0, LINE_GROUP_COUNT);
    let blankLine = group.pop();
    yield group;
  }
}

const splitGroups = groups => {
  let grouper = groupLines(groups);
  let splitGroups = [];
  for (let group of grouper) {
    let splitGroup = [];
    for (let line of group) {
      splitGroup.push(line.match(/.{1,3}/g));
    }

    splitGroups.push(splitGroup);
  }

  return splitGroups;
};

const lexGroup = group => {
  let lexedGroup = [];
  let iterations = group[0].length;
  for (let i = 0; i < iterations; i++) {
    let token = [];
    for (let line of group) {
      token.push(line[i]);
    }

    lexedGroup.push(token);
  }

  return lexedGroup;
};

export const lexFile = file => new Promise((fulfill, reject) => {
  try {
    const lines = file.split('\n');
    const splitLines = splitGroups(lines);

    let lexedLines = [];
    for (let group of splitLines) {
      lexedLines.push(lexGroup(group));
    }

    fulfill(lexedLines);
  } catch (error) {
    reject(error);
  }
});
