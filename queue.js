class Queue {
  constructor(maxvalue) {
    this.Queue = [];
    this.maxvalue = maxvalue;
  }

  enqueue(newVal) {
    if (this.Queue.length > this.maxvalue) return console.log("queue is full");
    this.Queue[this.Queue.length] = newVal;
  }

  dequeue() {
    if (this.Queue.length === 0) return console.log("queue is empty");
    for (let i = 0; i < this.Queue.length; i++) {
      this.Queue[i] = this.Queue[i + 1];
    }
    this.Queue.length = this.Queue.length - 1;
  }

  display() {
    console.log(this.Queue);
  }
}

let queue = new Queue(5);

queue.enqueue(54);
queue.enqueue(8);
queue.display();
