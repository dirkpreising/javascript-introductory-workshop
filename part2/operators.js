console.log('Hello, JS Students!');

const i = 10

console.log(i + 2)
console.log(i - 2)
console.log(i * 2)
console.log(i / 2)
console.log(i % 3)

console.log(i === 11)
console.log(i !== 11)
console.log(i > 11)
console.log(i < 11)

const j = 5;

console.log((i < 15) && (j < 15));
console.log((i > 15) || (j < 15));
console.log(!(i > 15));

const x = 70;
if (x < 15) {
    console.log(x + ' is less than 15');
} else {
    console.log(x + ' is not less than 15');
}

// ----  Exercise 1

// today
const nowYear = 2019;
const nowMonth = 3;
const nowDay = 29;

// Today is 29.3.2019
console.log('Today is ' + nowDay + '.' + nowMonth + '.' + nowYear);

// the day
const theYear = 2020;
const theMonth = 12;
const theDay = 28;

if (theYear === nowYear && theMonth === nowMonth && theDay === nowDay) {
    console.log('The day is today.');
} else if ((theYear < nowYear) || 
    ((theYear === nowYear) && (theMonth < nowMonth)) || 
    ((theYear === nowYear) && (theMonth === nowMonth) && (theDay < nowDay))) {
    console.log('The day is in the past.');
} else {
    console.log('The day is in the future.');
}

// ---- Exercise 2

// data of a person
const aFirstName = 'Alex';
const aLastName = 'Cortez';
const aBirthYear = 1980;
const aBirthMonth = 1;

let allMonths = (theYear - aBirthYear) * 12;
if (theMonth > aBirthMonth) {
    allMonths = allMonths + (theMonth - aBirthMonth);
} else {
    allMonths = allMonths - (aBirthMonth - theMonth);
}
const months = allMonths % 12;
const years = (allMonths - months) / 12;

// Alex Cortez is 39 years and 2 months old
console.log(`${aFirstName} ${aLastName} is ${years} years and ${months} months old.`);

// ---- Exercise 3 (homework)

/*
1) Enter your data similar like the one of Alex Cortez
const firstName1 = '...';
const lastName1 = '...';
...

2) Find a colleague and enter that data as well

3) Write a program that will print out something like

(fullname) is (x) years and (y) months older than (fullname).

Try to use what you have learned above.

Good luck, and happy coding!

*/
