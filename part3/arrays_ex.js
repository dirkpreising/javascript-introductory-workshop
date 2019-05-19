const months = [
    'January', 'February', 'March', 
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'
];

const dict = {
    english: {
        months: [
            'January', 'February', 'March', 
            'April', 'May', 'June',
            'July', 'August', 'September',
            'October', 'November', 'December'
        ],
        bornin: ' is born in '
    },
    german: {
        months: [
            'Januar', 'Februar', 'März', 
            'April', 'Mai', 'Juni',
            'Juli', 'August', 'September',
            'Oktober', 'November', 'Dezember'
        ],
        bornin: ' ist geboren am '
    }
}

const aPerson = {
    names: ['Alex', 'Maria', 'Cortez'],
    birthYear: 1980,
    birthMonth: 3
};
aPerson.fullName = `${aPerson.firstName} ${aPerson['lastName']}` 
aPerson['fullName'] = aPerson.names.join(' ');

// output: Alex Cortez is born in November 1980.
const language = 'german';
console.log(`${aPerson.fullName}${dict[language].bornin}`+
    `${dict[language].months[aPerson.birthMonth-1]} ${aPerson.birthYear}.`);

