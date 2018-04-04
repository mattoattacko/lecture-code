const binarySearchTree = require("PATH/TO/bst");

describe("Binary Search Tree", () => {
    
    it ( "can find the nearest neighbor, given a value", () => {
        
        let bst = new binarySearchTree();
        
        let values = [9,4,17,3,6,22,5,7,20];

        values.map( (val, i) => {
            return bst.insert(val);
        })
        
        expect(bst.closestTo(15).toEqual(17));
    
    });
    
});