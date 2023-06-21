class Stack {
  constructor(element) {
    this.stack = [];
    this.maxval = element;
  }

  push(element) {
    if (this.size() >= this.maxval) return console.log("stack is already full");
    this.stack[this.size()] = element;
  }

  pop() {
    if (this.size() === 0) return console.log("this stack is empty");
    this.stack.length = this.stack.length - 1;
  }

  display() {
    console.log(this.stack);
  }

  size() {
    return this.stack.length;
  }
}

const ss = new Stack(3);
ss.push(44);
ss.push(44);

ss.display();
