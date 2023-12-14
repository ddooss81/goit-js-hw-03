'use strict';

function checkStorage(storage, item) {return storage.includes(item.toLowerCase()) ? `${item.toLowerCase()} is available to order!` : "Sorry! We are out of stock!";}

console.log(checkStorage(["apple", "plum", "pear"], "plum"));
console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
console.log(checkStorage(["apple", "plum", "pear"], "pear"));
console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
console.log(checkStorage(["apple", "plum", "pear"], "orange"));
console.log(checkStorage(["apple", "plum", "pear"], "carrot"));