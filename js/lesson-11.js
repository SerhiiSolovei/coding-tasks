/**
 * Write function to calculate age.
 */

const calculateAge = (birthday) => {
  // Your code here
};

console.log(calculateAge(new Date(1982, 11, 4))); // 32
console.log(calculateAge(new Date(1962, 1, 1))); // 53

////////////////////////////////////////////////////////////////////////////////////

/**
 * Write function that calculates number of days in month
 */

const getDaysInMonth = (month, year) => {
  // Your code here
};

console.log(getDaysInMonth(1, 2012)); // 31
console.log(getDaysInMonth(2, 2012)); // 29
console.log(getDaysInMonth(9, 2012)); // 30
console.log(getDaysInMonth(12, 2012)); // 31

////////////////////////////////////////////////////////////////////////////////////

/**
 * Write function to test whether a date is a weekend.
 */

const isWeekend = (date) => {
  // Your code here
};

console.log(isWeekend("Sep 27, 2020")); // true
console.log(isWeekend("Sep 28, 2020")); // false

////////////////////////////////////////////////////////////////////////////////////

/**
 * Write function to get difference between two dates in days.
 */

const dateDiffInDays = (date1, date2) => {
  // Your code here
};

console.log(dateDiffInDays("04/02/2014", "11/04/2014")); // 216
console.log(dateDiffInDays("12/02/2014", "11/04/2014")); // -28
