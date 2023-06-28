// binary search find n in array searching algo

let BinarySearch = function (array, n) {
  let start = 0;
  let end = array.length - 1;
  let found;
  if (array.length == 0) return "array length is 0";
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === n) {
      found = mid;
    }
    if (array[mid] < n) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  if (found == undefined) return 0;
  return found;
};

console.log(BinarySearch([0, 0], 0));
