const apiKey = "941568d1cff66e697f627a7d3195b0f8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector("#inp");
const searchbtn = document.querySelector("#btn");

const rain = document.querySelector("#rain")
 async function checkWeather(city){
    const response = await fetch (apiUrl + city + `&appid=${apiKey}` );
    if(response.status == 404){
        alert('ENTER CITY NAME CORRECTLY');
    }
    else{
    var data = await response.json();
    


    document.querySelector(".c").innerHTML = data.name;
    document.querySelector("#cen").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".sp").innerHTML = data.wind.speed + "km/h";
    document.querySelector("#ss").innerHTML = data.weather[0].main;

    if(data.weather[0].main == "Clouds"){
        rain.src="clouds.gif";
        document.querySelector("body").style.backgroundImage="url(cd.gif)";

    }
    else if(data.weather[0].main == "Clear"){
        rain.src="sunnn.gif";
        document.querySelector("body").style.backgroundImage="url(hz.gif)";

    }else if(data.weather[0].main == "Rain"){
        rain.src="drizzleg.gif";
        document.querySelector("body").style.backgroundImage="url(rain.gif)";
    }
    else if(data.weather[0].main == "Drizzle"){
        rain.src="raing.gif";
        document.querySelector("body").style.backgroundImage="url(rain.gif)";
    }
    else if(data.weather[0].main == "Mist"){
        rain.src="mist.gif";
        document.querySelector("body").style.backgroundImage="url(rn.gif)";
    }
    else if(data.weather[0].main == "Snow"){
        rain.src="snowi.gif";
        document.querySelector("body").style.backgroundImage="url(snow.gif)";
    }
    else if(data.weather[0].main == "Haze"){
        rain.src="clouds.gif";
        document.querySelector("body").style.backgroundImage="url(rn.gif)";
    }
   
     document.querySelector("#hide").style.display="block";
     document.querySelector("#hide").style.display="flex";
    }}
 searchbtn.addEventListener("click", (event)=>{
    event.preventDefault();
    if(searchbox.value === ""){
        alert('ENTER CITY NAME')
    }
    else{
    checkWeather(searchbox.value);
    }
 });
