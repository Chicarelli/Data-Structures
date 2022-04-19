class Deque {
  count: number;
  lowestCount: number;
  items = {}

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;  
    }
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    const element = this.items[this.count];
    delete this.items[this.count];
    this.count--;
    return element;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    const element = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return element;
  }

  peekBack() {
    return this.items[this.count - 1];
  }

  peekFront() {
    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty) {
      return '';
    }

    let objString = `${this.items[this.lowestCount]}`;

    for (let i = this.lowestCount; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }

    return objString;
  }

}