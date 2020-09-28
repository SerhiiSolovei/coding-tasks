/**
 * Write function to calculate age.
 */

const MS_IN_HOUR = 1000 * 60 * 60;
const MS_IN_DAY = MS_IN_HOUR * 24;

const calculateAge = (birthday) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDay = now.getDate();
  const birthdayYear = birthday.getFullYear();
  const birthdayMonth = birthday.getMonth();
  const birthdayDay = birthday.getDate();

  if (currentMonth < birthdayMonth) {
    return currentYear - birthdayYear - 1;
  } else {
    if (currentDay < birthdayDay) {
      return currentYear - birthdayYear - 1;
    } else {
      return currentYear - birthdayYear;
    }
  }
};

console.log(calculateAge(new Date(1982, 11, 4))); // 37
console.log(calculateAge(new Date(1962, 1, 1))); // 58

////////////////////////////////////////////////////////////////////////////////////

/**
 * Write function that calculates number of days in month
 */

const getDaysInMonth = (month, year) => {
  const nextMonth = new Date(year, month);
  nextMonth.setDate(0);
  return nextMonth.getDate();
};

console.log(getDaysInMonth(1, 2012)); // 31
console.log(getDaysInMonth(2, 2012)); // 29
console.log(getDaysInMonth(9, 2012)); // 30
console.log(getDaysInMonth(12, 2012)); // 31

////////////////////////////////////////////////////////////////////////////////////

/**
 * Write function to test whether a date is a weekend.
 */

const isWeekend = (dateString) => {
  const date = new Date(dateString);
  const dayOfTheWeek = date.getDay();
  return dayOfTheWeek === 0 || dayOfTheWeek === 6;
};

console.log(isWeekend("Sep 27, 2020")); // true
console.log(isWeekend("Sep 28, 2020")); // false

////////////////////////////////////////////////////////////////////////////////////

/**
 * Write function to get difference between two dates in days.
 */

const dateDiffInDays = (date1, date2) => {
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);
  console.log(firstDate, secondDate);
  return Math.floor((secondDate.getTime() - firstDate.getTime()) / MS_IN_DAY);
};

console.log(dateDiffInDays("04/02/2014", "11/04/2014")); // 216
console.log(dateDiffInDays("12/02/2014", "11/04/2014")); // -28
