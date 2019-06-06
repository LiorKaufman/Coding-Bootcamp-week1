function play (){

  var randNum = Math.floor(Math.random() * 100) +1
  var userGuess = document.getElementById('guessNum')
  let attemts = 0
  do {
    // changes screen to show win
    let gameOn = true;
    // stops the loop
    if (checkGuess(userGuess , randNum)) {
      gameOn=false
      // change message to show you have won
    }
    else if(!checkGuess(userGuess , randNum)) {
      attemts++
    }
    if (attemts === 7) {
      gameOn = false
      // add to screen losing message
    }

  } while (gameOn);

}

function checkGuess(userGuess, randNum) {
  if (userGuess > randNum) {
    // change the screen to say to high
    return false
  } else if (userGuess < randNum ) {
    // change screen to say too low
    return false
  } else if (userGuess === randNum) {
    return true
  }
}
