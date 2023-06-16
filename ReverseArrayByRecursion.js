let array = [5, 23, 2];
function ReversArryRecursion(array, start, end) {
  if (start <= end) {
    let tempval = array[start];
    array[start] = array[end];
    array[end] = tempval;
    ReversArryRecursion(array, start + 1, end - 1);
  }
  return array;
}

console.log(ReversArryRecursion(array, 0, array.length - 1));
