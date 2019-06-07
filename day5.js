// Intro to Javascript Assessments

// Consider this variable:
console.log("find code that returns b from mantra var");
var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.
const getFirstLetter = (a) => {
    let firstChar = a.charAt(0)
    return firstChar
}

console.log(getFirstLetter(mantra));
// 2. Write the code that determines if there is a 'x' in mantra.
const checkFor = (a,b) => {
    return a.search(b)? true:false
}

// 3. Write the code that determines if there is a 'v' in mantra.
 // same code as before
// Stretch: Write the code that returns the position of 'v' in mantra.


console.log("check if a letter is inside the string and return the letter position ");
const checkForAndPos = (a,b) => {
    if (checkFor(a,b)) {
        return a.indexOf(b)
    }
}
console.log(checkForAndPos(mantra,"h"));
// Consider the following statement:


console.log("change the variable for the code to say I need more!");
var codingIsEasy = true
var imBored = true

if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"

// Consider the following statement:
console.log("change the variable for the code to say Keep coding!!");
var imLost = false
var imFrustrated = false

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"

// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.
console.log("Log every letter of a string ");
// const logEveryLetter = (a) => {
//   let array = a.split("")
//   for (let i = 0; i < a.length; i++) {
//     console.log(array[i]);
//   }
//   return
// }


// Stretch: Using a while loop.

// Super Stretch: Using forEach().
const logEveryLetter = (a) => {
  let tempArr = a.split("")
  return tempArr.forEach( (letter) => {
    console.log(letter);
  })
}
console.log(logEveryLetter(mantra));

// Consider the following variable:

var message = "thisisateststring"
 // letter representing a vowel sound, such as a, e, i, o, u


// 7. Write a function that takes a string like message as an argument and returns the string without vowels.
console.log("remove vowels ");
function vowelRemover (string) {
  let vowels = ["a","e","i","o","u","A","E","I","O","U"]
  let tempArr = string.split("")
  for (let i = 0; i < vowels.length; i++) {
    for (let j = 0; j < tempArr.length; j++) {
      if (tempArr[j] === vowels[i]) {
        tempArr.splice(j,1)
        j--
      }
    }
  }
  return tempArr.join("")
}

console.log(vowelRemover(message));
// Stretch: Update your function to throw an exception if the argument is not a string.

// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.

// Consider the following variable:
console.log("only objects with animal cat");
var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.
const onlyCats = (arr1) => {
  let emptyArr =[]
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].animal === "cat") {
      emptyArr.push(arr1[i])
    }
  }
  return emptyArr
}

console.log(onlyCats(toonimals));
