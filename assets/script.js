console.log("hello")


var Seattle = document.querySelector("#btnSeattle")
var Chicago = document.querySelector("#btnChicago")
var Denver = document.querySelector("#btnDenver")
var NewOrleans = document.querySelector("#btnNewOrleans")
var SanFransico = document.querySelector("#btnSanFransico")


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
        var li2 = document.querySelector('ul').children[1]
        var cond = data.list[0].weather[0].main;
        console.log(cond)

        li.textContent = Math.round(F)+' º';
        CityH3.textContent = cityName;
        li2.textContent = cond;
    })
})

var data = fetch("https://api.openweathermap.org/data/2.5/forecast?lat=47.252876&lon=-122.444290&appid=efa45d9e21f5a963fd87caecdd3b2b02").then(function(res){
 return res.json(data)
}).then(function(data){

    // console.log(data)
});

  
