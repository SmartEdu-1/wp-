const countEl = document.getElementById("count");
const messageEl = document.getElementById("message");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const yearEl = document.getElementById("year");

let count = 0;

function updateDisplay() {
  countEl.textContent = count;
  messageEl.textContent =
    count === 0
      ? "Give it a click to get started!"
      : `You've clicked ${count} time${count === 1 ? "" : "s"}.`;

  const isEven = count % 2 === 0;
  messageEl.style.color = isEven ? "#2563eb" : "#9333ea";
}

function setYear() {
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
}

incrementBtn.addEventListener("click", () => {
  count += 1;
  updateDisplay();
});

decrementBtn.addEventListener("click", () => {
  count = Math.max(0, count - 1);
  updateDisplay();
});

// Initialize
updateDisplay();
setYear();
