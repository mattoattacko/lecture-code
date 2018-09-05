![CF](https://i.imgur.com/7v5ASc8.png) Arrow Functions
=======
## Overview
`() => {}` Arrow Functions - unbound function expressions.

### Basics
implemented as a shorthanded function call, with the parameters in () preceding a "fat arrow" (`=>`), followed by an expression.  

_If the expression a single statement, it is returned implicitly_. 

**The following are all functionally equivalent**
```
  function add(n1, n2) {
     return n1+n2;
  }
  
  let add = function(n1, n2) {
       return n1+n2;
  }
  
  let add = (n1,n2) => n1+n2;
  
  let add = (n1,n2) => {
    return n1+n2;
  }

```

**If the expression is contained within braces `{}` then a return value must be specified**
 
```
  let add = (n1,n2) => {
    if ( typeof n1 !== "number" || typeof n2 !== "number" ) {
      return null
    } 
    return n1 + n2; 
  }
  
```

### Caveats and Notes
- `this` is always bound to the enclosing execution context
- `=>` cannot be used as constructors

## Reference
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

