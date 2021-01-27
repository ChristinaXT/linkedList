class linkedList {
 constructor () {
   this.head = null; //first element of list
   this.tail = null; //last element of list
 }
  append(value) {
    const newNode = {value: value, next: null};

    if(this.tail) {
       this.tail.next = newNode;
    }
    this.tail = newNode;
    if(!this.head) {
      this.head = newNode;
    }
  }
  toArray() {
    const elements = [];

    let curNode = this.head;
    while(curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }
    return elements;
  }
}

const linkedList1 = new linkedList();
linkedList1.append(1);
linkedList1.append(5);
linkedList1.append(7);
linkedList1.append(10);
console.log(linkedList1.toArray());
