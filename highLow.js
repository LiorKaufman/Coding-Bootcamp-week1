var randNum = Math.floor(Math.random() *100+1)
let attempts = 0
document.getElementById("submitGuess").onclick = function(){

  var userGuess = document.getElementById("guessField").value
  if (userGuess == randNum) {
    alert("You won!")
  }
  else if (userGuess > randNum && attempts < 7) {
    alert("Too high")
    attempts++
    changeNumOfAttempts(attempts)
    showLastAttempts(userGuess)
  }
  else if (userGuess < randNum && attempts < 7) {
    alert("Too low")
    attempts++
    changeNumOfAttempts(attempts)
    showLastAttempts(userGuess)
  }
  else if (attempts >= 7) {
    alert("You lost")
  }
}

function changeNumOfAttempts (value) {
  document.getElementById("displayAttempts").innerHTML = `${attempts}`
}

function showLastAttempts(userPrivGuess) {
 document.getElementById("dispNums").innerHTML +=`${userPrivGuess},`
}
