// truthy and falsy values
// data types
// Primitives: number, string, boolean, undefined
// Collections: array, object

// object: always truthy
// let product = {};

// if(product)
//     console.log("TRUE");
// else
//     console.log("FALSE");


let product = {id: 1, title: "Mobile", price: 50000};

// console.log(Object.values(product))

if(Object.values(product).length)
    console.log("TRUE");
else
    console.log("FALSE");




// array is always truthy
// let array = [];

// if(array)
//     console.log("TRUE");
// else
//     console.log("FALSE");

// let array = [];
// // console.log(array.length);

// if(array.length)
//     console.log("TRUE");
// else
//     console.log("FALSE");




// falsy (0, NaN, "", false, undefined, null)

// let result = null;
// console.log(result);
// console.log(typeof result); // ?


// if(result)
//     console.log("TRUE");
// else
//     console.log("FALSE");


// undefined (falsy)
// let result;

// if(result)
//     console.log("TRUE");
// else
//     console.log("FALSE");

// string - empty string is falsy
// let result = "a";

// if(result)
//     console.log("TRUE");
// else
//     console.log("FALSE");







// boolean: truthy and falsy values

// let active = true;
// console.log(active);
// console.log(typeof active);

// boolean (true, false)
// number (0, NaN=falsy, all other are truthy including Infinity and -Infinity)

// NaN: Not a Number

// let result = 10 / "abc";
// // console.log(result); // NaN
// // console.log(typeof result); // number

// if(result)
//     console.log("TRUE");
// else
//     console.log("FALSE");
















// ------------------------------------------------
// data types
// Primitives: number, string, boolean, undefined
// Collections: array, object

// collection of values (index)
// let marks = [10, 30, 50, 70, 90];
// console.log(marks[0]);

// // collection of key value pairs
// let product = {
//     id: 1,
//     price: 50000,
//     title: "Mobile Phone",
//     avail: true
// }

// console.log(product.title);