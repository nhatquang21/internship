class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    var newNode = new Node(data);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      node.left === null
        ? (node.left = newNode)
        : this.insertNode(node.left, newNode);
    } else {
      node.right === null
        ? (node.right = newNode)
        : this.insertNode(node.right, newNode);
    }
  }
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode(node, deletedNode) {
    if (node.data > deletedNode) {
      nodeLeft = this.removeNode(node.left, deletedNode);
      return node;
    } else if (node.data > deletedNode) {
      nodeRight = this.removeNode(node.right, deletedNode);
      return node;
    } else {
    }
  }
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
  getRootNode() {
    return this.root;
  }
}

var BST = new BinarySearchTree();

const arr = [25, 10, 7, 15, 22, 17, 13, 5, 9, 27];
const arr2 = [15, 25, 10, 7, 22, 17, 13, 5, 9, 27, 14];

const printBST = (node, lvl = 0, arr) => {
  let initialArr = [];
  initialArr = arr;

  const { data, left, right } = node;
  initialArr.push({
    key: lvl,
    Node: node,
  });
  if (left != null) {
    lvl++;
    printBST(left, lvl, initialArr);
  }
  lvl--;
  if (right != null) {
    lvl++;
    printBST(right, lvl, initialArr);
  }
  return initialArr;
};

const PrintBST = (node, lvl, arr) => {
  let intArr = [];
  intArr = arr;
  const { data, left, right } = node;
  let str = `${data}`;

  intArr.push({
    key: lvl,
    value: str,
  });

  if (left != null) {
    lvl++;
    PrintBST(left, lvl, intArr);
  }
  lvl--;
  if (right != null) {
    lvl++;
    PrintBST(right, lvl, intArr);
  }
  return intArr;
};
// function findParent(node, val, parent)
// {
//     if (node == null)
//         return;
//    // console.log(node.data == val)
//     if (node.data == val)
//     {
//         return parent
//     } else {
//         const foundParent = findParent(node.left, val, node.data);
//         console.log(foundParent)
//         if ( foundParent == null){
//             findParent(node.right, val, node.data);
//         }

//     }

// }

const insertTree = () => {
  arr.map((item) => {
    BST.insert(item);
  });
}
const handleRoot = () => {
  let arrOfLvl = [];
  let nodeWithLevel = printBST(BST.root, 0, arrOfLvl);
  const groupByKey = (list, key, { omitKey = false }) =>
    list.reduce(
      (hash, { [key]: value, ...rest }) => ({
        ...hash,
        [value]: (hash[value] || []).concat(
          omitKey ? { ...rest } : { [key]: value, ...rest }
        ),
      }),
      {}
    );
  let levelWithValue = groupByKey(nodeWithLevel, 'key', { omitKey: true });
 
  return levelWithValue
}
const printTree = (root) => {
  let listNode = handleRoot()
  if(!listNode){
    return;
  }
 // console.log(listNode)
  let size = Object.keys(listNode).length;
  for(let i = 0 ; i < size;i++){
    listNode[i].forEach(item => console.log(item['Node'].data))
  }
  // if (!root) return;
  // const { data, left, right } = root
  // console.log(data)

  // if (left) {
  //   printTree(left)
  // }
  // if (right) {
  //   printTree(right)
  // }
}
// let parentNodeValue = findParent(BST.root, 27, -1)
// console.log(parentNodeValue)
//   let arrayOfLevel = [];
//   let arrOfLvl = [];
//   let nodeWithLevel = printBST(BST.root, 0, arrOfLvl);
//   const groupByKey = (list, key, { omitKey = false }) =>
//     list.reduce(
//       (hash, { [key]: value, ...rest }) => ({
//         ...hash,
//         [value]: (hash[value] || []).concat(
//           omitKey ? { ...rest } : { [key]: value, ...rest }
//         ),
//       }),
//       {}
//     );
//   let levelWithValue = groupByKey(nodeWithLevel, 'key', { omitKey: true });

//   let size = Object.keys(levelWithValue).length;

//   for (let i = 0; i < size; i++) {
//     console.log(
//       levelWithValue[i]
//         .map((items, index) => {
//           let obj = JSON.stringify(items);
//           const object = JSON.parse(obj);

//           let str = '';
//           if (i == 0) {
//             str += '    ';
//           }
//           if (index == 0) {
//             for (let j = size - i; j > 0; j--) {
//               str += '  ';
//             }
//           }

//           if (i == 0 || i == 1) {
//             str += object['Node'].data;
//           }

//           if (i == 1) {
//             str += '        ';
//           }
//           return str;
//         })
//         .join(' ')
//     );
//     if (i >= 2) {
//       let previousLine = levelWithValue[i - 1]
//         .map((previousItem, pIndex) => {
//           let obj = JSON.stringify(previousItem);
//           const object = JSON.parse(obj);
//           let preStr = '';
//           if (pIndex == 0) {
//             for (let j = size - i; j >= 0; j--) {
//               preStr += '  ';
//             }
//           } else if (pIndex != 0) {
//             for (let j = size - i; j >= 0; j--) {
//               preStr += '  ';
//             }
//           }
//           preStr += object['Node'].data;
//           return preStr;
//         })
//         .join(' ');
//       //console.log(previousLine)
//       let previousStringlength;
//       let previousLevelWithValue = levelWithValue[i - 1]
//         .map((previousItem, pIndex) => {
//           let newString = '';
//           let obj = JSON.stringify(previousItem);
//           const object = JSON.parse(obj);
//           const node = object['Node']
//           if (!node) return
//           const { data, left: leftData, right:rightData } = node
//           let indexOfItem = previousLine.indexOf(data);


//           if (leftData) {
//             if (!pIndex) {
//               for (let j = indexOfItem - newString.length - 1; j > 0; j--) {
//                 newString += ' ';
//               }
//             } else {
//               //  console.log(indexOfItem - previousStringlength)
//               for (let j = indexOfItem - newString.length; j > 0; j--) {
//                 newString += ' ';
//               }
//             }

//             newString += leftData.data;
//           }
//           if (rightData) {
//             newString += '  ';
//             newString += rightData.data;
//             // console.log(newString)
//           }
//           //console.log(previousStringlength)
//           return newString;
//         })
//         .join('');
//       console.log(previousLevelWithValue);
//     }
//   }
// };

// insertTree();

const run = () => {
  // insert Tree
  insertTree()
  // print Tree
  printTree(BST.root)
}

run()

// var root = BST.getRootNode()
//BST.inorder(root)
//BST.postorder(root)
// [5,9,7,13,17,22,15,10,27,25)
// BST.preorder(root)

const hasPath = (root, arr, x) => {
  if (root == null) return false;

  arr.push(root.data);
  if (root.data == x) return true;

  if (hasPath(root.left, arr, x) || hasPath(root.right, arr, x)) return true;

  arr.pop();
  return false;
};

const printPath = (root, x) => {
  let arr = [];
  if (hasPath(root, arr, x)) {
    for (let i = 0; i < arr.length - 1; i++) console.log(arr[i] + '');
    console.log(arr[arr.length - 1]);
  } else console.log('No Path');
};

//printPath(BST.root, 13);
