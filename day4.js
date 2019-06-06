//
// Exercise 1
// Consider this variable:
//
// var product = { name: "chair", price: 14.99 }
// Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".

var product = { name: "chair", price: 14.99 }

cost = (arg1) => `${arg1.name} ${arg1.price}`

// declare a function named old_enough that recives 1 argument
// check if argument is over 21 using conditionals
// return true or false depending on age

old_enough = (arg1) => arg1 >= 21 ? true:false

console.log(old_enough(7));

//write an arrow function called greaterNum
//the function takes two args
//use string interpolation to return the greater numbers
//test two times

greaterNum = (arg1, arg2) => arg1 > arg2 ? `${arg1}`:`${arg2}`

console.log(greaterNum(6,29));


var person = {
   name:"Alex Keaton",
   phone: 123456789,
   getData() {return this.name +"-"+this.phone}
}

const {name , phone} = person

console.log(name);

//write an arrow function that uses a spread operator
//the function takes in any numbers and letters and returns as one word
word = (...word2) => word2.join("")
console.log(word("he","l","l","o"));

var object1 = {
   name2: "Jerry",
   age2: 22,
   objInside: {
       name1: "Tom",
       age: 15
   }
}

const {name1 , age} = object1.objInside
console.log(object1.age2);


allThree = (arg1) => {return `${arg1.age2} + ${age}`}

console.log(allThree(object1));
