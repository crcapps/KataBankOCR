export const checksum = data => {
  // Bounce non numeric input
  const numericRegex = /^\d+$/;
  if (!data.match(numericRegex)) {
    return false;
  }

  let numbers = data.split('');
  numbers.reverse();
  let iterator = 1;
  let checksum = 0;
  for (let number of numbers) {
    checksum += iterator * parseInt(number);
    ++iterator;
  }

  return checksum % 11 === 0;
};
