let todos = require("./todos.json");

// // console.log(todos);
// console.log(todos.length);

// let marks = 100;

// // If Statment
// if (marks>=50)
// {
//     console.log("pass");
// }
// else
// {
//     console.log("Fail");
// }


// //  If else statment 
// if (marks=>90)
// console.log("A");

// else if (marks=>80)
// console.log("B");

// else if (marks=>70)
// console.log("C");

// else if (marks=>60)
// console.log("D");

// else
// console.log("F");


// // task completed through if else
// if(todos[0].completed==true)
// console.log("Task is completed");
// else
// console.log("Task is incomplete");

// // using comma to show two strings 
// if(todos[0].completed)
// console.log(todos[0].title, " done");
// else
// console.log(todos[0].title, " pending");

// Concatenation using plus operator

// if(todos[0].completed)
// console.log(todos[0].title + ": done");
// else
// console.log(todos[0].title + ": pending");

//Modern Way Template String(put all in double quotes)
//Wrong Way

// if(todos[0].completed)
// console.log("todos[0].title done");
// else
// console.log("todos[0].title pending");

//Right Way Template String || using $ and {} with variables and `` around string

// if(todos[0].completed)
// console.log(`${todos[0].title} done`);
// else
// console.log(`${todos[0].title} pending`);


// Loops

// let arrary = [10,20,30,40,50,60];

// for(let i=0; i<=arrary.length; i++){
//     console.log(arrary[i]+5);
// }

//Sum

// let sum = 0;
// for(let i=0; i<=arrary.length;i++){
//     sum = sum + arrary[i];
//     console.log(`sum = ${sum}`);
// }


// Total Number of done and pendding from list 
 let done = 0;
 let pendding = 0;

for(let i=0; i<todos.length; i++){

  if(todos[i].completed)
      done++; 
  else
      pendding++;
}
console.log("Total Task Done: " + done);
console.log("Total Task Pedding: " + pendding);