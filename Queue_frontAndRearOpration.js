class Queue {
  constructor(maxval) {
    this.queue = [];
    this.maxval = maxval;
  }

  enqueue(newvalue) {
    if (this.queueLength() >= this.maxval) return console.log("Queue is full");
    this.queue[this.queueLength()] = newvalue;
  }

  dequeue() {
    if (this.isEmpty()) return console.log("Queue is empty");
    for (let i = 0; i < this.queueLength(); i++) {
      this.queue[i] = this.queue[i + 1];
    }
    this.queue.length = this.queue.length - 1;
  }

  isEmpty() {
    if (this.queue.length == 0) return true;
    return false;
  }

  front() {
    if (this.isEmpty()) return console.log("Queue is Empty");
    return console.log(this.queue[0]);
  }

  rear() {
    if (this.isEmpty()) return console.log("Queue is Empty");
    return console.log(this.queue[this.queueLength() - 1]);
  }

  queueLength() {
    if (this.isEmpty()) return 0;
    return this.queue.length;
  }

  display() {
    console.log(this.queue);
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(5);
queue.enqueue(10);
queue.front();
queue.rear();
queue.dequeue();
queue.display();
