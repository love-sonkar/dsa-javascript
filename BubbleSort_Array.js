//this is bubblesort logic in array

let array = [20, 10, 8];

//this is my function to sort arry in ascending order
function BubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(BubbleSort(array));

// my explanation ----
//in 11th line i check weather the array's[first element] is greater then array's[second element]
// if we get array's[first element] is greater then we store this value to an temporary varible and we store the array's[second element] to array's[first element] and you already know that we store array's[first element] to an temporary varialbe so we switch this to our array's[second element]
// then rest we get the sorted array in return

// -----Thanks----
