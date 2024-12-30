// tree.js
export function NodeTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

export function Tree() {
    let root = null;

    this.addValue = function (value) {
        const numValue = Number(value);
        if (isNaN(numValue)) {
            console.warn("Valor inválido:", value);
            return;
        }
        const newNode = new NodeTree(numValue);
        if (root === null) {
            root = newNode;
        } else {
            addNode(root, newNode);
        }
    };

    function addNode(current, newNode) {
        if (newNode.value < current.value) {
            if (current.left === null) {
                current.left = newNode;
            } else {
                addNode(current.left, newNode);
            }
        } else if (newNode.value > current.value) {
            if (current.right === null) {
                current.right = newNode;
            } else {
                addNode(current.right, newNode);
            }
        }
    }

    this.contains = function (value) {
        return searchNode(root, value);
    };

    function searchNode(node, value) {
        if (node === null) {
            return false;
        }
        if (value === node.value) {
            return true;
        }
        return value < node.value
            ? searchNode(node.left, value)
            : searchNode(node.right, value);
    }

    this.inOrderTraversal = function () {
        const result = [];
        traverseInOrder(root, result);
        return result;
    };

    function traverseInOrder(node, result) {
        if (node !== null) {
            traverseInOrder(node.left, result);
            result.push(node.value);
            traverseInOrder(node.right, result);
        }
    }

    this.getRoot = function () {
        return root;
    };
}

export default Tree;
