/** Task 1
 * Given an array nums of integers, return how many of them contain an even number of digits.
*/
const findNumbers = function(nums) {
    let sumOfEven = 0;
    nums.forEach(num => {
        let sumOfDigits = 0;
        while(num != 0) {
            sumOfDigits += 1;
            num = Math.floor(num / 10);
        }
        sumOfDigits % 2 === 0 ? sumOfEven += 1 : sumOfEven;
    });

    return sumOfEven;
};

console.log(findNumbers([12,345,2,6,7896,3,45,8555,969645])); // 5


/** Task 2
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
*/
const findMaxConsecutiveOnes = function(nums) {
    let sum = 0;
    let arrOfSum = [];
    nums.forEach((num, index) => {
       if (num === 1) {
         sum += 1;
       } else {
         sum = 0;
       };
       if (Math.max(...arrOfSum) < sum) {
         arrOfSum.push(sum);
       };
    });

    return arrOfSum[arrOfSum.length-1];
};
console.log(findMaxConsecutiveOnes([1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1])); // 5


/** Task 3
 * Given an integer array nums sorted in non-decreasing order,
 * return an array of the squares of each number sorted in non-decreasing order.
 */

 const sortedSquares = function(nums) {
  const squaresNums = nums.map(num => num*num);
  const sortedNums = squaresNums;
  let prevNum;

  for (let i = 0; i < sortedNums.length - 1; i++) {
    for (let j = i + 1; j < sortedNums.length; j++) {
      if (sortedNums[j] < sortedNums[i]) {
        prevNum = sortedNums[i];
        sortedNums[i] = sortedNums[j];
        sortedNums[j] = prevNum;
      }
    }
  }
  return sortedNums;
};

console.log(sortedSquares([-4, -1,-15,0, 9, 3, 10])); // [0, 1, 9, 16, 81, 100, 225];

/** Task 4
 * Given a fixed-length integer array arr,
 * duplicate each occurrence of zero, shifting the remaining elements to the right.
 */

 const duplicateZeros = function(arr) {
  let newArr = [];
  arr.forEach((num) => {
    if (num == 0) {
      newArr.push(num, num);
      arr.pop();
    } else {
      newArr.push(num);
    }
  });
  return newArr;
};

console.log(duplicateZeros([1,0,2,3,0,4,5,0]))
