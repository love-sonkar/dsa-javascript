// decending order

let array = [10, 8, 15, 35];

function SortArraySelection(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minval = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minval] < arr[j]) {
        minval = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minval];
    arr[minval] = temp;
  }
  return arr;
}

console.log(SortArraySelection(array));

//268. Missing Number
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
