// merge any two array and sort in ascending order

let array1 = [13, 36, 23, 37, 29, 45];

let array2 = [9, 23, 46, 26, 57, 89];

function mergeandsort(arr = [], arr2 = []) {
  for (let i = 0; i < arr2.length; i++) {
    arr[arr.length] = arr2[i];
  }
  let sortedArray = arr;
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 0; j < sortedArray.length; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        let temval = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temval;
      }
    }
  }
  return sortedArray;
}

console.log(mergeandsort(array1));

// my explanation
// in first loop i just merge the array and leter i stored the value's in sortedArray
// in second loop i use the bubble sort method to sort the array in ascanding order if you don't know what is bubble sort you can check my bubblesort method

// -----Thanks----
