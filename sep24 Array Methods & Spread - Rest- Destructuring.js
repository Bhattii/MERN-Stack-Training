let products = [
    {
        id: 101,
        title: "Mobile",
        avail: false,
    },
    {
        id: 102,
        title: "Mobile",
        avail: true,
    },
    {
        id: 103,
        title: "Mobile",
        avail: false,
    },
    {
        id: 104,
        title: "Mobile",
        avail: true,
    }
]

// product 101 is Out of Stock
// product 102 is Available
// product 103 is Out of Stock
// product 104 is Available






// let product = {
//     id: 101,
//     title: "Mobile",
//     avail: false,
//     colors: [
//         {name: "red", price: 50000},
//         {name: "black", price: 60000}
//     ]
// }

// function f(){
//     let x = 10;
//     let y = 20;

//     return [x, y]
// }

// const [x, y]  = f();
// console.log(x);
// console.log(y);




// spread, destructuring, rest

// let product = {
//     id: 101,
//     title: "Mobile",
//     avail: false,
//     colors: [
//         {name: "red", price: 50000},
//         {name: "black", price: 60000}
//     ]
// }

// function f({avail}){
//     avail ? console.log("YES") : console.log("OUT OF STOCK")
// }
// function f(){
//     //
//     return product;
// }

// let {title: t, stock = "Not Provided"} = f();
// console.log(t, stock);





// let {colors: [, black]} = product;
// let {price} = black;
// console.log(price)


// let {id, price: cost = 0, ...rest} = product;
// console.log(id)
// console.log(cost)
// console.log(rest)

// let marks = [70, 100, 31, 256, 256, 51];
// let [a,,b, ...rest] = marks;
// console.log(a, b, rest)



// spread
// let copyArr = [...marks];
// console.log(copyArr)









// push, pop, shift, unshit, slice, splice, map
// filter, forEach, reduce, includes, find, findIndex, sort

// let marks = [70, 100, 31, 256, 256, 51];
// marks.sort((a, b) => a - b);
// console.log(marks);


// let marks = [10, 20, 31, 40, 51];
// let ans = marks.reduce((sum, x) => sum + x, 0)
// console.log(ans);



// const sum = marks.reduce((sum, x) => sum + x, 0)
// console.log(sum)








// const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('sparrow'));

// const sum = marks.reduce((sum, x) => sum + x, 0)
// console.log(sum)



// let marks = [10, 20, 31, 40, 51];
// const search = 40;
// const index = marks.find(x => x === search)
// console.log(index)


// marks.forEach(x => console.log(x + 5))


// let arr = marks.filter(x => x % 2 === 1);
// console.log(arr);