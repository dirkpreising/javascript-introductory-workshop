const arr = [2, 4, 6];
console.log(arr);
console.log(typeof arr);
console.log(arr.length);

console.log(arr[0]);
console.log(arr[4]);

arr[4] = 10;
console.log(arr);
console.log(arr.length);

arr.push(12);
console.log(arr);
console.log(arr.length);

console.log(arr.pop());
console.log(arr);
console.log(arr.length);

// insert at beginning
arr.unshift(1);
console.log(arr);
console.log(arr.length);

console.log(arr.shift());
console.log(arr);
console.log(arr.length);

const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers.join('-'));

const evenNumbers = numbers.filter(i => i % 2 === 0);
console.log(evenNumbers);

