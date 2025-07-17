# projects related to DOM

## projects link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

```javascript 
console.log("hitesh")

const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');
buttons.forEach(function (button) {
  console.log(button);

  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'pink') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```


## project 2 solution
```javascript 

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = ` Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    // show the results
    results.innerHTML = `<span>${bmi}</span>`;
  }
  if (height < 18.6) {
    results.innerHTML = `Based on BMI weight guide You are Under weight`;
  }
  if (height < 18.6 && height > 24.9) {
    results.innerHTML = `Based on BMI weight guide You are Normal weight`;
  }
  if (height > 24.9) {
    results.innerHTML = `Based on BMI weight guide You are Over weight`;
  }
});


```

## project 3  solution code
```

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 2000);


```

## project 4 solution code
```
document.addEventListener('DOMContentLoaded', () => {
  let randomNumber = parseInt(Math.random() * 100 + 1);

  const submit = document.querySelector('#sub');
  const userInput = document.querySelector('#guessfield');
  const guessSlot = document.querySelector('.guesses');
  const remianing = document.querySelector('.lastResult');
  const lowOrHi = document.querySelector('.lowOrHi');
  const startOver = document.querySelector('.resultParas');

  const p = document.createElement('p');

  let prevGuess = [];
  let numGuess = 1;
  let playgame = true;

  submit.addEventListener('click', function (e) {
    e.preventDefault();
    if (!playgame) return;
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });

  function validateGuess(guess) {
    if (isNaN(guess)) {
      alert('Please Enter a valid number');
    } else if (guess < 1) {
      alert('Please Enter a number greater than 1');
    } else if (guess > 100) {
      alert('Please Enter a number less than 100');
    } else {
      prevGuess.push(guess);
      if (numGuess === 11) {
        displayGuess(guess);
        displayMessage(`Game Over. Random number was ${randomNumber}`);
        endGame();
      } else {
        displayGuess(guess);
        checkGuess(guess);
      }
    }
  }

  function checkGuess(guess) {
    if (guess === randomNumber) {
      displayMessage(`You guessed it right.`);
      endGame();
    } else if (guess < randomNumber) {
      displayMessage(`Number is too low`);
    } else {
      displayMessage(`Number is too high`);
    }
  }

  function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remianing.innerHTML = `${11 - numGuess}`;
  }

  function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
  }

  function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button id="newGame">Start New Game</button>`;
    startOver.appendChild(p);
    playgame = false;
    newGame();
  }

  function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remianing.innerHTML = `${11 - numGuess}`;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
      lowOrHi.innerHTML = '';
      playgame = true;
    });
  }
});
```
## project 5 solution
```
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = 'colour'>
  <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table> 
  </div>
  `;
});


```
### project 6 solution
``` javascript// generate a random colour

const randomColour = function () {
  const hex = '0123456789AbcdEF';
  let colour = '#';
  for (let i = 0; i < 6; i++) {
    colour += hex[Math.floor(Math.random() * 16)];
  }
  return colour;
};
let intervalID;
const startChangingColour = function () {
  if (!intervalID) {
    intervalID = setInterval(changeBGColur, 1000);
  }

  function changeBGColur() {
    document.body.style.backgroundColor = randomColour();
  }
};
const stopChangingColour = function () {
  clearInterval(intervalID);
  intervalID = null;
};
document.querySelector('#start').addEventListener('click', startChangingColour);
document.querySelector('#stop').addEventListener('click', stopChangingColour);
console.log(randomColour());


```