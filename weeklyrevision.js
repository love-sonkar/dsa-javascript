let array = [12, 23, 15, 26, 89, 15];

let findval = 15;
function SearchArray(arr, find) {
  let newfindarray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === find) {
      newfindarray[newfindarray.length] = arr[i];
    }
  }
  return newfindarray;
}
console.log(SearchArray(array, findval));

let position = 0;
function DeleteElement(arr, position) {
  for (let i = position; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}
console.log(DeleteElement(array, position));

function InsertElement(arr, position, newval) {
  for (let i = arr.length - 1; i > 0; i--) {
    if (i >= position) {
      arr[i + 1] = arr[i];
      if (position == i) {
        arr[i] = newval;
      }
    }
  }
  return arr;
}
console.log(InsertElement(array, 2, 4));

let arrayone = [2, 4, 6];
let arraytwo = [5, 7, 8];
function MergeArray(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1[arr1.length] = arr2[i];
  }
  return arr1;
}

console.log(MergeArray(arrayone, arraytwo));
