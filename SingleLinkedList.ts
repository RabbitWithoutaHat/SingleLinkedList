import IList from "./IList";
import Node from "./Node";

export default class SingleLinkedList<T extends Object> implements IList<T> {
  private _head: Node = null;
  private _tail: Node = null;

  constructor(value: T) {
    const initialNode: Node = new Node(value);
    this._head = initialNode;
    this._tail = initialNode;
  }

  private get tail(): Node {
    return this._tail;
  }

  private set tail(node: Node) {
    this._tail = node;
  }

  private get head(): Node {
    return this._head;
  }

  private set head(node: Node) {
    this._head = node;
  }

  public insertValue(value: T, location?: number): void {
    let newNode = new Node(value);

    // Insert at last pos
    if (location === undefined) {
      this.tail.next = newNode;
      this.tail = newNode;
      return;
    }

    // Insert at first pos
    if (location === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < location; i++) {
        currentNode = currentNode.next;
      }
      newNode = currentNode.next;
      currentNode.next = newNode;
    }
  }

  public traverseList(): void {
    let currentNode: Node = this.head;

    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
  public findValue(value: T): Node {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }
  public deleteValue(location: number): boolean {
    let currentNode = this.head;
    let prevNode = this.head;
    for (let i = 0; i <= location; i++) {
      currentNode = currentNode.next;
    }
    for (let i = 0; i < location; i++) {
      prevNode.next = currentNode;
    }
    return true;
  }
}
