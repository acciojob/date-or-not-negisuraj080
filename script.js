var isDate = function (input) {
  //   write your code here
	if (input instanceof Date) {
    return !isNaN(input); // Check if it's a valid Date object
  }

  // Check if the input is a string
  if (typeof input === 'string') {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate); // Check if the string can be parsed into a valid Date
  }

  // Return false for other types of input
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
