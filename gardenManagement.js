const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

//Temperature test 


if (temperature > 80){
    console.log("watering on")
}
else{
    console.group("watering off")
}

// light test
if(timeOfDay === "evening"||timeOfDay === "night"){
    console.log("Lights on")
}
else{
    console.log("Lights off")
}

// soil_moisture test 

while (soilMoisture < 40){
  console.log(soilMoisture)
  soilMoisture+=5;
}
console.log(soilMoisture)