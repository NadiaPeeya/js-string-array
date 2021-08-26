function addNumbers(num1, num2) {
    console.log(arguments[1]);
    let result = 0
    for (const num of arguments) {
        result = result + num;
    }
    // const result = num1 + num2;
    return result;
}
const sum = addNumbers(23, 13, 45, 66, 12, 78);
console.log(sum);

//another example
function getName(firstName, lastName) {
    let herName = ''; //for loop e string er belay hobe empty string
    for (const part of arguments) {// of er age name part or name dileo hoy or valid name
        herName = herName + part + ' '; // empty string taken for giving space between name
    }
    // const fullName = firstName + ' ' + lastName;
    return herName;
}
const herName = getName('Nadia', 'Binte', 'Rahman', 'Peeya');
console.log(herName);

//string immuatible jinish beshi string plus kora valo na