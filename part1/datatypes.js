console.log('Hello, world.');

// changing variable
let variable;
variable = 'Hello world.';
console.log(variable);

variable = 'Hello, Mars.';

console.log(variable);

// constant
const hello = 'Hello, world.';
// next line does not compile
//hello = 'Hello, Mars';  
console.log(hello);

// type: number
const i = 42.0;
console.log(i);

// type: string
const s1 = 'str"ing';
console.log(s1);

const s2 = "str\"ing";
console.log(s2);

const world = 'world';
const s3 = `Hello, ${2 + 2}`;
console.log(s3);

// type: boolean
const nice = true;
console.log(nice);

// type: undefined
let x;
console.log(typeof x);

// type: null
let n = null;
console.log(n);
console.log(typeof n);  // prints "object" which is considered a bug

// type: array
const array = [2, 5];
array[0] = 3;
const el = array[0];

console.log(el);
console.log(typeof el);

// type: object
let o = {
  planet: 'world'
};
o.satellite = 'moon';
console.log(`Hello, ${o.satellite}.`);
console.log(typeof o);


















