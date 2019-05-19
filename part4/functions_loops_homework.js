/*
Homework

Write a program that
* uses array of persons from last time
* print in a loop how much older (or younger) that person is compared to yourself
* uses functions as much as possible; don't copy&paste similar code

*/

const persons = [
    {
        fullName: 'Alex Cortez',
        birthYear: 1980,
        birthMonth: 3
    },
    {
        fullName: 'Greta Thunberg',
        birthYear: 2003,
        birthMonth: 1
    },
    {
        fullName: 'John Doe',
        birthYear: 1960,
        birthMonth: 12
    },
    {
        fullName: 'Jane Done',
        birthYear: 1975,
        birthMonth: 1
    }
];

const me = {
    fullName: 'Rüdiger Schulz',
    birthYear: 1975,
    birthMonth: 1
}

const now = {
    year: 2019,
    month: 5
};

/**
 * Calculate age in months of a person.
 * 
 * @param {Object} person 
 */
const calculateAge = person => {
    let aMonths = (now.year - person.birthYear) * 12;
    if (now.month > person.birthMonth) {
        aMonths = aMonths + (now.month - person.birthMonth);
    } else {
        aMonths = aMonths - (person.birthMonth - now.month);
    }

    return aMonths;
};

/**
 * Calculate difference between two age values (in months) and
 * return it as an object of months and years.
 * 
 * @param {Number} aMonths 
 * @param {Number} bMonths 
 */
const ageDifference = (aMonths, bMonths) => {
    const diff = aMonths - bMonths;
    const months = diff % 12;
    const years = (diff - months) / 12;

    return {
        months: months,
        years: years
    }
};

// loop and compare persons to yourself
const meMonths = calculateAge(me);

persons.forEach(person => {
    const pMonths = calculateAge(person);

    // same age
    if (meMonths === pMonths) {
        console.log(`You and ${person.fullName} are of same age.`);
    } 
    
    // you are older
    else if (meMonths > pMonths) {
        const diff = ageDifference(meMonths, pMonths);
        console.log(`You are ` +
            `${diff.years} years ${diff.months} months older than ` +
            `${person.fullName}.`);
    } 
    
    // person is older
    else {
        const diff = ageDifference(pMonths, meMonths);
        console.log(`${person.fullName} is ` +
            `${diff.years} years ${diff.months} months older than you.`);
    }   
});

