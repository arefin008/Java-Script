async function getRandomPerson() {
  const data = "https://thispersondoesnotexist.com/";
  document.getElementById("randomPerson").src = data;
}

setInterval(getRandomPerson, 2000);
window.onload = function () {
  getRandomPerson();
};
