// console.log(((x, y) => x + y)(20, 5));

// function sum(x = 0, y = 0){
//     return x + y;
// }

// function sum(x, y){
//     if(x === undefined)
//         x = 0;
//     if(y == undefined)
//         y = 0;
//     return x + y;
// }






// functional programming

// standard function
// function sum(x, y){
//     return x + y;
// }

// arrow function (ES 6) - 5/6  different ways
// 1
// let f = (x, y) => x + y;
// let ans = f(10, 20);
// console.log(ans);

// 2
// function sum(x, y){
//     x++;
//     if(x > y)
//         return x + y;
//     else
//         return x - y;
// }


// let f = (x, y) => {
//     x++;
//     if(x > y)
//         return x + y;
//     else
//         return x - y;
// }

// let ans = f(20, 3);
// console.log(ans);

// function sum(x, y){
//     return x + y;
// }


// let f = (x, y) => {
//     return (x + y);
// }
// let ans = f(20, 3);
// console.log(ans);

// let f = (x, y) => x + y;
// let ans = f(20, 3);
// console.log(ans);

//3
// function inc(x){
//     return x + 1;
// }

// let f = x => x + 1;
// let ans = f(10);
// console.log(ans);

// array
// let f = (x, y) => {
//     return [x + y, x - y, x * y, x / y];
// }

// let f = (x, y) => [x + y, x - y, x * y, x / y];
// console.log(f(20, 10));

// object
// let f = () => {
//     return {
//         id: 1,
//         title: "LED TV",
//         price: 50000
//     };
// }

// let f = () => { return {id: 1, title: "LED TV", price: 50000};}
// let f = () => ({id: 1, title: "LED TV", price: 50000});
// console.log(f());


// No parameter
// let f = () => console.log("Hello");
// let f = _ => console.log("Hello");
// f();


// input => output

// define
// function sum(x, y){
//     return x + y;
// }
// // call
// let ans = sum(10, 20);
// console.log(ans);

// undefined
// function sum(x, y){
//     let ans = x + y;
//     console.log("Sum = ", ans);
// }

// sum(10, 20);

// // variable scope and lifetime
// let x = 10; // global variable
// let y= 40;

// function display1(){
//     let y = 20; // local variable
//     console.log(x);
//     console.log(y); // ???
// }

// function display2(){
//     let y = 50;
//     console.log(x);
//     console.log(y);
// }

// for(let i=0; i<100; i++)
//     display1();
// console.log("----------------");
// display2();