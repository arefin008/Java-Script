// API Lists
// 1. https://random.dog/woof.json
// 2. https://cataas.com/cat
// 3. https://thispersondoesnotexist.com/
// 4. https://goweather.herokuapp.com/weather/toronto
// 5. http://universities.hipolabs.com/search?name=university&country=bangladesh
// 6. https://api.kanye.rest/

async function getRandomDogImage() {
  const url = "https://random.dog/woof.json";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  document.getElementById("dogImage").src = data.url;

  const isVideo = data.url.endsWith(".mp4");

  if (isVideo) {
    document.getElementById("dogVideo").src = data.url;
    document.getElementById("dogImage").src = "";
  } else {
    document.getElementById("dogImage").src = data.url;
    document.getElementById("dogVideo").src = "";
  }
}

setInterval(getRandomDogImage, 2000);

window.onload = function () {
  getRandomDogImage();
};
