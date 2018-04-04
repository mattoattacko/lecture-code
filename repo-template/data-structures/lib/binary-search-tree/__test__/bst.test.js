const binarySearchTree = require("../bst");

describe("Binary Search Tree", () => {
    
    describe ( "rejects non-numeric values", () => {
        
        let bst = new binarySearchTree();
        expect(bst.root).toBeNull();
        
        let values = ['', 'a', [1,2], {foo:'bar'}, bst];
        
        values.forEach( value => {
            it(`should not be able to insert <${value}>`, () => {
                bst.insert(value);
                expect(bst.root).toBeNull();
            });
        });
        
    });
    
    it ( "can find an inserted value", () => {
        
        let bst = new binarySearchTree();
        
        let values = [9,4,17,3,6,22,5,7,20];

        values.map( (val, i) => {
            return bst.insert(val);
        })
        
        expect(bst.fetch(17).value).toEqual(17);
    
    });
    
    it ( "can find the highest value in the tree", () => {
        
        let bst = new binarySearchTree();
        
        let values = [9,4,17,3,6,22,5,7,20];

        values.map( (val, i) => {
            return bst.insert(val);
        })
        
        expect(bst.max()).toEqual(22);
    
    });
    
    it ( "can find the smallest value in the tree", () => {
        
        let bst = new binarySearchTree();
        
        let values = [9,4,17,3,6,22,5,7,20];

        values.map( (val, i) => {
            return bst.insert(val);
        })
        
        expect(bst.min()).toEqual(3);
    
    });
    
});

// // console.log("Level Order", bst.levelOrder());
// // console.log("Pre Order", bst.preOrder());
// // console.log("In Order", bst.inOrder());
// // console.log("Post Order", bst.postOrder());
// // console.log("Exists", bst.exists(10));