class Nodes{
    constructor(value){
        this.value = value;
        this.left= null;
        this.right = null;
    }
}



class BinaryTree{
    constructor(){
        this.root = null
    }


    AddvalueNode(value){
        const newNode = new Nodes(value);

        if(this.root === null) this.root = newNode;
        else this.#addvalueLeftRight(this.root, newNode);
    }


    #addvalueLeftRight(currentRoot, newNode){
      
        while(true){
            if(newNode.value < currentRoot.value){

                if(currentRoot.left === null){
                    currentRoot.left = newNode;
                    return;
                }
                currentRoot = currentRoot.left;
               
            } else if(newNode.value > currentRoot.value ){
                if(currentRoot.right === null){
                    currentRoot.right = newNode;
                    return;
                }else{
                    currentRoot = currentRoot.right;
                   
                }
                
            }

        }
    }

    searchValueTree( value) {
        let currentNode = this.root;
        while(currentNode){

            if(currentNode.value == value){
                 return true;
            }
           

            currentNode = value < currentNode.value ? currentNode.left : currentNode.right
        }
        return false;
    }
}


const binaryTree = new BinaryTree()


binaryTree.AddvalueNode(10)
binaryTree.AddvalueNode(15)
binaryTree.AddvalueNode(5)
binaryTree.AddvalueNode(2)
binaryTree.AddvalueNode(20)
binaryTree.AddvalueNode(21)
console.log(binaryTree.searchValueTree(5))

