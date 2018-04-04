// This is designed to be a method added to the "bst" class in the lib folder

    closestTo(value) {
        
        let node = this.root;
        let smallestDistance = 32768;
        let closestNode = null;
        
        while( node != null ) {
            
            let distance = Math.abs(node.value - value);
            
            if ( distance < smallestDistance ) { 
                smallestDistance = distance;
                closestNode = node;
            }
            
            if ( distance === 0 ) { break; }
            
            node = (node.value > value) ? node.left : node.right;
         
        }
        
        return closestNode;
        
    }