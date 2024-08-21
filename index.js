const counterElement = document.getElementById('counter');
const progressBar = document.querySelector('.progress-bar');
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const undoButton = document.getElementById('undo');
const redoButton = document.getElementById('redo');

let count = 0;
let history = [];
let undoIndex = 0;

function updateCounter() {
  counterElement.textContent = count;
  progressBar.style.width = `${(count / 150) * 100}%`;
}

decrementButton.addEventListener('click', () => {
  if (count > 0) {
    count--;
    history.push(count);
    undoIndex = history.length - 1;
    updateCounter();
  }
});

incrementButton.addEventListener('click', () => {
  if (count < 150) {
    count++;
    history.push(count);
    undoIndex = history.length - 1;
    updateCounter();
  }
});

undoButton.addEventListener('click', () => {
  if (undoIndex > 0) {
    undoIndex--;
    count = history[undoIndex];
    updateCounter();
  }
});

redoButton.addEventListener('click', () => {
  if (undoIndex < history.length - 1) {
    undoIndex++;
    count = history[undoIndex];
    updateCounter();
  }
});

updateCounter();