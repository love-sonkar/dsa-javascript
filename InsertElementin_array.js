// array define
let array = [23, 45, 5, 10, 65];

// in which position you want to insert element
let positon = 3;

// what you want to insert
let newVal = 78;

// for loop for inserting new element
for (let i = array.length - 1; i >= 0; i--) {
  if (positon <= i) {
    array[i + 1] = array[i];
    if (positon == i) {
      array[i] = newVal;
    }
  }
}

//result
console.log(array);
