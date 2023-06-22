class Stack {
  constructor() {
    this.stack = [];
  }

  length() {
    return this.stack.length;
  }

  push(value) {
    this.stack[this.length()] = value;
  }

  pop() {
    let popelement = this.stack[this.length() - 1];
    this.stack.length = this.stack.length - 1;
    return popelement;
  }

  reverse(str) {
    str = str.split("");
    for (let i = 0; i < str.length; i++) {
      this.stack.push(str[i]);
    }
    for (let j = 0; j < str.length; j++) {
      str[j] = this.stack.pop();
    }
    return str.join("");
  }
}

let ss = new Stack();

console.log(ss.reverse("ola"));
