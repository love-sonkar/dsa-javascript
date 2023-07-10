// linked list

class List {
  constructor(initialNode) {
    this.head = {
      value: initialNode,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }

  appendNode(newnode) {
    // this is for creating new node in node list
    let newNode = {
      value: newnode,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }
}

let newlist = new List(4);
newlist.appendNode(5);
newlist.appendNode(6);

console.log(newlist);
