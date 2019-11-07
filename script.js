let data = [];
let answer;
let prompt = document.getElementById('prompt');
let input = document.getElementById('input');

const url = 'https://cdn.jsdelivr.net/gh/hchiam/cognateLanguage@master/output_shortlist.txt'; //'https://raw.githubusercontent.com/hchiam/cognateLanguage/master/output_shortlist.txt';
$.get(url, function(fileData) {
  data = fileData.split('\n').filter((line) => line !== '');
  newPrompt();
}, 'text');

function getRandomNumber(min,max) {
  return min + Math.floor(Math.random() * max);
}

input.addEventListener('keyup', function checkAnswer(e) {
  if (e.keyCode === 13) {
    location.reload();
  }
  
  let inputValue = input.value.toLowerCase();
  if (inputValue == '') {
    input.style.background = '';
  } else if (inputValue == answer) {
    input.style.background = 'lime';
  } else if (answer.startsWith(inputValue)) {
    input.style.background = 'yellow';
  } else {
    input.style.background = 'red';
  }
});

function showAnswer() {
  input.value = answer;
  input.style.background = 'lime';
}

function hideAnswer() {
  input.value = '';
  input.style.background = '';
}

function newPrompt() {
  let i = getRandomNumber(0, data.length);
  let englishWord = data[i].split(',')[1];
  answer = data[i].split(',')[0];

  input.value = '';
  prompt.innerHTML = 'English: ' + englishWord;
}
