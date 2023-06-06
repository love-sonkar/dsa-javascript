// define array
let array = ["12", "45", "65", "28", "54", "68"];

// which position of array you want to remove
let position = 4;

// logic for removing element
for (let i = position; i < array.length - 1; i++) {
  array[i] = array[i + 1];
}

// for removing last element
array.length = array.length - 1;

//console.log
console.log(array);
