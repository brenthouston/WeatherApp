console.log("hello")

var data = fetch("https://api.openweathermap.org/data/2.5/forecast?lat=47.252876&lon=-122.444290&appid=efa45d9e21f5a963fd87caecdd3b2b02").then(function(res){
 return res.json(data)
}).then(function(data)){

    console.log(data)
};

  
})