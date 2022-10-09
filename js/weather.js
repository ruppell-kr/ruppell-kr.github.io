const API_KEY = "a15bb8a244664fe84119536cf5401081";


function onGeoOk(position){
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((Response) => Response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = "@" + data.name;
            weather.innerText = data.weather[0].main + "/" + data.main.temp + "℃ ";
        });
}

function onGeoError(){
    alert("Can't find your location. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



 