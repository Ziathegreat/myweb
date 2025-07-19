async function getQuote() {
  const res = await fetch('https://api.quotable.io/random');
  const data = await res.json();
  document.getElementById('quote').textContent = data.content + ' — ' + data.author;
}

function showEgg() {
  alert(\"👀 You've found the secret, Zia! Here's a fact: You are 93% more awesome than you admit.\");
}

// Load a quote on page load
window.onload = getQuote;
