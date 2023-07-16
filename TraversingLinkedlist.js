class LinkedList {
  constructor(valu) {
    this.head = { val: valu, next: null };
    this.tail = this.head;
    this.size = 1;
  }
  appendList(valu) {
    let newObj = {
      val: valu,
      next: null,
    };

    this.tail.next = newObj;
    this.tail = newObj;
    this.size++;
  }
  traversingNode() {
    let currentNode = this.head;
    for (let i = 0; i < this.size; i++) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }

  updation(posi, valu) {
    let currentNode = this.head;
    for (let i = 0; i <= posi; i++) {
      if (i == posi) {
        currentNode.val = valu;
      }
      currentNode = currentNode.next;
    }
  }
}

let list = new LinkedList(2);
list.appendList(3);
list.appendList(0);
list.appendList(5);

list.updation(1, 1);
list.traversingNode();
// console.log(list);
