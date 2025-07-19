const quotes = [
  "“Stay hungry, stay foolish.” – Steve Jobs",
  "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
  "“Simplicity is the soul of efficiency.” – Austin Freeman",
  "“The best error message is the one that never shows up.” – Thomas Fuchs"
];

function getRandomQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[random];
}

// Easter egg: press 'Z' to trigger a secret
document.addEventListener("keydown", function(e) {
  if (e.key.toLowerCase() === 'z') {
    alert("👑 Zia the Great detected! Welcome back, legend.");
  }
});
