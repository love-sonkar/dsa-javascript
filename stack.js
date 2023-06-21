// stack push and pop method

let stack = [];
let maxvalue = 5;

function PushMethod(n) {
  if (stack.length >= maxvalue) {
    return console.log(`sorry you can not enter ${n} because stack is full`);
  }
  stack[stack.length] = n;
}

function PopMethod() {
  if (stack.length == 0) {
    return console.log("cant remove anything because stack is empty");
  }
  stack.length = stack.length - 1;
}

PushMethod(12);
PushMethod(64);
PopMethod();
PopMethod();

console.log(stack);
