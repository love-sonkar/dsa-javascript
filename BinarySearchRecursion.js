let array = [3, 5, 7, 13, 14];
let find = 14;
let positon;
let start = 0;
let end = array.length - 1;

function BinarySearchRecursion(arr, s, e) {
  let mid = Math.floor((s + e) / 2);
  if (find == arr[mid]) {
    positon = mid;
    return true;
  } else if (find > arr[mid]) {
    BinarySearchRecursion(array, mid + 1, e);
  } else {
    BinarySearchRecursion(array, s, mid - 1);
  }

  return false;
}

console.log(BinarySearchRecursion(array, start, end));
console.log(positon);
