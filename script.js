var isDate = function (input) {
   // If the input is already a Date object and not NaN
  if (input instanceof Date && !isNaN(input)) {
    return true;
  }

  // If the input is a string, attempt to parse it into a Date
  if (typeof input === 'string') {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate);
  }

  // If the input is a number, assume it is a timestamp
  if (typeof input === 'number') {
    const timestampDate = new Date(input);
    return !isNaN(timestampDate);
  }

  // If none of the above conditions are met, return false
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
