let alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

let win = document.getElementById('win')
let loss = document.getElementById('loss')
let left = document.getElementById('left')
let guesses = document.getElementById('guesses')

let wins = 0
let losses = 0
let guessesLeft = 9
window.onkeypress = function (e) {
  let randomNumber = Math.floor(Math.random() * alphabet.length)
  let compChoice = alphabet[randomNumber]
  let userChoice = e.key

  if (guesses.innerHTML === '') {
    guesses.innerHTML += userChoice
  } else if (guesses.innerHTML !== '') {
    guesses.innerHTML += `, ${userChoice}`
  }
  if (compChoice === userChoice) {
    wins += 1
    win.innerHTML = wins
    guessesLeft = 9
    left.innerHTML = guessesLeft
    guesses.innerHTML = ''
    console.log(wins)
    console.log('winnnn')
  } else {
    guessesLeft -= 1
    left.innerHTML = guessesLeft
    if (guessesLeft === 0 && compChoice !== userChoice) {
      guessesLeft = 9
      losses += 1
      loss.innerHTML = losses
      left.innerHTML = guessesLeft
      guesses.innerHTML = ''
    }
    console.log(guessesLeft)
    console.log('didnt win')
  }
}
