console.log("hello")


var Seattle = document.querySelector("#btnSeattle")
var Chicago = document.querySelector("#btnChicago")
var NewYork = document.querySelector("#btnNY")
var NewOrleans = document.querySelector("#btnNewOrleans")
var SanFrancisco = document.querySelector("#btnSanFrancisco")


Seattle.addEventListener('click', function(){
    var lat = 47.606209;
    var lon = -122.332069;
    var getSeattle = fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' +lat+ '&lon=' +lon+ '&appid=efa45d9e21f5a963fd87caecdd3b2b02').then(function(res){
        return res.json();
    }).then(function(data) {
        console.log(data);
        var Textarea = document.querySelector('#text-area')
        var li = document.querySelector('li')
        var CityH3 = Textarea.querySelector('h2')
        var cityName = data.city.name;
        var temp = data.list[0].main.temp;
        var cel = temp- 273.15;
        var F = (cel * 1.8) +32;
        var li2 = document.querySelector('ul').children[1];
        var cond = data.list[0].weather[0].main;
        var icon = data.list[0].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/"+ icon + ".png";
        var iconimg =  document.querySelector("#icon");
        var li3 = document.querySelector("ul").children[2];
        var wind = data.list[0].wind.deg
        var winddir = '';
        var li4 = document.querySelector('ul').children[3];
        var humidity = data.list[0].main.humidity
        
            if(wind >= 337 || wind < 22){
                winddir = "N"
            }else if(wind >= 22.1 || wind < 67){
                winddir = "NE"
            }else if(wind >= 67.1 || wind < 112){
                winddir = "E"
            }else if(wind >= 112.1 || wind < 157){
                winddir = "SE"
            }else if(wind >= 157.1 || wind < 202){
                winddir = "S"
            }else if(wind >= 202.1 || wind < 247){
                winddir = "SW"
            }else if(wind >= 247.1 || wind < 292){
                winddir = "W"
            }else if(wind >= 292.1 || wind < 336.9){
                winddir = "NW"
            };
       

        iconimg.innerHTML = "<img src='" +iconurl + "'/>";
        li.textContent = Math.round(F)+' º';
        CityH3.textContent = cityName;
        li2.textContent = cond;
        li3.textContent = "wind direction: "+ winddir;
        li4.textContent = "humidity: " + humidity;
    })
})
Chicago.addEventListener('click', function(){
    var lat = 41.878113;
    var lon = -87.629799;
    var getChicago = fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' +lat+ '&lon=' +lon+ '&appid=efa45d9e21f5a963fd87caecdd3b2b02').then(function(res){
        return res.json();
    }).then(function(data) {
        console.log(data);
        var Textarea = document.querySelector('#text-area')
        var li = document.querySelector('li')
        var CityH3 = Textarea.querySelector('h2')
        var cityName = data.city.name;
        var temp = data.list[0].main.temp;
        var cel = temp- 273.15;
        var F = (cel * 1.8) +32;
        var li2 = document.querySelector('ul').children[1];
        var cond = data.list[0].weather[0].main;
        var icon = data.list[0].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/"+ icon + ".png";
        var iconimg =  document.querySelector("#icon");
        var li3 = document.querySelector("ul").children[2];
        var wind = data.list[0].wind.deg
        var winddir = '';
        var li4 = document.querySelector('ul').children[3];
        var humidity = data.list[0].main.humidity
        
            if(wind >= 337 || wind < 22){
                winddir = "N"
            }else if(wind >= 22.1 || wind < 67){
                winddir = "NE"
            }else if(wind >= 67.1 || wind < 112){
                winddir = "E"
            }else if(wind >= 112.1 || wind < 157){
                winddir = "SE"
            }else if(wind >= 157.1 || wind < 202){
                winddir = "S"
            }else if(wind >= 202.1 || wind < 247){
                winddir = "SW"
            }else if(wind >= 247.1 || wind < 292){
                winddir = "W"
            }else if(wind >= 292.1 || wind < 336.9){
                winddir = "NW"
            };
       

        iconimg.innerHTML = "<img src='" +iconurl + "'/>";
        li.textContent = Math.round(F)+' º';
        CityH3.textContent = cityName;
        li2.textContent = cond;
        li3.textContent = "wind direction: "+ winddir;
        li4.textContent = "humidity: " + humidity;
    })
})
NewYork.addEventListener('click', function(){
    var lat = 40.7128;
    var lon = -74.0060;
    var getDenver = fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' +lat+ '&lon=' +lon+ '&appid=efa45d9e21f5a963fd87caecdd3b2b02').then(function(res){
        return res.json();
    }).then(function(data) {
        console.log(data);
        var Textarea = document.querySelector('#text-area')
        var li = document.querySelector('li')
        var CityH3 = Textarea.querySelector('h2')
        var cityName = data.city.name;
        var temp = data.list[0].main.temp;
        var cel = temp- 273.15;
        var F = (cel * 1.8) +32;
        var li2 = document.querySelector('ul').children[1];
        var cond = data.list[0].weather[0].main;
        var icon = data.list[0].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/"+ icon + ".png";
        var iconimg =  document.querySelector("#icon");
        var li3 = document.querySelector("ul").children[2];
        var wind = data.list[0].wind.deg
        var winddir = '';
        var li4 = document.querySelector('ul').children[3];
        var humidity = data.list[0].main.humidity
        
            if(wind >= 337 || wind < 22){
                winddir = "N"
            }else if(wind >= 22.1 || wind < 67){
                winddir = "NE"
            }else if(wind >= 67.1 || wind < 112){
                winddir = "E"
            }else if(wind >= 112.1 || wind < 157){
                winddir = "SE"
            }else if(wind >= 157.1 || wind < 202){
                winddir = "S"
            }else if(wind >= 202.1 || wind < 247){
                winddir = "SW"
            }else if(wind >= 247.1 || wind < 292){
                winddir = "W"
            }else if(wind >= 292.1 || wind < 336.9){
                winddir = "NW"
            };
       

        iconimg.innerHTML = "<img src='" +iconurl + "'/>";
        li.textContent = Math.round(F)+' º';
        CityH3.textContent = cityName;
        li2.textContent = cond;
        li3.textContent = "wind direction: "+ winddir;
        li4.textContent = "humidity: " + humidity;
    })
})
NewOrleans.addEventListener('click', function(){
    var lat = 29.951065;
    var lon = -90.071533;
    var getNewOrleans = fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' +lat+ '&lon=' +lon+ '&appid=efa45d9e21f5a963fd87caecdd3b2b02').then(function(res){
        return res.json();
    }).then(function(data) {
        console.log(data);
        var Textarea = document.querySelector('#text-area')
        var li = document.querySelector('li')
        var CityH3 = Textarea.querySelector('h2')
        var cityName = data.city.name;
        var temp = data.list[0].main.temp;
        var cel = temp- 273.15;
        var F = (cel * 1.8) +32;
        var li2 = document.querySelector('ul').children[1];
        var cond = data.list[0].weather[0].main;
        var icon = data.list[0].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/"+ icon + ".png";
        var iconimg =  document.querySelector("#icon");
        var li3 = document.querySelector("ul").children[2];
        var wind = data.list[0].wind.deg
        var winddir = '';
        var li4 = document.querySelector('ul').children[3];
        var humidity = data.list[0].main.humidity
        
            if(wind >= 337 || wind < 22){
                winddir = "N"
            }else if(wind >= 22.1 || wind < 67){
                winddir = "NE"
            }else if(wind >= 67.1 || wind < 112){
                winddir = "E"
            }else if(wind >= 112.1 || wind < 157){
                winddir = "SE"
            }else if(wind >= 157.1 || wind < 202){
                winddir = "S"
            }else if(wind >= 202.1 || wind < 247){
                winddir = "SW"
            }else if(wind >= 247.1 || wind < 292){
                winddir = "W"
            }else if(wind >= 292.1 || wind < 336.9){
                winddir = "NW"
            };
       

        iconimg.innerHTML = "<img src='" +iconurl + "'/>";
        li.textContent = Math.round(F)+' º';
        CityH3.textContent = cityName;
        li2.textContent = cond;
        li3.textContent = "wind direction: "+ winddir;
        li4.textContent = "humidity: " + humidity;
    })
})
SanFrancisco.addEventListener('click', function(){
    var lat = 37.7749;
    var lon = -122.4194;
    var getSanFrancisco = fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' +lat+ '&lon=' +lon+ '&appid=efa45d9e21f5a963fd87caecdd3b2b02').then(function(res){
        return res.json();
    }).then(function(data) {
        console.log(data);
        var Textarea = document.querySelector('#text-area')
        var li = document.querySelector('li')
        var CityH3 = Textarea.querySelector('h2')
        var cityName = data.city.name;
        var temp = data.list[0].main.temp;
        var cel = temp- 273.15;
        var F = (cel * 1.8) +32;
        var li2 = document.querySelector('ul').children[1];
        var cond = data.list[0].weather[0].main;
        var icon = data.list[0].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/"+ icon + ".png";
        var iconimg =  document.querySelector("#icon");
        var li3 = document.querySelector("ul").children[2];
        var wind = data.list[0].wind.deg
        var winddir = '';
        var li4 = document.querySelector('ul').children[3];
        var humidity = data.list[0].main.humidity
        
            if(wind >= 337 || wind < 22){
                winddir = "N"
            }else if(wind >= 22.1 || wind < 67){
                winddir = "NE"
            }else if(wind >= 67.1 || wind < 112){
                winddir = "E"
            }else if(wind >= 112.1 || wind < 157){
                winddir = "SE"
            }else if(wind >= 157.1 || wind < 202){
                winddir = "S"
            }else if(wind >= 202.1 || wind < 247){
                winddir = "SW"
            }else if(wind >= 247.1 || wind < 292){
                winddir = "W"
            }else if(wind >= 292.1 || wind < 336.9){
                winddir = "NW"
            };
       

        iconimg.innerHTML = "<img src='" +iconurl + "'/>";
        li.textContent = Math.round(F)+' º';
        CityH3.textContent = cityName;
        li2.textContent = cond;
        li3.textContent = "wind direction: "+ winddir;
        li4.textContent = "humidity: " + humidity;
    })
})

var data = fetch("https://api.openweathermap.org/data/2.5/forecast?lat=47.252876&lon=-122.444290&appid=efa45d9e21f5a963fd87caecdd3b2b02").then(function(res){
 return res.json(data)
}).then(function(data){

    // console.log(data)
});

  
