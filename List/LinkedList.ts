import { defaultEquals } from '../utils';
import { Node } from './Node';

export default class LinkedList {
  count: number;
  head: undefined|Node;
  equalsFn: Function;

  constructor( equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);

    let current: Node;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next != null) {
        current = current.next;
      }

      //atribui o novo elemento a next para criar ligação
      current.next = node; 
    }

    this.count++;
  }
}