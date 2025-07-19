const quotes = [
  "“Stay hungry, stay foolish.” – Steve Jobs",
  "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
  "“Simplicity is the soul of efficiency.” – Austin Freeman",
  "“The best error message is the one that never shows up.” – Thomas Fuchs",
  "“Axioms are accepted statements that we do not challenge and the make everything else true while not questioning them do not make them true.” -zia",
  " “There nothing as justified rational beliefs because axioms are unjustified themselves to begin with and justification need other axioms to make justification just” -zia"
  
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
