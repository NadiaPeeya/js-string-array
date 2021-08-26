const products = [
    'Dell harcore i29 200GB laptop',
    'Iphone 1TB camera flashligh phone',
    'Yellow laptop with black camera',
    'Dell 1X59 lenevo commercial yoga laptop',
    'LG supernova laptop Dell',
    'HTC low price phone',
    'Dell purple color phone with Laptop'
];

// const searching = 'dell';
// const output = [];

// //a way for searching
// for (const product of products) {
//     if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
//         // output.push(product);
//     }
// }
// console.log(output);

// //another way for searching
// const searching = 'dell';
// const output = [];
// for (const product of products) {
//     if (product.toLowerCase().includes(searching.toLowerCase())) {
//         output.push(product);
//     }
// }
// console.log(output);


const searching = 'dell';
const output = [];
//stars with
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);





