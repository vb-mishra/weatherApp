const apiKey =
    "e76b5d2e47c4e6b727ca0d9efd67702b";
const main = document.getElementById(`main`);
const form = document.getElementById(`form`);
const search = document.getElementById(`search`);
const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), {
        origin: "cross"
    });
    const resData = await resp.json();
    addWeatherToPage(resData);
}

function addWeatherToPage(data) {
    const temp = Ktoc(data.main.temp);
    const weather = document.createElement(`div`)
    weather.classList.add(`weather`);
    weather.innerHTML = `
    <h2>
    ${temp}°C 
    </h2>
    <small>${data.weather[0].main}</small>`;

    // 
    main.innerHTML = "";

    main.appendChild(weather);

};
function Ktoc(K) {
    return Math.floor(K - 273.15);
}

form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const city = search.value;
    if (city) {
        getWeatherByLocation(city)
    }
}

);

// nav js

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu (){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}