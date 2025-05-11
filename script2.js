fetch('words2.txt')
  .then(response => response.text())
  .then(text => {
    const words = text.split('\n').map(w => w.trim()).filter(Boolean);
    const wordDiv = document.getElementById("word");
    const button = document.getElementById("getRandomWord");

    button.addEventListener("click", () => {
      const random = Math.floor(Math.random() * words.length);
      wordDiv.textContent = words[random];
    });
  });
