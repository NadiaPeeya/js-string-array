//split
const anthem = 'Amar Shonar Bangla Ami Tomai Valobashi';
const words = anthem.split(' ');
const wordsA = anthem.split('a');

// console.log(words);
// console.log(wordsA);

//slice
const smallSlice = anthem.slice(5, 14);//5 theke shuru kore 14 index er ag porjonto..
// console.log(smallSlice);

//substr 
const another = anthem.substr(6, 12); // 6 hochhe kotha theke shuru hobe tar index r 12 hochhe 6 theke shuru kore 12 ta char pabo shei number ta
// console.log(another);

//substring
const anotherPart = anthem.substring(2, 7); // 2 theke shuru kore 7 er ag porjonto ....
// console.log(anotherPart);

//concat 
const first = 'I';
const second = 'love';
const third = 'Japan';

// const fullString = first + second + third;
const fullString = first.concat(second).concat(third);

// console.log(fullString);

const names = ['kyoto', 'osaka', 'nara', 'tokyo'];
// const namesJoin = names.join('');
// const namesJoin = names.join(' ');
// const namesJoin = names.join(' , ');
const namesJoin = names.join(' www '); //majkhane kichu dieo join kora jay

console.log(namesJoin);
