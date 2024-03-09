let now = new Date();

let datetime = document.querySelector("#datetime");
let hours = now.getHours();
let minute = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
datetime.innerHTML = `${day} ${hours}:${minute}`;

//challenge 2
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#input-search");
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = searchInput.value;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
