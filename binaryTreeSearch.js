function maxDepth(root) {
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  //   return maxDepth(root.right);
}

class TreeNode {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }
}
const findNode = (node, value) => {
  if (node.value == value) {
    return node;
  } else {
    if (node.left) {
      const leftValue = findNode(node.left, value);
      if (leftValue) return leftValue;
    }
    if (node.right) {
      const rightValue = findNode(node.right, value);
      if (rightValue) return rightValue;
    }
  }
  return null;
};

function deserialize(queue) {
  if (queue.length === 1 && queue[0] == null) {
    return null;
  }
  let tree = new TreeNode(queue[0]);
  const cloneQueue = [...queue];
  cloneQueue.shift();
  for (let i = 0; i < queue.length; ++i) {
    const node = findNode(tree, queue[i]);
    if (node) {
      const leftValue = cloneQueue.shift();
      const rightValue = cloneQueue.shift();
      if (leftValue) node.left = new TreeNode(leftValue);
      if (rightValue) node.right = new TreeNode(rightValue);
    }
  }
  return tree;
}

function buildQueue(raw) {
  console.log(raw);
  const queue = [];
  for (let i = 0; i < raw.length; ++i) {
    queue.push(raw[i] !== "null" ? parseInt(raw[i]) : null);
  }
  return queue;
}

// read inputs
// const input = readline();
const queue = buildQueue("7,6,4,14,41,8,9,5,1,3".split(","));
const tree = deserialize(queue);

// // solution
const output = maxDepth(tree);
//print the output
console.log(tree);
console.log(output);
