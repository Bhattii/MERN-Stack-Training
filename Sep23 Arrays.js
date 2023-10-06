// array functions - ES 6+

let products = [
    {
        id: 1,
        title: "Mobile",
        price: 50000
    },
    {
        id: 2,
        title: "Bike",
        price: 70000
    },
    {
        id: 3,
        title: "Laptop",
        price: 40000
    }
];
let mappedArr = products.map(product => (
    {...product, price: product.price * 1.10}
))
console.log(products);
console.log(mappedArr);



// functional prog: pure function
// map : modify/change/update

// 1
// console.log(Math.max(...([60, 20, 70, 400, 90].map(x => x * 1.10))))

// 2
// let prices = [60, 20, 70, 400, 90];
// let arr = prices.map(x => x * 1.10)
// let m = Math.max(...arr);
// console.log(m)

// 3
// error

// 4

// let x = Math.max(...prices);
// console.log(x)




// let array = [ 'Even', 'Odd', 'Even', 'Odd', 'Even' ]
// let res = array.map(x => x.length);
// console.log(res)


// let marks = [60, 20, 70, 40, 90];
// let res = marks.map(x => {
//     if(x >= 50)
//         return "Pass";
//     else    
//         return "Fail"
// });
// console.log(marks)
// console.log(res)







// [60, 20, 70, 40, 90]
// ["Pass", "Fail", "Pass", "Fail", "Pass"]

// let marks = [60, 20, 70, 40, 90];

// function f(x){
//     return x >= 50 ? "Pass" : "Fail";
// };

// let res = marks.map(f);

// console.log(marks)
// console.log(res)



// let marks = [60, 20, 70, 40, 90];
// const f = x => x >= 50 ? "Pass" : "Fail";
// let res = marks.map(f);

// console.log(marks)
// console.log(res)




// let marks = [60, 20, 70, 40, 90];
// let res = marks.map(x => x >= 50 ? "Pass" : "Fail")
// console.log(marks)
// console.log(res)


// let arr = marks.map(x => x + 2);
// console.log(marks)
// console.log(arr)





// Que: FIFO
// let marks = [10, 20, 30, 40, 50];
// marks.unshift(60);
// marks.unshift(70);
// console.log(marks)


// marks.shift();
// marks.shift();
// console.log(marks)


// let marks = [10, 20, 30, 40, 50];
// // let s = marks.slice(2, 4);
// let s = marks.slice();
// s[0] = 99;
// console.log(marks)
// console.log(s)


// stack methods (push, pop)
// let marks = [10, 20, 30, 40, 50];
// marks.splice(0, 3)
// console.log(marks)


// delete marks[2];
// console.log(marks)



// marks.pop();
// marks.pop();
// console.log(marks);

// let marks = [];
// marks.push(10);
// marks.push(20);
// marks.push(30);
// console.log(marks);