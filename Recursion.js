//example 1 get factorial

let data = 5;

function Factorial(item) {
  if (item == 0) {
    return 1;
  }
  return item * Factorial(item - 1);
}
console.log(Factorial(data));

// example 2 get table of any number
