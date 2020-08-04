// var input = document.querySelector('.input_text');
// var main = document.querySelector('#name');
// var temp = document.querySelector('.temp');
// var desc = document.querySelector('.desc');
// var clouds = document.querySelector('.clouds');
// var button= document.querySelector('.submit');


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

                tempSection.addEventListener('click', () => {
                    if (tempSpan.textContent === 'F') {
                        tempSpan.textContent = 'C';
                        tempDegree.textContent = Math.floor(celcius);
                    } else {
                        tempSpan.textContent = 'F';
                        tempDegree.textContent = temp;    
                    }
                });

                var prefix = 'wi wi-';
                var code = data.weather[0].id;
                var icon = icons[code].icon;

                // If we are not in the ranges mentioned above, add a day/night prefix.
                if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
                    icon = 'day-' + icon;
                }

                // Finally tack on the prefix.
                icon = prefix + icon;
            });
        });
    }

    // function  setIcons(icon, iconID) {
    //     const skycons = new Skycons({color: "white"});
    //     const currentIcon = icon.replace(/ /g, "_").toUpperCase();
    //     console.log('34', currentIcon);
    //     skycons.play();
    //     return skycons.set(iconID, Skycons[currentIcon]);
    // }

});