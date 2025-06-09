async function getRandomQuote() {
  const url = "https://api.kanye.rest/";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  document.getElementById("quote").innerText = data.quote;
}

setInterval(getRandomQuote, 2000);

window.onload = function () {
  getRandomQuote();
};
