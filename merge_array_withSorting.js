let array1 = [4, 19, 13, 19, 20, 45, 73, 77, 81, 86];
let array2 = [6, 7, 31, 44, 65, 74, 100];

let NewArray = [];

let i = 0;
let array1index = 0;
let array2index = 0;

//here we use array1index as condition because when we push new element to NewArray from array1 then we increase this and if we push array2's element to NewArray then we increase array2index and we run the while loop to length of the array

while (array1index < array1.length && array2index < array2.length) {
  //this if statement is for sorting the array
  //here we are checking array1[index] is less then array[index] then we push array1's element to new array
  if (array1[array1index] < array2[array2index]) {
    NewArray[i] = array1[array1index];
    array1index++;
  }
  // else we push array2's element in new array
  else {
    NewArray[i] = array2[array2index];
    array2index++;
  }

  i++;
}

//thease extra while loop for elements that are not push in the NewArray
while (array2index < array2.length) {
  NewArray[NewArray.length] = array2[array2index];
  array2index++;
}

while (array1index < array1.length) {
  NewArray[NewArray.length] = array1[array1index];
  array1index++;
}

console.log(NewArray);
