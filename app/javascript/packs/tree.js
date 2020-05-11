class Tree {
  constructor(valuesArr) {
    this.valuesArr = valuesArr;
  }

  calculateMax(){
    let root = null
    const tree = this.insertLevelOrder(this.valuesArr, root, 0, this.valuesArr.length)
    return this.maxDepth(tree)
  }

  insertLevelOrder(arr, root, i, n){
    if(i < n){
      let temp = new ListNode(arr[i])
      root = temp

      // insert left child
      root.left = this.insertLevelOrder(arr, root.left, 2 * i + 1, n)

      // insert right child
      root.right = this.insertLevelOrder(arr, root.right, 2 * i + 2, n)
    }
    return root
  }

  maxDepth(root) {
      let fringe = [{ node: root, depth: 1, sum: root.value }],
          current = fringe.pop(),
          max = 0,
          maxSum = 0

      while (current && current.node) {
          let node = current.node

          if (node.left && node.left.value) {
            fringe.push({ node: node.left, depth: current.depth + 1, sum: current.sum + node.left.value })
          }
          if (node.right && node.right.value) {
            fringe.push({ node: node.right, depth: current.depth + 1, sum: current.sum + node.right.value})
          }

          let currentDepthSum = current.sum
          if(current.depth > max ){
            maxSum = currentDepthSum
          }

          if (current.depth >= max) {
            max = current.depth
            maxSum = Math.max(currentDepthSum, maxSum)
          }

          current = fringe.pop()
      }
      return maxSum
  };
}

class ListNode {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default Tree
