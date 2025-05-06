const words = [
  "огонь", "сцена", "поток", "харизма", "сила",
  "деньги", "уверенность", "взлет", "ритм", "кач"
];
function getRandomWord() {
  const index = Math.floor(Math.random() * words.length);
  document.getElementById('word').textContent = words[index];
}
