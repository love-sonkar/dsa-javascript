// stack push and pop method

let array = [];
let maxvalue = 5;

function PushMethod(n) {
  if (array.length >= maxvalue) {
    return console.log(`sorry you can not enter ${n} because stack is full`);
  }
  array[array.length] = n;
}

function PopMethod() {
  if (array.length == 0) {
    return console.log("cant remove anything because stack is empty");
  }
  array.length = array.length - 1;
}

PushMethod(12);
PushMethod(64);
PopMethod();
PopMethod();

console.log(array);
