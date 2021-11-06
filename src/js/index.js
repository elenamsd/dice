import '../css/index.css'

let array = [];
let numbersCont = 0;

const throwDice = () =>  {
  const faces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  const randomIndexFace = Math.floor((Math.random() * 6));
  const diceFace = document.getElementById('diceFace');

  diceFace.textContent = faces[randomIndexFace];
  setHistory(randomIndexFace+1);
}

const setHistory = (previousDice) => {
  const history = document.getElementById('historyText');

  array[numbersCont] = (`${'<p>' + previousDice + '</p>'}`);
  numbersCont++;


  if (numbersCont == 10) {
    numbersCont = 0;
    // array
    console.log("10 elementos");
  }
  let textPrinted = array.join('');
  history.innerHTML = `${textPrinted}`;
}


const clearHistory = () => {
  const history = document.getElementById('historyText');
  history.innerHTML = "";
  array = [];
  numbersCont = 0;
}

const buttonThrow = document.getElementById('buttonThrow');
buttonThrow.addEventListener('click', throwDice);

const buttonClear = document.getElementById('buttonClear');
buttonClear.addEventListener('click', clearHistory);