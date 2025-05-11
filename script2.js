let words = [];

fetch('words.txt')
  .then(response => response.text())
  .then(text => {
    words = text.split('\n').map(w => w.trim()).filter(Boolean);
  });

function getRandomWord() {
  if (words.length === 0) return;
  const index = Math.floor(Math.random() * words.length);
  document.getElementById('word').textContent = words[index];
}
