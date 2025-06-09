async function getRandomCatImage() {
  const data = "https://cataas.com/cat?" + Math.random() * 1000;
  console.log(data);

  document.getElementById("getCatImage").src = data;
}
setInterval(getRandomCatImage, 2000);

window.onload = function () {
  getRandomCatImage();
};
