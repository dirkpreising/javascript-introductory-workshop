console.log('Hello, JS Students!');

const sqr = (x) => x * x;
console.log(`sqr(4) = ${sqr(4)}`);
console.log(typeof sqr);

const three = _ => 3;
const four = () => 4;
console.log(three());

const osqr = x => ({
    in: x,
    out: x * x
});
console.log(osqr(5));

const prod = (f1, f2) => {
    const p = f1 * f2;
    return {
        in: [f1, f2],
        out: p
    };
};
console.log(prod(3, 8));

const hello = name => {
    console.log(`Hello, ${name}!`);
};
hello('everybody');

const twice = x => x + x;

// function as parameter!
const calc = (f, num) => f(num);

const result1 = calc(twice, 6);
console.log(result1);

const result2 = calc(sqr, 6);
console.log(result2);

// loops with arrow function

const names = ['Alex', 'Maria', 'Nathan', 'Inga'];
names.forEach(name => {
    hello(name);
});

console.log('--------------');

// for ... of loop with arrays
for (const name of names) {
    hello(name);
}

// exercise
const sum = numbers => {
    let finalSum = 0;
    for (const n of numbers) {
        finalSum += n;
    }
    return finalSum;
};

const prices = [5, 20, 43, 99];
console.log(sum(prices));