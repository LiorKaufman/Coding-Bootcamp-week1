// Write a for loop that logs each number from 1 - 20.
console.log("Question 1");
for(let i = 1; i <= 20; i++) {
    console.log(i);
}


// Write a for loop that logs the result of each number from 1 - 20 tripled.
console.log("Question 2");
for(let i = 1; i <= 20; i++) {
    console.log(i * 3);
}

// Consider this variable: var numbers = [8, 2, 17, 4, 5, 10, 4, 8, 9, 15]. Write a for loop that logs each number multiplied by 4.
console.log("Question 3");
var numbers = [8, 2, 17, 4, 5, 10, 4, 8, 9, 15]
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 4);
}

// Create a for loop that logs each EVEN number from 1-20, and in the place of every odd number, returns the word "ODD" So the result should be: [ODD, 2, ODD, 4, ODD, 6 ....]
console.log("Question 4");
for (let i = 1; i <= 20; i++) {
    if (i % 2 ===0) {
        console.log(i);
    } else {
        console.log("ODD");
    }
}

// Write a for loop that logs each number from 1 - 10 in reverse.
console.log("Question 5");
for (let i = 10; i > 0; i--) {
    console.log(i);
}


// Consider this variable: var letters = ["l", "e", "a", "r", "n"] Write a for loop that logs each letter capitalized.
console.log("Question 6");
var letters = ["l", "e", "a", "r", "n"]
for (let i = 0; i < letters.length; i++) {
    console.log(letters[i].toUpperCase());
}

// Consider this variable: var strings = ["hi", "yo", "there", "what", "how", "two", "are", "where", "you"]. Write a for loop that logs the strings at only the even indexes(start with 0).
console.log("Question 7");
var strings = ["hi", "yo", "there", "what", "how", "two", "are", "where", "you"]
for (let i = 0; i < strings.length; i++) {
    if (i % 2 === 0) {
        console.log(strings[i]);
    }
}

// Write a for loop that iterates from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. Sample Output : "0 is even" "1 is odd" "2 is even"

console.log("Even Odd");
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0 && i !== 0) {
        console.log(i + " is even");
    } else if (i === 0) {
        console.log(i + " is zero");
    } else {
        console.log(i + " is odd");
    }
}

// Use a for loop to log all numbers from 1-100. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
console.log("FizzBuzz");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
