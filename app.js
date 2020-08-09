
// var main = document.querySelector('#name');
// var temp = document.querySelector('.temp');
// var desc = document.querySelector('.desc');
// var clouds = document.querySelector('.clouds');



// button.addEventListener('click', function(name){
// fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=c5dd93beef11d423d27ed69366c76207')
// .then(response => response.json())
// .then(data => {
//   console.log(data);  
//   var tempValue = data['main']['temp'];
//   var nameValue = data['name'];
//   var descValue = data['weather'][0]['description'];

//   main.innerHTML = nameValue;
//   desc.innerHTML = "Desc - "+descValue;
//   temp.innerHTML = "Temp - "+tempValue;
//   input.value ="";

// })

// .catch(err => alert("Wrong city name!"));
// })



window.addEventListener('load', ()=> {
    let long;
    let lat;
    let tempDesc = document.querySelector('.temperature-description');
    let tempDegree = document.querySelector('.temperature-degree');
    let tempSection = document.querySelector('.temperature');
    let tempSpan = document.querySelector('.temperature span');
    let location = document.querySelector('.location-place');

    var input = document.querySelector('.input_text');
    var button= document.querySelector('.submit');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=c5dd93beef11d423d27ed69366c76207`;

            fetch(api)
            .then(response =>{
                return response.json();
               
            })
            .then(data =>{
                console.log(data);

                const {temp, pressure} = data.main;
                const {description, clouds} = data.weather[0];

                tempDegree.textContent = temp;
                tempDesc.textContent = description;
                location.textContent = data.name;
                let celcius = (temp - 32)*(5/9);
                //set icon
                // setIcons(description, iconID);

                tempSpan.textContent = 'C';
                tempDegree.textContent = Math.floor(celcius);

                tempSection.addEventListener('click', () => {
                  if (tempSpan.textContent === 'C') {
                      tempSpan.textContent = 'F';
                      tempDegree.textContent = temp;   
                  } else {
                    tempSpan.textContent = 'C';
                    tempDegree.textContent = Math.floor(celcius);
                  }
                  });

                // var prefix = 'wi wi-';
                var code = data.weather[0].id;
                // var code = 902;
                console.log(code);
                var icon = weatherIcons[code].icon;

                // If we are not in the ranges mentioned above, add a day/night prefix.
                if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
                    icon = 'day-' + icon;
                }

                // Finally tack on the prefix.
                // icon = prefix + icon;
                console.log(icon);
                let iconSection = document.querySelector('.wi-icon');
                iconSection.classList.add('wi-' + icon);
                // document.querySelector('.wi-day-' + icon);
            });
 
        });


    }

    // button.addEventListener('click', function(name){
    //   fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
    //   .then(response => response.json())
    //   .then(data => {
    //     var tempValue = data['main']['temp'];
    //     var nameValue = data['name'];
    //     var descValue = data['weather'][0]['description'];
      
    //     main.innerHTML = nameValue;
    //     desc.innerHTML = "Desc - "+descValue;
    //     temp.innerHTML = "Temp - "+tempValue;
    //     input.value ="";
      
    //   })
      
    //   .catch(err => alert("Wrong city name!"));
    // })

    let weatherIcons = {
      "200": {
        "label": "thunderstorm with light rain",
        "icon": "storm-showers"
      },
    
      "201": {
        "label": "thunderstorm with rain",
        "icon": "storm-showers"
      },
    
      "202": {
        "label": "thunderstorm with heavy rain",
        "icon": "storm-showers"
      },
    
      "210": {
        "label": "light thunderstorm",
        "icon": "storm-showers"
      },
    
      "211": {
        "label": "thunderstorm",
        "icon": "thunderstorm"
      },
    
      "212": {
        "label": "heavy thunderstorm",
        "icon": "thunderstorm"
      },
    
      "221": {
        "label": "ragged thunderstorm",
        "icon": "thunderstorm"
      },
    
      "230": {
        "label": "thunderstorm with light drizzle",
        "icon": "storm-showers"
      },
    
      "231": {
        "label": "thunderstorm with drizzle",
        "icon": "storm-showers"
      },
    
      "232": {
        "label": "thunderstorm with heavy drizzle",
        "icon": "storm-showers"
      },
    
      "300": {
        "label": "light intensity drizzle",
        "icon": "sprinkle"
      },
    
      "301": {
        "label": "drizzle",
        "icon": "sprinkle"
      },
    
      "302": {
        "label": "heavy intensity drizzle",
        "icon": "sprinkle"
      },
    
      "310": {
        "label": "light intensity drizzle rain",
        "icon": "sprinkle"
      },
    
      "311": {
        "label": "drizzle rain",
        "icon": "sprinkle"
      },
    
      "312": {
        "label": "heavy intensity drizzle rain",
        "icon": "sprinkle"
      },
    
      "313": {
        "label": "shower rain and drizzle",
        "icon": "sprinkle"
      },
    
      "314": {
        "label": "heavy shower rain and drizzle",
        "icon": "sprinkle"
      },
    
      "321": {
        "label": "shower drizzle",
        "icon": "sprinkle"
      },
    
      "500": {
        "label": "light rain",
        "icon": "rain"
      },
    
      "501": {
        "label": "moderate rain",
        "icon": "rain"
      },
    
      "502": {
        "label": "heavy intensity rain",
        "icon": "rain"
      },
    
      "503": {
        "label": "very heavy rain",
        "icon": "rain"
      },
    
      "504": {
        "label": "extreme rain",
        "icon": "rain"
      },
    
      "511": {
        "label": "freezing rain",
        "icon": "rain-mix"
      },
    
      "520": {
        "label": "light intensity shower rain",
        "icon": "showers"
      },
    
      "521": {
        "label": "shower rain",
        "icon": "showers"
      },
    
      "522": {
        "label": "heavy intensity shower rain",
        "icon": "showers"
      },
    
      "531": {
        "label": "ragged shower rain",
        "icon": "showers"
      },
    
      "600": {
        "label": "light snow",
        "icon": "snow"
      },
    
      "601": {
        "label": "snow",
        "icon": "snow"
      },
    
      "602": {
        "label": "heavy snow",
        "icon": "snow"
      },
    
      "611": {
        "label": "sleet",
        "icon": "sleet"
      },
    
      "612": {
        "label": "shower sleet",
        "icon": "sleet"
      },
    
      "615": {
        "label": "light rain and snow",
        "icon": "rain-mix"
      },
    
      "616": {
        "label": "rain and snow",
        "icon": "rain-mix"
      },
    
      "620": {
        "label": "light shower snow",
        "icon": "rain-mix"
      },
    
      "621": {
        "label": "shower snow",
        "icon": "rain-mix"
      },
    
      "622": {
        "label": "heavy shower snow",
        "icon": "rain-mix"
      },
    
      "701": {
        "label": "mist",
        "icon": "sprinkle"
      },
    
      "711": {
        "label": "smoke",
        "icon": "smoke"
      },
    
      "721": {
        "label": "haze",
        "icon": "day-haze"
      },
    
      "731": {
        "label": "sand, dust whirls",
        "icon": "cloudy-gusts"
      },
    
      "741": {
        "label": "fog",
        "icon": "fog"
      },
    
      "751": {
        "label": "sand",
        "icon": "cloudy-gusts"
      },
    
      "761": {
        "label": "dust",
        "icon": "dust"
      },
    
      "762": {
        "label": "volcanic ash",
        "icon": "smog"
      },
    
      "771": {
        "label": "squalls",
        "icon": "day-windy"
      },
    
      "781": {
        "label": "tornado",
        "icon": "tornado"
      },
    
      "800": {
        "label": "clear sky",
        "icon": "sunny"
      },
    
      "801": {
        "label": "few clouds",
        "icon": "cloudy"
      },
    
      "802": {
        "label": "scattered clouds",
        "icon": "cloudy"
      },
    
      "803": {
        "label": "broken clouds",
        "icon": "cloudy"
      },
    
      "804": {
        "label": "overcast clouds",
        "icon": "cloudy"
      },
    
    
      "900": {
        "label": "tornado",
        "icon": "tornado"
      },
    
      "901": {
        "label": "tropical storm",
        "icon": "hurricane"
      },
    
      "902": {
        "label": "hurricane",
        "icon": "hurricane"
      },
    
      "903": {
        "label": "cold",
        "icon": "snowflake-cold"
      },
    
      "904": {
        "label": "hot",
        "icon": "hot"
      },
    
      "905": {
        "label": "windy",
        "icon": "windy"
      },
    
      "906": {
        "label": "hail",
        "icon": "hail"
      },
    
      "951": {
        "label": "calm",
        "icon": "sunny"
      },
    
      "952": {
        "label": "light breeze",
        "icon": "cloudy-gusts"
      },
    
      "953": {
        "label": "gentle breeze",
        "icon": "cloudy-gusts"
      },
    
      "954": {
        "label": "moderate breeze",
        "icon": "cloudy-gusts"
      },
    
      "955": {
        "label": "fresh breeze",
        "icon": "cloudy-gusts"
      },
    
      "956": {
        "label": "strong breeze",
        "icon": "cloudy-gusts"
      },
    
      "957": {
        "label": "high wind, near gale",
        "icon": "cloudy-gusts"
      },
    
      "958": {
        "label": "gale",
        "icon": "cloudy-gusts"
      },
    
      "959": {
        "label": "severe gale",
        "icon": "cloudy-gusts"
      },
    
      "960": {
        "label": "storm",
        "icon": "thunderstorm"
      },
    
      "961": {
        "label": "violent storm",
        "icon": "thunderstorm"
      },
    
      "962": {
        "label": "hurricane",
        "icon": "cloudy-gusts"
      }
    };

});