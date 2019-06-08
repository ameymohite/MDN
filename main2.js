let randomNumber = Math.floor(Math.random()*100)+1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

 function checkGuess()
 {
 	//alert('I am on placeholder');
  let userGuess = Number(guessField.value);
  if (guessCount === 1) 
  {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';
 
  if (userGuess === randomNumber)
   {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) 

  {
    lastResult.textContent = '!!!GAME OVER!!!';
     lastResult.style.backgroundColor = 'black';
     lowOrHi.textContent = 'STOP YOU HAVE ZERO CHANCES LEFT';
    setGameOver();
  } 
  else
  {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber)
    {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) 

    {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }
 
  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click',checkGuess);  //call function checkGuess on button click

function setGameOver()  //START NEW GAME button code
{
      guessSubmit.disabled=true;
      guessField.disabled=true;
      resetButton=document.createElement('button');
      resetButton.textContent='START NEW GAME';
      document.body.appendChild(resetButton);
      resetButton.addEventListener('click',resetGame);
}


function resetGame() //reset the game to initial phase
{
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++)
  {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}