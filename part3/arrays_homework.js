// array of at least 3 persons
const persons = [
    {
        fullName: 'Alex Cortez',
        birthYear: 1980,
        birthMonth: 3
    },
    {
        fullName: 'Rüdiger Schulz',
        birthYear: 1975,
        birthMonth: 1
    },
    {
        fullName: 'John Doe',
        birthYear: 1980,
        birthMonth: 12
    }
];

console.log('Unsorted:');
console.log(persons);

// google: array.sort() with arrow function
// oldest person first, youngest person last

// today
const now = {
    year: 2019,
    month: 4
};

persons.sort((p1, p2) => {
    // age in months of person 1
    let aMonths = (now.year - p1.birthYear) * 12;
    if (now.month > p1.birthMonth) {
        aMonths = aMonths + (now.month - p1.birthMonth);
    } else {
        aMonths = aMonths - (p1.birthMonth - now.month);
    }

    // age in months of person 2
    let bMonths = (now.year - p2.birthYear) * 12;
    if (now.month > p2.birthMonth) {
        bMonths = bMonths + (now.month - p2.birthMonth);
    } else {
        bMonths = bMonths - (p2.birthMonth - now.month);
    }

    if (aMonths === bMonths) {
        return 0;
    } else if (aMonths > bMonths) {
        return -1;
    } else {
        return 1;
    }
});

console.log('Sorted:');
console.log(persons);
