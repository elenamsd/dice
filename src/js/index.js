import '../css/index.css'

const throwDice = () =>  {
  const faces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  const randomIndexFace = Math.floor((Math.random() * 6));
  const diceFace = document.getElementById('diceFace');

  diceFace.textContent = faces[randomIndexFace];
  setHistory(randomIndexFace+1);
}

const setHistory = (previousDice) => {
  const history = document.getElementById('historyText');
  history.innerHTML += `${'<p>' + previousDice + '</p>'}`;
}

const buttonThrow = document.getElementById('buttonThrow');
buttonThrow.addEventListener('click', throwDice);