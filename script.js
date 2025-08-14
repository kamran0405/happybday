document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }, 300);
});
