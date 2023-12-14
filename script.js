var isDate = function (input) {
  // Check if the input is a string
  if (typeof input === 'string') {
    // Attempt to create a Date object from the string
    const parsedDate = new Date(input);

    // Check if the parsedDate is a valid date and the input is not an empty string
    return !isNaN(parsedDate) && input.trim() !== '';
  }

  // Return false for other types of input
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
