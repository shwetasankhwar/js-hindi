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