'use strict';

function createReversedArray(args) {
    
    args = Array.from(arguments);
    //console.log(args.length)
    let result = [];
    //let i = args.length - 1;
    for (let i = args.length - 1; i >= 0; i--) {
        result.push(args[i]);
    }
        return result;
  
    }


console.log(createReversedArray(12, 85, 37, 4));
console.log(createReversedArray(164, 48, 291));
console.log(createReversedArray(412, 371, 94, 63, 176));
console.log(createReversedArray());
