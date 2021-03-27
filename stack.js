/**
 * One element of the Stack
 * @property {any} value
 * @property {Node} previous -> Pointer to the previous element
 */
class Node {
  constructor(value, previousNode) {
    this.value = value;
    this.previous = previousNode;
  }
}

/**
 * Stack implementation
 *
 * Pictured as a pile of plates,
 * Implemented as a Linked List from the top to the bottom.
 *
 * \____/ -> top element
 * \____/
 * \____/
 *
 * @property {Node} top -> Element at the top of the Stack
 * @property {number} size -> Number of elements in the Stack
 */
class Stack {
  constructor() {
    const args = Array.from(arguments); // Allows 0 or more initial values in paramaters

    let temporaryNode = new Node(null, null); // Default when Stack is empty

    for (let i = 0; i < args.length; i += 1) {
      temporaryNode = new Node(args[i], temporaryNode);
    }

    this.top = temporaryNode;
    this.size = args.length;
  }

  push(value) {
    this.top = new Node(value, this.top);
    this.size += 1;
  }

  pop() {
    if (this.size === 0) {
      // Prevent this.top to became 'null'
      // We want to keep an empty Stack as a Node(null, null)
      return null;
    }

    const poppedValue = this.top.value;
    this.top = this.top.previous;
    this.size -= 1;

    return poppedValue;
  }

  peek() {
    return this.top.value;
    // Return null if empty Stack
  }

  swap() {
    if (this.size < 2) {
      // Need at least 2 elements to swap
      return;
    }
    // Store two last values & remove them
    const value1 = this.top.value;
    this.pop();
    const value2 = this.top.value;
    this.pop();

    // Put them back in reverse order
    this.push(value1);
    this.push(value2);
  }

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
