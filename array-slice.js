const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];
// const numberSliced = numbers.slice(4, 8);//jekhane sesh tar ag porjonto ...
// console.log(numberSliced);
// console.log(numbers);//jekono ekta part nite gele slice use korte parbo but this doesnt change the original array

//spliced to remove an element from an array 
// const numberSpliced = numbers.splice(6, 3);//6 no index theke 3 ta element ke bad diye show korbe console log e (mane bujhano hoy kake kake bad dea hoeche );
// console.log(numberSpliced);
// console.log(numbers);

//
// const numberSpliced2 = numbers.splice(4, 3, 'peeya', 'nadia', 'rahman');// jei number guli remove hoy segular place e aro kichu add kora jay 
const numberSpliced3 = numbers.splice(4, 3, 101, 1002, 105, 99, 9999);// jei number guli remove hoy segular place e aro kichu add kora jay 

// console.log(numberSpliced2);
console.log(numberSpliced3);
console.log(numbers);