const words = [
"кач"
];
function getRandomWord() {
  const index = Math.floor(Math.random() * words.length);
  document.getElementById('word').textContent = words[index];
}
