// Code:

// Deep copy vs. Shallow Copy
// value type: number, string, boolean
// ref type: array, object, function
// function : call by value vs, call by ref
// variable number of arguments ...
// //////////////////////////////////////////////////////////
let product = {
    id: 1,
    title: "Mobile Phone",
    price: 1000
}

let {id, ...rest} = product;

console.log(rest);


// call by value vs. call by ref

// function increment(product){
//     product.price += 1000;
// }

// let product = {
//     id: 1,
//     title: "Mobile Phone",
//     price: 1000
// }

// increment(product); // call by ref
// console.log(product);



// function increment(x){
//     x += 1000;
// }

// let x = 1000;

// increment(x); // call by value
// console.log(x);


// function increment(x){
//     x += 1000;
//     return x;
// }

// let x = 1000;

// increment(x); // call by value
// console.log(x);


// function increment(product){
//     product.price += 1000;
// }

// let product = {
//     id: 1,
//     title: "Mobile Phone",
//     price: 1000
// }

// increment({...product}); // call by ref
// console.log(product);



// function increment({...product}){
//     product.price += 1000;
//     console.log(product); // ???
// }

// let product = {
//     id: 1,
//     title: "Mobile Phone",
//     price: 1000
// }

// increment(product); // call by ref
// console.log(product); // 1000 or 2000


// function increment(...product){
//     console.log(id);
//     console.log(title);
//     console.log(price);
// }

// let product = {
//     id: 1,
//     title: "Mobile Phone",
//     price: 1000
// }

// increment(product);
// // console.log(product);

// variable number of arguments
// function sum(a, b, ...arr){
//     console.log(arr);
// }

// sum(10, 20);


// //////////////////////////////////////////////////////////
// array (Shallow copy)
// let array1 = [10, 20, 30]; // 4
// let array2 = array1;
// array1[0] = 99;
// console.log(array1);
// console.log(array2);

// Deep Copy
// let array1 = [10, 20, 30];
// let array2 = [array1[0], array1[1], array1[2]]
// array1[0] = 99;
// console.log(array1);
// console.log(array2);

// // Deep Copy  (traditional for loop)
// let array1 = [10, 20, 30, 50, 90];

// let array2 = [];
// for(let i=0; i < array1.length; i++)
//     array2[i] = array1[i];

// array2[0] = 90009;
// console.log(array1);
// console.log(array2);
 

// Deep Copy  (ES6) spread operator ... (copy op)
// let array1 = [10, 20, 30, 50, 90];
// let array2 = [...array1];

// console.log(array1);
// console.log(array2);

// let product = {
//     id: 1,
//     title: "Mobile Phone",
//     price: 100000
// }
// console.log(product['title']);


// let copyProduct = {...product};

// copyProduct.price = 120000;
// console.log(product);
// console.log(copyProduct);


// let product = {
//     id: 1,
//     title: "Mobile Phone",
//     price: 100000
// }

// let index = 'title';
// console.log(product[index]);





// //////////////////////////////////////////////////////////
// value type: number, string, boolean

// copy (Deep copy)
// number
// let x = 20;
// let y = x;
// y = 20;
// console.log(x);
// console.log(y);

// string
// let x = "abc";
// let y = x;
// y = "def";
// console.log(x);
// console.log(y);

// boolean
// let x = true;
// let y = x;
// console.log(x);
// console.log(y);
// console.log("----------------");
// y = false;
// console.log(x);
// console.log(y);