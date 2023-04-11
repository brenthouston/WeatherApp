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
        var li = document.querySelector('#temp')
        var CityH3 = Textarea.querySelector('h2')
        var li2 = document.querySelector('#todaycond');
        var li3 = document.querySelector("#todayhum");
        var li4 = document.querySelector('#todaywdir');
        var li5 =document.querySelector('#todaywspd');
        var iconimg =  document.querySelector("#icon");
        var cityName = data.city.name;
        var temp = data.list[0].main.temp;
        var cel = temp- 273.15;
        var F = (cel * 1.8) +32;
        var cond = data.list[0].weather[0].description;
        var icon = data.list[0].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/"+ icon + ".png";
        var wind = data.list[0].wind.deg
        var winddir = '';
        var humidity = data.list[0].main.humidity
        var windspeed = data.list[0].wind.speed;
        
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
        li2.textContent ="conditions: " + cond;
        li3.textContent = "humidity: " + humidity + " %";
        li4.textContent = "wind direction: "+ winddir;
        li5.textContent = "wind: " +windspeed+" mph"


    //first day forecast
    //links to html
    var temph2 = document.querySelector('#temp1');
    var day1li1 = document.querySelector('#cond');
    var day1li2 = document.querySelector('#wind');
    var day1li3 = document.querySelector('#humid');
    //data pull for day1 of 5 day forecast
    var temp1 = data.list[10].main.temp;
    var cel1 = temp1- 273.15;
    var F1 = (cel1 * 1.8) +32;
    var cond1 = data.list[10].weather[0].description;
    var wind1 = data.list[10].wind.deg
        var winddir1 = '';
        if(wind1 >= 337 || wind1 < 22){
                winddir1 = "N"
            }else if(wind1 >= 22.1 || wind1 < 67){
                winddir1 = "NE"
            }else if(wind1 >= 67.1 || wind1 < 112){
                winddir1 = "E"
            }else if(wind1 >= 112.1 || wind1 < 157){
                winddir1 = "SE"
            }else if(wind1 >= 157.1 || wind1 < 202){
                winddir1 = "S"
            }else if(wind1 >= 202.1 || wind1 < 247){
                winddir1 = "SW"
            }else if(wind1 >= 247.1 || wind1 < 292){
                winddir1 = "W"
            }else if(wind1 >= 292.1 || wind1 < 336.9){
                winddir1 = "NW"
            };
    var humidity1 = data.list[10].main.humidity
    //place data in card 1
            temph2.textContent = Math.round(F1) +'º';
            day1li1.textContent = cond1;
            day1li2.textContent = "wind: " + winddir1;
            day1li3.textContent = "humidity: " + humidity1+"%";
           

            //second day forecast
    //links to html
    var temph3 = document.querySelector('#temp2');
    var day2li1 = document.querySelector('#cond1');
    var day2li2 = document.querySelector('#wind1');
    var day2li3 = document.querySelector('#humid1');
    //data pull for day1 of 5 day forecast
    var temp2 = data.list[18].main.temp;
    var cel2 = temp2- 273.15;
    var F2 = (cel2 * 1.8) +32;
    var cond2 = data.list[18].weather[0].description;
    var wind2 = data.list[18].wind.deg
        var winddir2 = '';
        if(wind2 >= 337 || wind2 < 22){
                winddir2 = "N"
            }else if(wind2 >= 22.1 || wind2 < 67){
                winddir2 = "NE"
            }else if(wind2 >= 67.1 || wind2 < 112){
                winddir2 = "E"
            }else if(wind2 >= 112.1 || wind2 < 157){
                winddir2 = "SE"
            }else if(wind2 >= 157.1 || wind2 < 202){
                winddir2 = "S"
            }else if(wind2 >= 202.1 || wind2 < 247){
                winddir2 = "SW"
            }else if(wind2 >= 247.1 || wind2 < 292){
                winddir2 = "W"
            }else if(wind2 >= 292.1 || wind2 < 336.9){
                winddir2 = "NW"
            };
    var humidity2 = data.list[18].main.humidity
    //place data in card 1
            temph3.textContent = Math.round(F2) +'º';
            day2li1.textContent = cond2;
            day2li2.textContent = "wind: " + winddir2;
            day2li3.textContent = "humidity: " + humidity2+"%";


                     //Third day forecast
    //links to html
    var temph4 = document.querySelector('#temp3');
    var day3li1 = document.querySelector('#cond2');
    var day3li2 = document.querySelector('#wind2');
    var day3li3 = document.querySelector('#humid2');
    //data pull for day1 of 5 day forecast
    var temp3 = data.list[26].main.temp;
    var cel3 = temp3- 273.15;
    var F3 = (cel3 * 1.8) +32;
    var cond3 = data.list[26].weather[0].description;
    var wind3 = data.list[26].wind.deg
        var winddir3 = '';
        if(wind3 >= 337 || wind3 < 22){
                winddir3 = "N"
            }else if(wind3 >= 22.1 || wind3 < 67){
                winddir3 = "NE"
            }else if(wind3 >= 67.1 || wind3 < 112){
                winddir3 = "E"
            }else if(wind3 >= 112.1 || wind3 < 157){
                winddir3 = "SE"
            }else if(wind3 >= 157.1 || wind3 < 202){
                winddir3 = "S"
            }else if(wind3 >= 202.1 || wind3 < 247){
                winddir3 = "SW"
            }else if(wind3 >= 247.1 || wind3 < 292){
                winddir3 = "W"
            }else if(wind3 >= 292.1 || wind3 < 336.9){
                winddir3 = "NW"
            };
    var humidity3 = data.list[26].main.humidity
    //place data in card 1
            temph4.textContent = Math.round(F3) +'º';
            day3li1.textContent = cond3;
            day3li2.textContent = "wind: " + winddir3;
            day3li3.textContent = "humidity: " + humidity3+"%";
           

                              //Fourth day forecast
    //links to html
    var temph5 = document.querySelector('#temp4');
    var day4li1 = document.querySelector('#cond3');
    var day4li2 = document.querySelector('#wind3');
    var day4li3 = document.querySelector('#humid3');
    //data pull for day1 of 5 day forecast
    var temp4 = data.list[33].main.temp;
    var cel4 = temp4- 273.15;
    var F4 = (cel4 * 1.8) +32;
    var cond4 = data.list[33].weather[0].description;
    var wind4 = data.list[33].wind.deg
        var winddir4 = '';
        if(wind4 >= 337 || wind4 < 22){
                winddir4 = "N"
            }else if(wind4 >= 22.1 || wind4 < 67){
                winddir4 = "NE"
            }else if(wind4 >= 67.1 || wind4 < 112){
                winddir4 = "E"
            }else if(wind4 >= 112.1 || wind4 < 157){
                winddir4 = "SE"
            }else if(wind4 >= 157.1 || wind4 < 202){
                winddir4 = "S"
            }else if(wind4 >= 202.1 || wind4 < 247){
                winddir4 = "SW"
            }else if(wind4 >= 247.1 || wind4 < 292){
                winddir4 = "W"
            }else if(wind4 >= 292.1 || wind4 < 336.9){
                winddir4 = "NW"
            };
    var humidity4 = data.list[33].main.humidity
    //place data in card 1
            temph5.textContent = Math.round(F4) +'º';
            day4li1.textContent = cond4;
            day4li2.textContent = "wind: " + winddir4;
            day4li3.textContent = "humidity: " + humidity4+"%";


                              //Fifth day forecast
    //links to html
    var temph5 = document.querySelector('#temp5');
    var day5li1 = document.querySelector('#cond4');
    var day5li2 = document.querySelector('#wind4');
    var day5li3 = document.querySelector('#humid4');
    //data pull for day1 of 5 day forecast
    var temp5 = data.list[39].main.temp;
    var cel5 = temp5- 273.15;
    var F5 = (cel5 * 1.8) +32;
    var cond5 = data.list[39].weather[0].description;
    var wind5 = data.list[39].wind.deg
        var winddir5 = '';
        if(wind5 >= 337 || wind5 < 22){
                winddir5 = "N"
            }else if(wind5 >= 22.1 || wind5 < 67){
                winddir5 = "NE"
            }else if(wind5 >= 67.1 || wind5 < 112){
                winddir5 = "E"
            }else if(wind5 >= 112.1 || wind5 < 157){
                winddir5 = "SE"
            }else if(wind5 >= 157.1 || wind5 < 202){
                winddir5 = "S"
            }else if(wind5 >= 202.1 || wind5 < 247){
                winddir5 = "SW"
            }else if(wind5 >= 247.1 || wind5 < 292){
                winddir5 = "W"
            }else if(wind5 >= 292.1 || wind5 < 336.9){
                winddir5 = "NW"
            };
    var humidity5 = data.list[39].main.humidity
    //place data in card 1
            temph5.textContent = Math.round(F5) +'º';
            day5li1.textContent = cond5;
            day5li2.textContent = "wind: " + winddir5;
            day5li3.textContent = "humidity: " + humidity5+"%";
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
        var cond = data.list[0].weather[0].description;
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
        li2.textContent ="conditions: "+  cond;
        li3.textContent = "wind direction: "+ winddir;
        li4.textContent = "humidity: " + humidity+"%";



    //first day forecast
    //links to html
    var temph2 = document.querySelector('#temp1');
    var day1li1 = document.querySelector('#cond');
    var day1li2 = document.querySelector('#wind');
    var day1li3 = document.querySelector('#humid');
    //data pull for day1 of 5 day forecast
    var temp1 = data.list[10].main.temp;
    var cel1 = temp1- 273.15;
    var F1 = (cel1 * 1.8) +32;
    var cond1 = data.list[10].weather[0].description;
    var wind1 = data.list[10].wind.deg
        var winddir1 = '';
        if(wind1 >= 337 || wind1 < 22){
                winddir1 = "N"
            }else if(wind1 >= 22.1 || wind1 < 67){
                winddir1 = "NE"
            }else if(wind1 >= 67.1 || wind1 < 112){
                winddir1 = "E"
            }else if(wind1 >= 112.1 || wind1 < 157){
                winddir1 = "SE"
            }else if(wind1 >= 157.1 || wind1 < 202){
                winddir1 = "S"
            }else if(wind1 >= 202.1 || wind1 < 247){
                winddir1 = "SW"
            }else if(wind1 >= 247.1 || wind1 < 292){
                winddir1 = "W"
            }else if(wind1 >= 292.1 || wind1 < 336.9){
                winddir1 = "NW"
            };
    var humidity = data.list[10].main.humidity
    //place data in card 1
            temph2.textContent = Math.round(F1) +'º';
            day1li1.textContent = cond1;
            day1li2.textContent = "wind: " + winddir1;
            day1li3.textContent = "humidity: " + humidity+"%";

                 //second day forecast
    //links to html
    var temph3 = document.querySelector('#temp2');
    var day2li1 = document.querySelector('#cond1');
    var day2li2 = document.querySelector('#wind1');
    var day2li3 = document.querySelector('#humid1');
    //data pull for day1 of 5 day forecast
    var temp2 = data.list[18].main.temp;
    var cel2 = temp2- 273.15;
    var F2 = (cel2 * 1.8) +32;
    var cond2 = data.list[18].weather[0].description;
    var wind2 = data.list[18].wind.deg
        var winddir2 = '';
        if(wind2 >= 337 || wind2 < 22){
                winddir2 = "N"
            }else if(wind2 >= 22.1 || wind2 < 67){
                winddir2 = "NE"
            }else if(wind2 >= 67.1 || wind2 < 112){
                winddir2 = "E"
            }else if(wind2 >= 112.1 || wind2 < 157){
                winddir2 = "SE"
            }else if(wind2 >= 157.1 || wind2 < 202){
                winddir2 = "S"
            }else if(wind2 >= 202.1 || wind2 < 247){
                winddir2 = "SW"
            }else if(wind2 >= 247.1 || wind2 < 292){
                winddir2 = "W"
            }else if(wind2 >= 292.1 || wind2 < 336.9){
                winddir2 = "NW"
            };
    var humidity2 = data.list[18].main.humidity
    //place data in card 1
            temph3.textContent = Math.round(F2) +'º';
            day2li1.textContent = cond2;
            day2li2.textContent = "wind: " + winddir2;
            day2li3.textContent = "humidity: " + humidity2+"%";


                     //Third day forecast
    //links to html
    var temph4 = document.querySelector('#temp3');
    var day3li1 = document.querySelector('#cond2');
    var day3li2 = document.querySelector('#wind2');
    var day3li3 = document.querySelector('#humid2');
    //data pull for day1 of 5 day forecast
    var temp3 = data.list[26].main.temp;
    var cel3 = temp3- 273.15;
    var F3 = (cel3 * 1.8) +32;
    var cond3 = data.list[26].weather[0].description;
    var wind3 = data.list[26].wind.deg
        var winddir3 = '';
        if(wind3 >= 337 || wind3 < 22){
                winddir3 = "N"
            }else if(wind3 >= 22.1 || wind3 < 67){
                winddir3 = "NE"
            }else if(wind3 >= 67.1 || wind3 < 112){
                winddir3 = "E"
            }else if(wind3 >= 112.1 || wind3 < 157){
                winddir3 = "SE"
            }else if(wind3 >= 157.1 || wind3 < 202){
                winddir3 = "S"
            }else if(wind3 >= 202.1 || wind3 < 247){
                winddir3 = "SW"
            }else if(wind3 >= 247.1 || wind3 < 292){
                winddir3 = "W"
            }else if(wind3 >= 292.1 || wind3 < 336.9){
                winddir3 = "NW"
            };
    var humidity3 = data.list[26].main.humidity
    //place data in card 1
            temph4.textContent = Math.round(F3) +'º';
            day3li1.textContent = cond3;
            day3li2.textContent = "wind: " + winddir3;
            day3li3.textContent = "humidity: " + humidity3+"%";
           

                              //Fourth day forecast
    //links to html
    var temph5 = document.querySelector('#temp4');
    var day4li1 = document.querySelector('#cond3');
    var day4li2 = document.querySelector('#wind3');
    var day4li3 = document.querySelector('#humid3');
    //data pull for day1 of 5 day forecast
    var temp4 = data.list[33].main.temp;
    var cel4 = temp4- 273.15;
    var F4 = (cel4 * 1.8) +32;
    var cond4 = data.list[33].weather[0].description;
    var wind4 = data.list[33].wind.deg
        var winddir4 = '';
        if(wind4 >= 337 || wind4 < 22){
                winddir4 = "N"
            }else if(wind4 >= 22.1 || wind4 < 67){
                winddir4 = "NE"
            }else if(wind4 >= 67.1 || wind4 < 112){
                winddir4 = "E"
            }else if(wind4 >= 112.1 || wind4 < 157){
                winddir4 = "SE"
            }else if(wind4 >= 157.1 || wind4 < 202){
                winddir4 = "S"
            }else if(wind4 >= 202.1 || wind4 < 247){
                winddir4 = "SW"
            }else if(wind4 >= 247.1 || wind4 < 292){
                winddir4 = "W"
            }else if(wind4 >= 292.1 || wind4 < 336.9){
                winddir4 = "NW"
            };
    var humidity4 = data.list[33].main.humidity
    //place data in card 1
            temph5.textContent = Math.round(F4) +'º';
            day4li1.textContent = cond4;
            day4li2.textContent = "wind: " + winddir4;
            day4li3.textContent = "humidity: " + humidity4+"%";


                              //Fifth day forecast
    //links to html
    var temph5 = document.querySelector('#temp5');
    var day5li1 = document.querySelector('#cond4');
    var day5li2 = document.querySelector('#wind4');
    var day5li3 = document.querySelector('#humid4');
    //data pull for day1 of 5 day forecast
    var temp5 = data.list[39].main.temp;
    var cel5 = temp5- 273.15;
    var F5 = (cel5 * 1.8) +32;
    var cond5 = data.list[39].weather[0].description;
    var wind5 = data.list[39].wind.deg
        var winddir5 = '';
        if(wind5 >= 337 || wind5 < 22){
                winddir5 = "N"
            }else if(wind5 >= 22.1 || wind5 < 67){
                winddir5 = "NE"
            }else if(wind5 >= 67.1 || wind5 < 112){
                winddir5 = "E"
            }else if(wind5 >= 112.1 || wind5 < 157){
                winddir5 = "SE"
            }else if(wind5 >= 157.1 || wind5 < 202){
                winddir5 = "S"
            }else if(wind5 >= 202.1 || wind5 < 247){
                winddir5 = "SW"
            }else if(wind5 >= 247.1 || wind5 < 292){
                winddir5 = "W"
            }else if(wind5 >= 292.1 || wind5 < 336.9){
                winddir5 = "NW"
            };
    var humidity5 = data.list[39].main.humidity
    //place data in card 1
            temph5.textContent = Math.round(F5) +'º';
            day5li1.textContent = cond5;
            day5li2.textContent = "wind: " + winddir5;
            day5li3.textContent = "humidity: " + humidity5+"%";
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
        var li = document.querySelector('#temp')
        var CityH3 = Textarea.querySelector('h2')
        var li2 = document.querySelector('#todaycond');
        var li3 = document.querySelector("#todayhum");
        var li4 = document.querySelector('#todaywdir');
        var li5 =document.querySelector('#todaywspd');
        var iconimg =  document.querySelector("#icon");
        var cityName = data.city.name;
        var temp = data.list[0].main.temp;
        var cel = temp- 273.15;
        var F = (cel * 1.8) +32;
        var cond = data.list[0].weather[0].description;
        var icon = data.list[0].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/"+ icon + ".png";
        var wind = data.list[0].wind.deg
        var winddir = '';
        var humidity = data.list[0].main.humidity
        var windspeed = data.list[0].wind.speed;
        
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
        li2.textContent ="conditions: " + cond;
        li3.textContent = "humidity: " + humidity + " %";
        li4.textContent = "wind direction: "+ winddir;
        li5.textContent = "wind: " +windspeed+" mph"


    //first day forecast
    //links to html
    var temph2 = document.querySelector('#temp1');
    var day1li1 = document.querySelector('#cond');
    var day1li2 = document.querySelector('#wind');
    var day1li3 = document.querySelector('#humid');
    //data pull for day1 of 5 day forecast
    var temp1 = data.list[10].main.temp;
    var cel1 = temp1- 273.15;
    var F1 = (cel1 * 1.8) +32;
    var cond1 = data.list[10].weather[0].description;
    var wind1 = data.list[10].wind.deg
        var winddir1 = '';
        if(wind1 >= 337 || wind1 < 22){
                winddir1 = "N"
            }else if(wind1 >= 22.1 || wind1 < 67){
                winddir1 = "NE"
            }else if(wind1 >= 67.1 || wind1 < 112){
                winddir1 = "E"
            }else if(wind1 >= 112.1 || wind1 < 157){
                winddir1 = "SE"
            }else if(wind1 >= 157.1 || wind1 < 202){
                winddir1 = "S"
            }else if(wind1 >= 202.1 || wind1 < 247){
                winddir1 = "SW"
            }else if(wind1 >= 247.1 || wind1 < 292){
                winddir1 = "W"
            }else if(wind1 >= 292.1 || wind1 < 336.9){
                winddir1 = "NW"
            };
    var humidity = data.list[10].main.humidity
    //place data in card 1
            temph2.textContent = Math.round(F1) +'º';
            day1li1.textContent = cond1;
            day1li2.textContent = "wind: " + winddir1;
            day1li3.textContent = "humidity: " + humidity+"%";

                 //second day forecast
    //links to html
    var temph3 = document.querySelector('#temp2');
    var day2li1 = document.querySelector('#cond1');
    var day2li2 = document.querySelector('#wind1');
    var day2li3 = document.querySelector('#humid1');
    //data pull for day1 of 5 day forecast
    var temp2 = data.list[18].main.temp;
    var cel2 = temp2- 273.15;
    var F2 = (cel2 * 1.8) +32;
    var cond2 = data.list[18].weather[0].description;
    var wind2 = data.list[18].wind.deg
        var winddir2 = '';
        if(wind2 >= 337 || wind2 < 22){
                winddir2 = "N"
            }else if(wind2 >= 22.1 || wind2 < 67){
                winddir2 = "NE"
            }else if(wind2 >= 67.1 || wind2 < 112){
                winddir2 = "E"
            }else if(wind2 >= 112.1 || wind2 < 157){
                winddir2 = "SE"
            }else if(wind2 >= 157.1 || wind2 < 202){
                winddir2 = "S"
            }else if(wind2 >= 202.1 || wind2 < 247){
                winddir2 = "SW"
            }else if(wind2 >= 247.1 || wind2 < 292){
                winddir2 = "W"
            }else if(wind2 >= 292.1 || wind2 < 336.9){
                winddir2 = "NW"
            };
    var humidity2 = data.list[18].main.humidity
    //place data in card 1
            temph3.textContent = Math.round(F2) +'º';
            day2li1.textContent = cond2;
            day2li2.textContent = "wind: " + winddir2;
            day2li3.textContent = "humidity: " + humidity2+"%";


                     //Third day forecast
    //links to html
    var temph4 = document.querySelector('#temp3');
    var day3li1 = document.querySelector('#cond2');
    var day3li2 = document.querySelector('#wind2');
    var day3li3 = document.querySelector('#humid2');
    //data pull for day1 of 5 day forecast
    var temp3 = data.list[26].main.temp;
    var cel3 = temp3- 273.15;
    var F3 = (cel3 * 1.8) +32;
    var cond3 = data.list[26].weather[0].description;
    var wind3 = data.list[26].wind.deg
        var winddir3 = '';
        if(wind3 >= 337 || wind3 < 22){
                winddir3 = "N"
            }else if(wind3 >= 22.1 || wind3 < 67){
                winddir3 = "NE"
            }else if(wind3 >= 67.1 || wind3 < 112){
                winddir3 = "E"
            }else if(wind3 >= 112.1 || wind3 < 157){
                winddir3 = "SE"
            }else if(wind3 >= 157.1 || wind3 < 202){
                winddir3 = "S"
            }else if(wind3 >= 202.1 || wind3 < 247){
                winddir3 = "SW"
            }else if(wind3 >= 247.1 || wind3 < 292){
                winddir3 = "W"
            }else if(wind3 >= 292.1 || wind3 < 336.9){
                winddir3 = "NW"
            };
    var humidity3 = data.list[26].main.humidity
    //place data in card 1
            temph4.textContent = Math.round(F3) +'º';
            day3li1.textContent = cond3;
            day3li2.textContent = "wind: " + winddir3;
            day3li3.textContent = "humidity: " + humidity3+"%";
           

                              //Fourth day forecast
    //links to html
    var temph5 = document.querySelector('#temp4');
    var day4li1 = document.querySelector('#cond3');
    var day4li2 = document.querySelector('#wind3');
    var day4li3 = document.querySelector('#humid3');
    //data pull for day1 of 5 day forecast
    var temp4 = data.list[33].main.temp;
    var cel4 = temp4- 273.15;
    var F4 = (cel4 * 1.8) +32;
    var cond4 = data.list[33].weather[0].description;
    var wind4 = data.list[33].wind.deg
        var winddir4 = '';
        if(wind4 >= 337 || wind4 < 22){
                winddir4 = "N"
            }else if(wind4 >= 22.1 || wind4 < 67){
                winddir4 = "NE"
            }else if(wind4 >= 67.1 || wind4 < 112){
                winddir4 = "E"
            }else if(wind4 >= 112.1 || wind4 < 157){
                winddir4 = "SE"
            }else if(wind4 >= 157.1 || wind4 < 202){
                winddir4 = "S"
            }else if(wind4 >= 202.1 || wind4 < 247){
                winddir4 = "SW"
            }else if(wind4 >= 247.1 || wind4 < 292){
                winddir4 = "W"
            }else if(wind4 >= 292.1 || wind4 < 336.9){
                winddir4 = "NW"
            };
    var humidity4 = data.list[33].main.humidity
    //place data in card 1
            temph5.textContent = Math.round(F4) +'º';
            day4li1.textContent = cond4;
            day4li2.textContent = "wind: " + winddir4;
            day4li3.textContent = "humidity: " + humidity4+"%";


                              //Fifth day forecast
    //links to html
    var temph5 = document.querySelector('#temp5');
    var day5li1 = document.querySelector('#cond4');
    var day5li2 = document.querySelector('#wind4');
    var day5li3 = document.querySelector('#humid4');
    //data pull for day1 of 5 day forecast
    var temp5 = data.list[39].main.temp;
    var cel5 = temp5- 273.15;
    var F5 = (cel5 * 1.8) +32;
    var cond5 = data.list[39].weather[0].description;
    var wind5 = data.list[39].wind.deg
        var winddir5 = '';
        if(wind5 >= 337 || wind5 < 22){
                winddir5 = "N"
            }else if(wind5 >= 22.1 || wind5 < 67){
                winddir5 = "NE"
            }else if(wind5 >= 67.1 || wind5 < 112){
                winddir5 = "E"
            }else if(wind5 >= 112.1 || wind5 < 157){
                winddir5 = "SE"
            }else if(wind5 >= 157.1 || wind5 < 202){
                winddir5 = "S"
            }else if(wind5 >= 202.1 || wind5 < 247){
                winddir5 = "SW"
            }else if(wind5 >= 247.1 || wind5 < 292){
                winddir5 = "W"
            }else if(wind5 >= 292.1 || wind5 < 336.9){
                winddir5 = "NW"
            };
    var humidity5 = data.list[39].main.humidity
    //place data in card 1
            temph5.textContent = Math.round(F5) +'º';
            day5li1.textContent = cond5;
            day5li2.textContent = "wind: " + winddir5;
            day5li3.textContent = "humidity: " + humidity5+"%";
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
        var li = document.querySelector('#temp')
        var CityH3 = Textarea.querySelector('h2')
        var li2 = document.querySelector('#todaycond');
        var li3 = document.querySelector("#todayhum");
        var li4 = document.querySelector('#todaywdir');
        var li5 =document.querySelector('#todaywspd');
        var iconimg =  document.querySelector("#icon");
        var cityName = data.city.name;
        var temp = data.list[0].main.temp;
        var cel = temp- 273.15;
        var F = (cel * 1.8) +32;
        var cond = data.list[0].weather[0].description;
        var icon = data.list[0].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/"+ icon + ".png";
        var wind = data.list[0].wind.deg
        var winddir = '';
        var humidity = data.list[0].main.humidity
        var windspeed = data.list[0].wind.speed;
        
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
        li2.textContent ="conditions: " + cond;
        li3.textContent = "humidity: " + humidity + " %";
        li4.textContent = "wind direction: "+ winddir;
        li5.textContent = "wind: " +windspeed+" mph"



    //first day forecast
    //links to html
    var temph2 = document.querySelector('#temp1');
    var day1li1 = document.querySelector('#cond');
    var day1li2 = document.querySelector('#wind');
    var day1li3 = document.querySelector('#humid');
    //data pull for day1 of 5 day forecast
    var temp1 = data.list[10].main.temp;
    var cel1 = temp1- 273.15;
    var F1 = (cel1 * 1.8) +32;
    var cond1 = data.list[10].weather[0].description;
    var wind1 = data.list[10].wind.deg
        var winddir1 = '';
        if(wind1 >= 337 || wind1 < 22){
                winddir1 = "N"
            }else if(wind1 >= 22.1 || wind1 < 67){
                winddir1 = "NE"
            }else if(wind1 >= 67.1 || wind1 < 112){
                winddir1 = "E"
            }else if(wind1 >= 112.1 || wind1 < 157){
                winddir1 = "SE"
            }else if(wind1 >= 157.1 || wind1 < 202){
                winddir1 = "S"
            }else if(wind1 >= 202.1 || wind1 < 247){
                winddir1 = "SW"
            }else if(wind1 >= 247.1 || wind1 < 292){
                winddir1 = "W"
            }else if(wind1 >= 292.1 || wind1 < 336.9){
                winddir1 = "NW"
            };
    var humidity = data.list[10].main.humidity
    //place data in card 1
            temph2.textContent = Math.round(F1) +'º';
            day1li1.textContent = cond1;
            day1li2.textContent = "wind: " + winddir1;
            day1li3.textContent = "humidity: " + humidity+"%";

                 //second day forecast
    //links to html
    var temph3 = document.querySelector('#temp2');
    var day2li1 = document.querySelector('#cond1');
    var day2li2 = document.querySelector('#wind1');
    var day2li3 = document.querySelector('#humid1');
    //data pull for day1 of 5 day forecast
    var temp2 = data.list[18].main.temp;
    var cel2 = temp2- 273.15;
    var F2 = (cel2 * 1.8) +32;
    var cond2 = data.list[18].weather[0].description;
    var wind2 = data.list[18].wind.deg
        var winddir2 = '';
        if(wind2 >= 337 || wind2 < 22){
                winddir2 = "N"
            }else if(wind2 >= 22.1 || wind2 < 67){
                winddir2 = "NE"
            }else if(wind2 >= 67.1 || wind2 < 112){
                winddir2 = "E"
            }else if(wind2 >= 112.1 || wind2 < 157){
                winddir2 = "SE"
            }else if(wind2 >= 157.1 || wind2 < 202){
                winddir2 = "S"
            }else if(wind2 >= 202.1 || wind2 < 247){
                winddir2 = "SW"
            }else if(wind2 >= 247.1 || wind2 < 292){
                winddir2 = "W"
            }else if(wind2 >= 292.1 || wind2 < 336.9){
                winddir2 = "NW"
            };
    var humidity2 = data.list[18].main.humidity
    //place data in card 1
            temph3.textContent = Math.round(F2) +'º';
            day2li1.textContent = cond2;
            day2li2.textContent = "wind: " + winddir2;
            day2li3.textContent = "humidity: " + humidity2+"%";


                     //Third day forecast
    //links to html
    var temph4 = document.querySelector('#temp3');
    var day3li1 = document.querySelector('#cond2');
    var day3li2 = document.querySelector('#wind2');
    var day3li3 = document.querySelector('#humid2');
    //data pull for day1 of 5 day forecast
    var temp3 = data.list[26].main.temp;
    var cel3 = temp3- 273.15;
    var F3 = (cel3 * 1.8) +32;
    var cond3 = data.list[26].weather[0].description;
    var wind3 = data.list[26].wind.deg
        var winddir3 = '';
        if(wind3 >= 337 || wind3 < 22){
                winddir3 = "N"
            }else if(wind3 >= 22.1 || wind3 < 67){
                winddir3 = "NE"
            }else if(wind3 >= 67.1 || wind3 < 112){
                winddir3 = "E"
            }else if(wind3 >= 112.1 || wind3 < 157){
                winddir3 = "SE"
            }else if(wind3 >= 157.1 || wind3 < 202){
                winddir3 = "S"
            }else if(wind3 >= 202.1 || wind3 < 247){
                winddir3 = "SW"
            }else if(wind3 >= 247.1 || wind3 < 292){
                winddir3 = "W"
            }else if(wind3 >= 292.1 || wind3 < 336.9){
                winddir3 = "NW"
            };
    var humidity3 = data.list[26].main.humidity
    //place data in card 1
            temph4.textContent = Math.round(F3) +'º';
            day3li1.textContent = cond3;
            day3li2.textContent = "wind: " + winddir3;
            day3li3.textContent = "humidity: " + humidity3+"%";
           

                              //Fourth day forecast
    //links to html
    var temph5 = document.querySelector('#temp4');
    var day4li1 = document.querySelector('#cond3');
    var day4li2 = document.querySelector('#wind3');
    var day4li3 = document.querySelector('#humid3');
    //data pull for day1 of 5 day forecast
    var temp4 = data.list[33].main.temp;
    var cel4 = temp4- 273.15;
    var F4 = (cel4 * 1.8) +32;
    var cond4 = data.list[33].weather[0].description;
    var wind4 = data.list[33].wind.deg
        var winddir4 = '';
        if(wind4 >= 337 || wind4 < 22){
                winddir4 = "N"
            }else if(wind4 >= 22.1 || wind4 < 67){
                winddir4 = "NE"
            }else if(wind4 >= 67.1 || wind4 < 112){
                winddir4 = "E"
            }else if(wind4 >= 112.1 || wind4 < 157){
                winddir4 = "SE"
            }else if(wind4 >= 157.1 || wind4 < 202){
                winddir4 = "S"
            }else if(wind4 >= 202.1 || wind4 < 247){
                winddir4 = "SW"
            }else if(wind4 >= 247.1 || wind4 < 292){
                winddir4 = "W"
            }else if(wind4 >= 292.1 || wind4 < 336.9){
                winddir4 = "NW"
            };
    var humidity4 = data.list[33].main.humidity
    //place data in card 1
            temph5.textContent = Math.round(F4) +'º';
            day4li1.textContent = cond4;
            day4li2.textContent = "wind: " + winddir4;
            day4li3.textContent = "humidity: " + humidity4+"%";


                              //Fifth day forecast
    //links to html
    var temph5 = document.querySelector('#temp5');
    var day5li1 = document.querySelector('#cond4');
    var day5li2 = document.querySelector('#wind4');
    var day5li3 = document.querySelector('#humid4');
    //data pull for day1 of 5 day forecast
    var temp5 = data.list[39].main.temp;
    var cel5 = temp5- 273.15;
    var F5 = (cel5 * 1.8) +32;
    var cond5 = data.list[39].weather[0].description;
    var wind5 = data.list[39].wind.deg
        var winddir5 = '';
        if(wind5 >= 337 || wind5 < 22){
                winddir5 = "N"
            }else if(wind5 >= 22.1 || wind5 < 67){
                winddir5 = "NE"
            }else if(wind5 >= 67.1 || wind5 < 112){
                winddir5 = "E"
            }else if(wind5 >= 112.1 || wind5 < 157){
                winddir5 = "SE"
            }else if(wind5 >= 157.1 || wind5 < 202){
                winddir5 = "S"
            }else if(wind5 >= 202.1 || wind5 < 247){
                winddir5 = "SW"
            }else if(wind5 >= 247.1 || wind5 < 292){
                winddir5 = "W"
            }else if(wind5 >= 292.1 || wind5 < 336.9){
                winddir5 = "NW"
            };
    var humidity5 = data.list[39].main.humidity
    //place data in card 1
            temph5.textContent = Math.round(F5) +'º';
            day5li1.textContent = cond5;
            day5li2.textContent = "wind: " + winddir5;
            day5li3.textContent = "humidity: " + humidity5+"%";
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
        var li = document.querySelector('#temp')
        var CityH3 = Textarea.querySelector('h2')
        var li2 = document.querySelector('#todaycond');
        var li3 = document.querySelector("#todayhum");
        var li4 = document.querySelector('#todaywdir');
        var li5 =document.querySelector('#todaywspd');
        var iconimg =  document.querySelector("#icon");
        var cityName = data.city.name;
        var temp = data.list[0].main.temp;
        var cel = temp- 273.15;
        var F = (cel * 1.8) +32;
        var cond = data.list[0].weather[0].description;
        var icon = data.list[0].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/"+ icon + ".png";
        var wind = data.list[0].wind.deg
        var winddir = '';
        var humidity = data.list[0].main.humidity
        var windspeed = data.list[0].wind.speed;
        
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
        li2.textContent ="conditions: " + cond;
        li3.textContent = "humidity: " + humidity + " %";
        li4.textContent = "wind direction: "+ winddir;
        li5.textContent = "wind: " +windspeed+" mph"


    //first day forecast
    //links to html
    var temph2 = document.querySelector('#temp1');
    var day1li1 = document.querySelector('#cond');
    var day1li2 = document.querySelector('#wind');
    var day1li3 = document.querySelector('#humid');
    //data pull for day1 of 5 day forecast
    var temp1 = data.list[10].main.temp;
    var cel1 = temp1- 273.15;
    var F1 = (cel1 * 1.8) +32;
    var cond1 = data.list[10].weather[0].description;
    var wind1 = data.list[10].wind.deg
        var winddir1 = '';
        if(wind1 >= 337 || wind1 < 22){
                winddir1 = "N"
            }else if(wind1 >= 22.1 || wind1 < 67){
                winddir1 = "NE"
            }else if(wind1 >= 67.1 || wind1 < 112){
                winddir1 = "E"
            }else if(wind1 >= 112.1 || wind1 < 157){
                winddir1 = "SE"
            }else if(wind1 >= 157.1 || wind1 < 202){
                winddir1 = "S"
            }else if(wind1 >= 202.1 || wind1 < 247){
                winddir1 = "SW"
            }else if(wind1 >= 247.1 || wind1 < 292){
                winddir1 = "W"
            }else if(wind1 >= 292.1 || wind1 < 336.9){
                winddir1 = "NW"
            };
    var humidity = data.list[10].main.humidity
    //place data in card 1
            temph2.textContent = Math.round(F1) +'º';
            day1li1.textContent = cond1;
            day1li2.textContent = "wind: " + winddir1;
            day1li3.textContent = "humidity: " + humidity+ "%";

                 //second day forecast
    //links to html
    var temph3 = document.querySelector('#temp2');
    var day2li1 = document.querySelector('#cond1');
    var day2li2 = document.querySelector('#wind1');
    var day2li3 = document.querySelector('#humid1');
    //data pull for day1 of 5 day forecast
    var temp2 = data.list[18].main.temp;
    var cel2 = temp2- 273.15;
    var F2 = (cel2 * 1.8) +32;
    var cond2 = data.list[18].weather[0].description;
    var wind2 = data.list[18].wind.deg
        var winddir2 = '';
        if(wind2 >= 337 || wind2 < 22){
                winddir2 = "N"
            }else if(wind2 >= 22.1 || wind2 < 67){
                winddir2 = "NE"
            }else if(wind2 >= 67.1 || wind2 < 112){
                winddir2 = "E"
            }else if(wind2 >= 112.1 || wind2 < 157){
                winddir2 = "SE"
            }else if(wind2 >= 157.1 || wind2 < 202){
                winddir2 = "S"
            }else if(wind2 >= 202.1 || wind2 < 247){
                winddir2 = "SW"
            }else if(wind2 >= 247.1 || wind2 < 292){
                winddir2 = "W"
            }else if(wind2 >= 292.1 || wind2 < 336.9){
                winddir2 = "NW"
            };
    var humidity2 = data.list[18].main.humidity
    //place data in card 1
            temph3.textContent = Math.round(F2) +'º';
            day2li1.textContent = cond2;
            day2li2.textContent = "wind: " + winddir2;
            day2li3.textContent = "humidity: " + humidity2 +"%";


                     //Third day forecast
    //links to html
    var temph4 = document.querySelector('#temp3');
    var day3li1 = document.querySelector('#cond2');
    var day3li2 = document.querySelector('#wind2');
    var day3li3 = document.querySelector('#humid2');
    //data pull for day1 of 5 day forecast
    var temp3 = data.list[26].main.temp;
    var cel3 = temp3- 273.15;
    var F3 = (cel3 * 1.8) +32;
    var cond3 = data.list[26].weather[0].description;
    var wind3 = data.list[26].wind.deg
        var winddir3 = '';
        if(wind3 >= 337 || wind3 < 22){
                winddir3 = "N"
            }else if(wind3 >= 22.1 || wind3 < 67){
                winddir3 = "NE"
            }else if(wind3 >= 67.1 || wind3 < 112){
                winddir3 = "E"
            }else if(wind3 >= 112.1 || wind3 < 157){
                winddir3 = "SE"
            }else if(wind3 >= 157.1 || wind3 < 202){
                winddir3 = "S"
            }else if(wind3 >= 202.1 || wind3 < 247){
                winddir3 = "SW"
            }else if(wind3 >= 247.1 || wind3 < 292){
                winddir3 = "W"
            }else if(wind3 >= 292.1 || wind3 < 336.9){
                winddir3 = "NW"
            };
    var humidity3 = data.list[26].main.humidity
    //place data in card 1
            temph4.textContent = Math.round(F3) +'º';
            day3li1.textContent = cond3;
            day3li2.textContent = "wind: " + winddir3;
            day3li3.textContent = "humidity: " + humidity3+ "%";
           

                              //Fourth day forecast
    //links to html
    var temph5 = document.querySelector('#temp4');
    var day4li1 = document.querySelector('#cond3');
    var day4li2 = document.querySelector('#wind3');
    var day4li3 = document.querySelector('#humid3');
    //data pull for day1 of 5 day forecast
    var temp4 = data.list[33].main.temp;
    var cel4 = temp4- 273.15;
    var F4 = (cel4 * 1.8) +32;
    var cond4 = data.list[33].weather[0].description;
    var wind4 = data.list[33].wind.deg
        var winddir4 = '';
        if(wind4 >= 337 || wind4 < 22){
                winddir4 = "N"
            }else if(wind4 >= 22.1 || wind4 < 67){
                winddir4 = "NE"
            }else if(wind4 >= 67.1 || wind4 < 112){
                winddir4 = "E"
            }else if(wind4 >= 112.1 || wind4 < 157){
                winddir4 = "SE"
            }else if(wind4 >= 157.1 || wind4 < 202){
                winddir4 = "S"
            }else if(wind4 >= 202.1 || wind4 < 247){
                winddir4 = "SW"
            }else if(wind4 >= 247.1 || wind4 < 292){
                winddir4 = "W"
            }else if(wind4 >= 292.1 || wind4 < 336.9){
                winddir4 = "NW"
            };
    var humidity4 = data.list[33].main.humidity
    //place data in card 1
            temph5.textContent = Math.round(F4) +'º';
            day4li1.textContent = cond4;
            day4li2.textContent = "wind: " + winddir4;
            day4li3.textContent = "humidity: " + humidity4+ "%";


                              //Fifth day forecast
    //links to html
    var temph5 = document.querySelector('#temp5');
    var day5li1 = document.querySelector('#cond4');
    var day5li2 = document.querySelector('#wind4');
    var day5li3 = document.querySelector('#humid4');
    //data pull for day1 of 5 day forecast
    var temp5 = data.list[39].main.temp;
    var cel5 = temp5- 273.15;
    var F5 = (cel5 * 1.8) +32;
    var cond5 = data.list[39].weather[0].description;
    var wind5 = data.list[39].wind.deg
        var winddir5 = '';
        if(wind5 >= 337 || wind5 < 22){
                winddir5 = "N"
            }else if(wind5 >= 22.1 || wind5 < 67){
                winddir5 = "NE"
            }else if(wind5 >= 67.1 || wind5 < 112){
                winddir5 = "E"
            }else if(wind5 >= 112.1 || wind5 < 157){
                winddir5 = "SE"
            }else if(wind5 >= 157.1 || wind5 < 202){
                winddir5 = "S"
            }else if(wind5 >= 202.1 || wind5 < 247){
                winddir5 = "SW"
            }else if(wind5 >= 247.1 || wind5 < 292){
                winddir5 = "W"
            }else if(wind5 >= 292.1 || wind5 < 336.9){
                winddir5 = "NW"
            };
    var humidity5 = data.list[39].main.humidity
    //place data in card 1
            temph5.textContent = Math.round(F5) +'º';
            day5li1.textContent = cond5;
            day5li2.textContent = "wind: " + winddir5;
            day5li3.textContent = "humidity: " + humidity5+"%";
    })
})




// Search Button
var searchBtn = document.querySelector('#search')

searchBtn.addEventListener('click', function(){
var searchVal = searchBtn.value;
if (searchVal != ''){
    longLat = getApi(searchVal)
}

});



function getApi(cityName){fetch('http://api.openweathermap.org/geo/1.0/direct?q='+cityName+'&limit-1&appid-efa45d9e21f5a963fd87caecdd3b2b02').then(function(res){
 return res.json(data)
}).then(function(data){
    var lati = data[0].lat;
    var long = data[0].lon;
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' +lati+ '&lon=' +long+ '&appid=efa45d9e21f5a963fd87caecdd3b2b02')
     console.log(data)
});
}
  
