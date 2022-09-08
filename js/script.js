function GetInfor(){
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";
 
 // fetch weather api key
 fetch("http://api.openweathermap.org/data/2.5/forecast?q="+newName.value+"&appid=42322c7325fb1149d38536f24afb3767")
 .then(Response => Response.json())
 .then(data =>{
console.log(data.list)
    //get the min tempreture  values for each day)
    for(i=0;i<5;i++){
        document.getElementById("day" + (i+1)+"Min").innerHTML ="Min"+ Number(data.list[i].main.temp_min -294.08).toFixed(1)+"°";
    }
//get max tempretur value for the day
    for(i=0;i<5;i++){
        document.getElementById("day" + (i+1)+"Max").innerHTML ="Max"+ Number(data.list[i].main.temp_max -294.08).toFixed(1)+"°";
    }
    // get icons
    for(i=0;i<5;i++){
        document.getElementById("img" + (i+1)).src =" http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+"@2x.png";
    }
    console.log (data);
    cityName.value = ""
 })
}

function wetherScreen(){
    document.getElementById("cityInput").DefaultValue = "london";
    GetInfor();
}

const d = new Date();
const weekday =["sunday","monday","tuesday","wednesday","thursday","Friday","Saturday"];
// function to get the correct integer for the index of days array
function checkDay(day){

    if (day + d.getDay() >6){
        return checkDay +d.getDay()-7
    }
    else{
        return day +d.getDay()
    }
}

for (i=0;i<5;i++){
    document.getElementById("day" + (i+1)).innerHTML= weekday [checkDay(i)]; 
}