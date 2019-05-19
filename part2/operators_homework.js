// Exercise: calculate age difference of two persons

// today
const nowYear = 2019;
const nowMonth = 4;

// person 1
const aFirstName = 'Alex';
const aLastName = 'Cortez';
const aBirthYear = 1980;
const aBirthMonth = 11;

// person 2
const bFirstName = 'Rüdiger';
const bLastName = 'Schulz';
const bBirthYear = 1975;
const bBirthMonth = 1;

// age in months of person 1
let aMonths = (nowYear - aBirthYear) * 12;
if (nowMonth > aBirthMonth) {
    aMonths = aMonths + (nowMonth - aBirthMonth);
} else {
    aMonths = aMonths - (aBirthMonth - nowMonth);
}

// age in months of person 2
let bMonths = (nowYear - bBirthYear) * 12;
if (nowMonth > bBirthMonth) {
    bMonths = bMonths + (nowMonth - bBirthMonth);
} else {
    bMonths = bMonths - (bBirthMonth - nowMonth);
}

// both are of same age
if (aMonths === bMonths) {
    console.log(`${aFirstName} ${aLastName} ` +
        `and ${bFirstName} ${bLastName} are of same age.`);
} 

// person 1 is older
else if (aMonths > bMonths) {
    const diff = aMonths - bMonths;
    const months = diff % 12;
    const years = (diff - months) / 12;
    console.log(`${aFirstName} ${aLastName} is ` +
        `${years} years ${months} months older than ` +
        `${bFirstName} ${bLastName}.`);
} 

// person 2 is older
else {
    const diff = bMonths - aMonths;
    const months = diff % 12;
    const years = (diff - months) / 12;
    console.log(`${bFirstName} ${bLastName} is ` +
        `${years} years ${months} months older than ` +
        `${aFirstName} ${aLastName}.`);
}