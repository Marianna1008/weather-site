// Current date, weekday,and time
function currentDate(date){
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[date.getMonth()];
let day = date.getDate(); 
let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let weekday = weekdays[date.getDay()];
function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;}
let hours = addZero(date.getHours());
let minutes = addZero(date.getMinutes());
return `${month} ${day} ${weekday} ${hours}:${minutes}`;
}
let dateElement = document.querySelector("#selector-date");
let now = new Date(); 
dateElement.innerHTML = currentDate(now);


// Temperature farengate
function farengate (event){
event.preventDefault();
let temp = document.querySelector("#temperature-main");
temp.innerHTML = "77";
let tempfirst = document.querySelector("#temperature-first");
tempfirst.innerHTML = "84 °F";
let tempsecond = document.querySelector("#temperature-second");
tempsecond.innerHTML = "80 °F";
let tempthird = document.querySelector("#temperature-third");
tempthird.innerHTML = "75 °F";
let tempfourth = document.querySelector("#temperature-fourth");
tempfourth.innerHTML = "79 °F";
let tempfifth = document.querySelector("#temperature-fifth");
tempfifth.innerHTML = "82 °F";
}
let temperature = document.querySelector("#farengate");
temperature.addEventListener("click", farengate);


// Temperature celsius
function celsius (event){
event.preventDefault();
let temp = document.querySelector("#temperature-main");
temp.innerHTML = "25";
let tempfirst = document.querySelector("#temperature-first");
tempfirst.innerHTML = "29 °C";
let tempsecond = document.querySelector("#temperature-second");
tempsecond.innerHTML = "27 °C";
let tempthird = document.querySelector("#temperature-third");
tempthird.innerHTML = "24 °C";
let tempfourth = document.querySelector("#temperature-fourth");
tempfourth.innerHTML = "26 °C";
let tempfifth = document.querySelector("#temperature-fifth");
tempfifth.innerHTML = "28 °C";
}
let temperaturec = document.querySelector("#celsius");
temperaturec.addEventListener("click", celsius);




//First day of forecast
function currentDateFirst(dateFirst){
let monthsFirst = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let monthFirst = monthsFirst[dateFirst.getMonth()];
let dayFirst = dateFirst.getDate(); 
let weekdaysFirst = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let weekdayFirst = weekdaysFirst[dateFirst.getDay()];
return `${monthFirst} ${dayFirst} ${weekdayFirst}`;}
let dateElementFirst = document.querySelector("#selector-date-first");
let nowFirst = new Date();
nowFirst.setDate(nowFirst.getDate() + 1);
dateElementFirst.innerHTML = currentDateFirst(nowFirst);
//Second day of forecast
function currentDateSecond(dateSecond){
let monthsSecond = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let monthSecond = monthsSecond[dateSecond.getMonth()];
let daySecond = dateSecond.getDate(); 
let weekdaysSecond = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let weekdaySecond = weekdaysSecond[dateSecond.getDay()];
return `${monthSecond} ${daySecond} ${weekdaySecond}`;}
let dateElementSecond = document.querySelector("#selector-date-second");
let nowSecond = new Date();
nowSecond.setDate(nowSecond.getDate() + 2);
dateElementSecond.innerHTML = currentDateSecond(nowSecond);
//Third day of forecast
function currentDateThird(dateThird){
let monthsThird = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let monthThird = monthsThird[dateThird.getMonth()];
let dayThird = dateThird.getDate(); 
let weekdaysThird = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let weekdayThird = weekdaysThird[dateThird.getDay()];
return `${monthThird} ${dayThird} ${weekdayThird}`;}
let dateElementThird = document.querySelector("#selector-date-third");
let nowThird = new Date();
nowThird.setDate(nowThird.getDate() + 3);
dateElementThird.innerHTML = currentDateThird(nowThird);
//Fourth day of forecast
function currentDateFourth(dateFourth){
let monthsFourth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let monthFourth = monthsFourth[dateFourth.getMonth()];
let dayFourth = dateFourth.getDate(); 
let weekdaysFourth = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let weekdayFourth = weekdaysFourth[dateFourth.getDay()];
return `${monthFourth} ${dayFourth} ${weekdayFourth}`;}
let dateElementFourth = document.querySelector("#selector-date-fourth");
let nowFourth = new Date();
nowFourth.setDate(nowFourth.getDate() + 4);
dateElementFourth.innerHTML = currentDateFourth(nowFourth);
//Fifth day of forecast
function currentDateFifth(dateFifth){
let monthsFifth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let monthFifth = monthsFifth[dateFifth.getMonth()];
let dayFifth = dateFifth.getDate(); 
let weekdaysFifth = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let weekdayFifth = weekdaysFifth[dateFifth.getDay()];
return `${monthFifth} ${dayFifth} ${weekdayFifth}`;}
let dateElementFifth = document.querySelector("#selector-date-fifth");
let nowFifth = new Date();
nowFifth.setDate(nowFifth.getDate() + 5);
dateElementFifth.innerHTML = currentDateFifth(nowFifth);


function displayWeatherCondition (response){
document.querySelector("#selector-city").innerHTML=response.data.name;
document.querySelector("#temperature-main").innerHTML= Math.round(response.data.main.temp);
document.querySelector("#description-city").innerHTML= response.data.weather[0].description;
}
function search (event){
event.preventDefault();
let apiKey = "7518f0f6bd41461564c14628ba15ee3b";
let city = document.querySelector("#city").value; 
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7518f0f6bd41461564c14628ba15ee3b&units=imperial`;
axios.get(apiUrl).then(displayWeatherCondition);  
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener ("submit", search);

