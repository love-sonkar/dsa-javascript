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
