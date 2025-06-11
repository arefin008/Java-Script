async function fetchUnivercities() {
  const country = document.getElementById("country").value;
  // console.log(country);

  const url = `http://universities.hipolabs.com/search?name=university&country=${country}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  document.getElementById(
    "universityCount"
  ).innerText = `Total Universities of ${country} is ${data.length}`;

  const list = document.getElementById("universityList");
  list.innerHTML = data
    .map(
      (university) =>
        `<li class="list-group-item my-1">${university.name}</li>
`
    )
    .join("");
}
fetchUnivercities();
