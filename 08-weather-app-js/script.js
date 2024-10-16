document.addEventListener('DOMContentLoaded', ()=>{
    const api = {
      key: "edb635ccfd65bae10289896a8dcfd1b2",
      base: "https://api.openweathermap.org/data/2.5/",
    };

    let searchBar = document.querySelector(".search-bar");
    let searchBtn = document.querySelector(".search-btn");

    searchBar.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        getData(e.target.value);
      }
    });

    searchBtn.addEventListener("click", (e) => {
      let query = searchBar.value;
      getData(query);
    });

    function getData(query) {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((weather) => {
          return weather.json();
        })
        .then((data) => renderData(data));
    }

    function renderData(data) {
      let cityElem = document.querySelector(".city");
      let dateElem = document.querySelector(".date");
      let tempElem = document.querySelector(".temp");
      let condtionElem = document.querySelector(".condition");
      let temprangeElem = document.querySelector(".temp-range");
      let humidityElem = document.querySelector(".humidity");
      let feelsLikeElem = document.querySelector(".feels-like");
      let pressureElem = document.querySelector(".pressure");

      let city = data.name;
      let country = data.sys.country;
      let temp = Math.ceil(data.main.temp);
      let condition = data.weather[0].main;
      let temp_max = Math.ceil(data.main.temp_max);
      let temp_min = Math.ceil(data.main.temp_min);
      let humidity = data.main.humidity;
      let feelsLike = Math.ceil(data.main.feels_like);
      let pressure = data.main.pressure;

      let now = new Date();

      cityElem.innerHTML = `${city}, ${country}`;
      dateElem.innerHTML = `${showDate(now)}`;
      tempElem.innerHTML = `${temp}°c`;
      condtionElem.innerHTML = `<i>${condition}</i>`;
      temprangeElem.innerHTML = `${temp_min}°c - ${temp_max}°c`;
      humidityElem.innerHTML = `humidity: ${humidity}%`;
      feelsLikeElem.innerHTML = `feels like: ${feelsLike}°c`;
      pressureElem.innerHTML = `pressure: ${pressure}`;
    }

    function showDate(date) {
      const months = [
        "january",
        "feburary",
        "march",
        "april",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december",
      ];
      const days = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ];
      let day = days[date.getDay()];
      let dd = date.getDate();
      let mm = months[date.getMonth()];
      let yy = date.getFullYear();
      console.log(`${day} ${dd} ${mm} ${yy}`);

      return `${day} ${dd} ${mm} ${yy}`;
    }


})