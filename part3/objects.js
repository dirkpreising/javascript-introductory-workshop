const obj = {
    street: 'Greifswalder Straße'
};
console.log(obj);
console.log(typeof obj);

obj.name = 'My Name';
console.log(obj);

console.log(obj.name);
console.log(obj['street']);

const prop = 'street';
console.log(obj[prop]);

const aPerson = {
    firstName: 'Alex',
    lastName: 'Jones',
    birthYear: 1980,
    birthMonth: 1
};
console.log(aPerson);
console.log(aPerson.lastName);
