window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let locationIcon = document.querySelector('.location-icon');
    let windSpeed = document.querySelector('.wind-speed');

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
           long = position.coords.longitude;
           lat = position.coords.latitude; 
           let myCity = 829955;

           
           const api = `https://api.openweathermap.org/data/2.5/weather?id=${myCity}&units=metric&appid=554b613089d7aec548c36d14a6fa487b`; 
           
           fetch(api)
           .then(response => {
               return response.json();
           })
           .then(data => {
               console.log(data);
               const {temp, summary } = data.main;
               // Set DOM elements from the API
               temperatureDegree.textContent = Math.round(temp);
               const weather = data.weather[0].description;
               temperatureDescription.textContent = weather;
               const cityName = data.name;
               locationTimezone.textContent = cityName;
               const weatherIcon = data.weather[0].icon;
               locationIcon.innerHTML =`<img src="https://openweathermap.org/img/w/${weatherIcon}.png">`; 
               const windS = data.wind.speed;
               windSpeed.textContent = windS;
           })
        });


    }
    
})

