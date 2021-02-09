let apiKey = "40c070457645a25e3aed4a4bf9319268";
let city = "Sydney";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

function showTemperature(response) {
  console.log(response.data.main.temp);
  let temperature = Math.round(`${response.data.main.temp}`);
  console.log(temperature);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `It is ${temperature} °C in ${city}`;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
