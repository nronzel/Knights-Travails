export default class Queue {
  constructor() {
    this.elements = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    if (this.isEmpty) return undefined;
    let item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }

  peek() {
    if (this.isEmpty) return undefined;
    return this.elements[this.head];
  }

  length() {
    return this.tail - this.head;
  }

  isEmpty() {
    return this.length === 0;
  }
}
