let array = [43, 34, 87, 10];

let newArray = [56, 12, 65, 33];
let merge = [];

for (let i = 0; i < array.length; i++) {
  merge[i] = array[i];
}
for (let i = 0; i < newArray.length; i++) {
  merge[array.length + i] = newArray[i];
}

console.log(merge);

// my personal function for merging two array with dsa

let arrayone = [2, 4, 6];
let arraytwo = [5, 7, 8];

function MergeArray(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1[arr1.length] = arr2[i];
  }
  return arr1;
}

console.log(MergeArray(arrayone, arraytwo));
