/*--------------------------adding to table Letovy dennik------------------------------*/

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");
let inputSumm = input1 + input2;

function inputFunction() {
    let input1 = document.getElementById("input1").value; 
    document.getElementById("output").innerHTML = input1;  
}                    

let table = document.getElementById("myTable");
let data1 = [];
let data2 = [];
let data3 = [];
let data4 = [];
let data5 = [];

function addRow() {
    
    let row = table.insertRow(-1);
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);
    c1.innerText = input1.value
    c2.innerText = input2.value
    c3.innerText = input3.value
    c4.innerText = input4.value
    c5.innerText = input5.value
    data1 = input1.value;
    data2 = input2.value;
    data3 = input3.value;
    data4 = input4.value;
    data5 = input5.value;  
}


/*--------------------------Weather forecast---------------------------------------------------------------------------------*/
let table1 = document.getElementById("table1");
let table2 = document.getElementById("table2");

let changeLoc = document.getElementById("changeLoc");
let changeDay = document.getElementById("changeDay");

   table1.style.display = "none";
  

//wind speed 500m = 950Hpa today
//today
let WS50008 = document.getElementById("WS50008");
let WS50010 = document.getElementById("WS50010");
let WS50011 = document.getElementById("WS50011");
let WS50012 = document.getElementById("WS50012");
let WS50013 = document.getElementById("WS50013");
let WS50014 = document.getElementById("WS50014");
let WS50015 = document.getElementById("WS50015");
let WS50016 = document.getElementById("WS50016");
let WS50017 = document.getElementById("WS50017");
let WS50018 = document.getElementById("WS50018");
let WS50019 = document.getElementById("WS50019");
let WS50020 = document.getElementById("WS50020");
//tommorow 500m
let WS50033 = $("#WS50033");
let WS50034 = $("#WS50034");
let WS50035 = $("#WS50035");
let WS50036 = $("#WS50036");
let WS50037 = $("#WS50037");
let WS50038 = $("#WS50038");
let WS50039 = $("#WS50039");
let WS50040 = $("#WS50040");
let WS50041 = $("#WS50041");
let WS50042 = $("#WS50042");
let WS50043 = $("#WS50043");
let WS50044 = $("#WS50044");
//wind speed 800m = 925Hpa
//today
let WS80008 = document.getElementById("WS80008");
let WS80010 = document.getElementById("WS80010");
let WS80011 = document.getElementById("WS80011");
let WS80012 = document.getElementById("WS80012");
let WS80013 = document.getElementById("WS80013");
let WS80014 = document.getElementById("WS80014");
let WS80015 = document.getElementById("WS80015");
let WS80016 = document.getElementById("WS80016");
let WS80017 = document.getElementById("WS80017");
let WS80018 = document.getElementById("WS80018");
let WS80019 = document.getElementById("WS80019");
let WS80020 = document.getElementById("WS80020");
//tommorow 800m
let WS80033 = $("#WS80033");
let WS80034 = $("#WS80034");
let WS80035 = $("#WS80035");
let WS80036 = $("#WS80036");
let WS80037 = $("#WS80037");
let WS80038 = $("#WS80038");
let WS80039 = $("#WS80039");
let WS80040 = $("#WS80040");
let WS80041 = $("#WS80041");
let WS80042 = $("#WS80042");
let WS80043 = $("#WS80043");
let WS80044 = $("#WS80044");
//wind speed 1000m = 900Hpa
//today
let WS100008 = document.getElementById("WS100008");
let WS100010 = document.getElementById("WS100010");
let WS100011 = document.getElementById("WS100011");
let WS100012 = document.getElementById("WS100012");
let WS100013 = document.getElementById("WS100013");
let WS100014 = document.getElementById("WS100014");
let WS100015 = document.getElementById("WS100015");
let WS100016 = document.getElementById("WS100016");
let WS100017 = document.getElementById("WS100017");
let WS100018 = document.getElementById("WS100018");
let WS100019 = document.getElementById("WS100019");
let WS100020 = document.getElementById("WS100020");
//tommorow 1000m
let WS100033 = $("#WS100033");
let WS100034 = $("#WS100034");
let WS100035 = $("#WS100035");
let WS100036 = $("#WS100036");
let WS100037 = $("#WS100037");
let WS100038 = $("#WS100038");
let WS100039 = $("#WS100039");
let WS100040 = $("#WS100040");
let WS100041 = $("#WS100041");
let WS100042 = $("#WS100042");
let WS100043 = $("#WS100043");
let WS100044 = $("#WS100044");
//wind speed 1500m = 850Hpa
//today
let WS150008 = document.getElementById("WS150008");
let WS150010 = document.getElementById("WS150010");
let WS150011 = document.getElementById("WS150011");
let WS150012 = document.getElementById("WS150012");
let WS150013 = document.getElementById("WS150013");
let WS150014 = document.getElementById("WS150014");
let WS150015 = document.getElementById("WS150015");
let WS150016 = document.getElementById("WS150016");
let WS150017 = document.getElementById("WS150017");
let WS150018 = document.getElementById("WS150018");
let WS150019 = document.getElementById("WS150019");
let WS150020 = document.getElementById("WS150020");
//tommorow 1500m
let WS150033 = $("#WS150033");
let WS150034 = $("#WS150034");
let WS150035 = $("#WS150035");
let WS150036 = $("#WS150036");
let WS150037 = $("#WS150037");
let WS150038 = $("#WS150038");
let WS150039 = $("#WS150039");
let WS150040 = $("#WS150040");
let WS150041 = $("#WS150041");
let WS150042 = $("#WS150042");
let WS150043 = $("#WS150043");
let WS150044 = $("#WS150044");
//wind speed 1900m = 800Hpa
//today
let WS190008 = document.getElementById("WS190008");
let WS190010 = document.getElementById("WS190010");
let WS190011 = document.getElementById("WS190011");
let WS190012 = document.getElementById("WS190012");
let WS190013 = document.getElementById("WS190013");
let WS190014 = document.getElementById("WS190014");
let WS190015 = document.getElementById("WS190015");
let WS190016 = document.getElementById("WS190016");
let WS190017 = document.getElementById("WS190017");
let WS190018 = document.getElementById("WS190018");
let WS190019 = document.getElementById("WS190019");
let WS190020 = document.getElementById("WS190020");
//tommorow 1900m
let WS190033 = $("#WS190033");
let WS190034 = $("#WS190034");
let WS190035 = $("#WS190035");
let WS190036 = $("#WS190036");
let WS190037 = $("#WS190037");
let WS190038 = $("#WS190038");
let WS190039 = $("#WS190039");
let WS190040 = $("#WS190040");
let WS190041 = $("#WS190041");
let WS190042 = $("#WS190042");
let WS190043 = $("#WS190043");
let WS190044 = $("#WS190044");

//wind direction 500m = 950Hpa
//today
let WD50008 = document.getElementById("WD50008");
let WD50010 = document.getElementById("WD50010");
let WD50011 = document.getElementById("WD50011");
let WD50012 = document.getElementById("WD50012");
let WD50013 = document.getElementById("WD50013");
let WD50014 = document.getElementById("WD50014");
let WD50015 = document.getElementById("WD50015");
let WD50016 = document.getElementById("WD50016");
let WD50017 = document.getElementById("WD50017");
let WD50018 = document.getElementById("WD50018");
let WD50019 = document.getElementById("WD50019");
let WD50020 = document.getElementById("WD50020");
//tommorow 500m
let WD50033 = $("#WD50033");
let WD50034 = $("#WD50034");
let WD50035 = $("#WD50035");
let WD50036 = $("#WD50036");
let WD50037 = $("#WD50037");
let WD50038 = $("#WD50038");
let WD50039 = $("#WD50039");
let WD50040 = $("#WD50040");
let WD50041 = $("#WD50041");
let WD50042 = $("#WD50042");
let WD50043 = $("#WD50043");
let WD50044 = $("#WD50044");
//wind direction 800m = 925Hpa
let WD80008 = document.getElementById("WD80008");
let WD80010 = document.getElementById("WD80010");
let WD80011 = document.getElementById("WD80011");
let WD80012 = document.getElementById("WD80012");
let WD80013 = document.getElementById("WD80013");
let WD80014 = document.getElementById("WD80014");
let WD80015 = document.getElementById("WD80015");
let WD80016 = document.getElementById("WD80016");
let WD80017 = document.getElementById("WD80017");
let WD80018 = document.getElementById("WD80018");
let WD80019 = document.getElementById("WD80019");
let WD80020 = document.getElementById("WD80020");
//low clouds
//let lClouds09 = document.getElementById("lClouds09")
//tommorow 800m
let WD80033 = $("#WD80033");
let WD80034 = $("#WD80034");
let WD80035 = $("#WD80035");
let WD80036 = $("#WD80036");
let WD80037 = $("#WD80037");
let WD80038 = $("#WD80038");
let WD80039 = $("#WD80039");
let WD80040 = $("#WD80040");
let WD80041 = $("#WD80041");
let WD80042 = $("#WD80042");
let WD80043 = $("#WD80043");
let WD80044 = $("#WD80044");
//wind direction 1000m = 900Hpa
let WD100008 = document.getElementById("WD100008");
let WD100010 = document.getElementById("WD100010");
let WD100011 = document.getElementById("WD100011");
let WD100012 = document.getElementById("WD100012");
let WD100013 = document.getElementById("WD100013");
let WD100014 = document.getElementById("WD100014");
let WD100015 = document.getElementById("WD100015");
let WD100016 = document.getElementById("WD100016");
let WD100017 = document.getElementById("WD100017");
let WD100018 = document.getElementById("WD100018");
let WD100019 = document.getElementById("WD100019");
let WD100020 = document.getElementById("WD100020");
//tommorow 1000m
let WD100033 = $("#WD100033");
let WD100034 = $("#WD100034");
let WD100035 = $("#WD100035");
let WD100036 = $("#WD100036");
let WD100037 = $("#WD100037");
let WD100038 = $("#WD100038");
let WD100039 = $("#WD100039");
let WD100040 = $("#WD100040");
let WD100041 = $("#WD100041");
let WD100042 = $("#WD100042");
let WD100043 = $("#WD100043");
let WD100044 = $("#WD100044");
//wind direction 1500m = 850Hpa
let WD150008 = document.getElementById("WD150008");
let WD150010 = document.getElementById("WD150010");
let WD150011 = document.getElementById("WD150011");
let WD150012 = document.getElementById("WD150012");
let WD150013 = document.getElementById("WD150013");
let WD150014 = document.getElementById("WD150014");
let WD150015 = document.getElementById("WD150015");
let WD150016 = document.getElementById("WD150016");
let WD150017 = document.getElementById("WD150017");
let WD150018 = document.getElementById("WD150018");
let WD150019 = document.getElementById("WD150019");
let WD150020 = document.getElementById("WD150020");
//tommorow 1500m
let WD150033 = $("#WD150033");
let WD150034 = $("#WD150034");
let WD150035 = $("#WD150035");
let WD150036 = $("#WD150036");
let WD150037 = $("#WD150037");
let WD150038 = $("#WD150038");
let WD150039 = $("#WD150039");
let WD150040 = $("#WD150040");
let WD150041 = $("#WD150041");
let WD150042 = $("#WD150042");
let WD150043 = $("#WD150043");
let WD150044 = $("#WD150044");
//wind direction 1900m = 850Hpa
let WD190008 = document.getElementById("WD190008");
let WD190010 = document.getElementById("WD190010");
let WD190011 = document.getElementById("WD190011");
let WD190012 = document.getElementById("WD190012");
let WD190013 = document.getElementById("WD190013");
let WD190014 = document.getElementById("WD190014");
let WD190015 = document.getElementById("WD190015");
let WD190016 = document.getElementById("WD190016");
let WD190017 = document.getElementById("WD190017");
let WD190018 = document.getElementById("WD190018");
let WD190019 = document.getElementById("WD190019");
let WD190020 = document.getElementById("WD190020");
//tommorow 1900m
let WD190033 = $("#WD190033");
let WD190034 = $("#WD190034");
let WD190035 = $("#WD190035");
let WD190036 = $("#WD190036");
let WD190037 = $("#WD190037");
let WD190038 = $("#WD190038");
let WD190039 = $("#WD190039");
let WD190040 = $("#WD190040");
let WD190041 = $("#WD190041");
let WD190042 = $("#WD190042");
let WD190043 = $("#WD190043");
let WD190044 = $("#WD190044");
//today clouds
// low clouds
let lClouds09 = document.getElementById("lClouds09");
let lClouds10 = document.getElementById("lClouds10");
let lClouds11 = document.getElementById("lClouds11");
let lClouds12 = document.getElementById("lClouds12");
let lClouds13 = document.getElementById("lClouds13");
let lClouds14 = document.getElementById("lClouds14");
let lClouds15 = document.getElementById("lClouds15");
let lClouds16 = document.getElementById("lClouds16");
let lClouds17 = document.getElementById("lClouds17");
let lClouds18 = document.getElementById("lClouds18");
let lClouds19 = document.getElementById("lClouds19");
let lClouds20 = document.getElementById("lClouds20");
// medium clouds
let mClouds09 = document.getElementById("mClouds09");
let mClouds10 = document.getElementById("mClouds10");
let mClouds11 = document.getElementById("mClouds11");
let mClouds12 = document.getElementById("mClouds12");
let mClouds13 = document.getElementById("mClouds13");
let mClouds14 = document.getElementById("mClouds14");
let mClouds15 = document.getElementById("mClouds15");
let mClouds16 = document.getElementById("mClouds16");
let mClouds17 = document.getElementById("mClouds17");
let mClouds18 = document.getElementById("mClouds18");
let mClouds19 = document.getElementById("mClouds19");
let mClouds20 = document.getElementById("mClouds20");
// high clouds
let hClouds09 = document.getElementById("hClouds09");
let hClouds10 = document.getElementById("hClouds10");
let hClouds11 = document.getElementById("hClouds11");
let hClouds12 = document.getElementById("hClouds12");
let hClouds13 = document.getElementById("hClouds13");
let hClouds14 = document.getElementById("hClouds14");
let hClouds15 = document.getElementById("hClouds15");
let hClouds16 = document.getElementById("hClouds16");
let hClouds17 = document.getElementById("hClouds17");
let hClouds18 = document.getElementById("hClouds18");
let hClouds19 = document.getElementById("hClouds19");
let hClouds20 = document.getElementById("hClouds20");
//tommorow clouds
// low clouds
let lClouds33 = document.getElementById("lClouds33");
let lClouds34 = document.getElementById("lClouds34");
let lClouds35 = document.getElementById("lClouds35");
let lClouds36 = document.getElementById("lClouds36");
let lClouds37 = document.getElementById("lClouds37");
let lClouds38 = document.getElementById("lClouds38");
let lClouds39 = document.getElementById("lClouds39");
let lClouds40 = document.getElementById("lClouds40");
let lClouds41 = document.getElementById("lClouds41");
let lClouds42 = document.getElementById("lClouds42");
let lClouds43 = document.getElementById("lClouds43");
let lClouds44 = document.getElementById("lClouds44");
// medium clouds
let mClouds33 = document.getElementById("mClouds33");
let mClouds34 = document.getElementById("mClouds34");
let mClouds35 = document.getElementById("mClouds35");
let mClouds36 = document.getElementById("mClouds36");
let mClouds37 = document.getElementById("mClouds37");
let mClouds38 = document.getElementById("mClouds38");
let mClouds39 = document.getElementById("mClouds39");
let mClouds40 = document.getElementById("mClouds40");
let mClouds41 = document.getElementById("mClouds41");
let mClouds42 = document.getElementById("mClouds42");
let mClouds43 = document.getElementById("mClouds43");
let mClouds44 = document.getElementById("mClouds44");
// high clouds
let hClouds33 = document.getElementById("hClouds33");
let hClouds34 = document.getElementById("hClouds34");
let hClouds35 = document.getElementById("hClouds35");
let hClouds36 = document.getElementById("hClouds36");
let hClouds37 = document.getElementById("hClouds37");
let hClouds38 = document.getElementById("hClouds38");
let hClouds39 = document.getElementById("hClouds39");
let hClouds40 = document.getElementById("hClouds40");
let hClouds41 = document.getElementById("hClouds41");
let hClouds42 = document.getElementById("hClouds42");
let hClouds43 = document.getElementById("hClouds43");
let hClouds44 = document.getElementById("hClouds44");
//API
let longitude = "18.57";
let latitude = "49.07";
let locations = [longitude, latitude];

// primary api(base) location male lednice
//let base = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=windspeed_950hPa,windspeed_925hPa,windspeed_900hPa,windspeed_850hPa,windspeed_800hPa,winddirection_950hPa,winddirection_925hPa,winddirection_900hPa,winddirection_850hPa,winddirection_800hPa&windspeed_unit=ms&forecast_days=1&timezone=Europe%2FBerlin`;
let base = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,cloudcover_low,cloudcover_mid,cloudcover_high,windspeed_950hPa,windspeed_925hPa,windspeed_900hPa,windspeed_850hPa,windspeed_800hPa,winddirection_950hPa,winddirection_925hPa,winddirection_900hPa,winddirection_850hPa,winddirection_800hPa&windspeed_unit=ms&forecast_days=1&timezone=Europe%2FBerlin`;

// cahnge api lat and long
changeLoc.addEventListener("change", (eve) => {
   
   if (changeLoc.value === "1") {
      longitude = "18.57";
      latitude = "49.07";      
   } else if (changeLoc.value === "2") {
      longitude = "18.67";
      latitude = "49.04";      
   } else if (changeLoc.value === "3") {
      longitude = "18.82";
      latitude = "49.23";      
   } else if (changeLoc.value === "4") {
      longitude = "19.23";
      latitude = "48.88";      
   } else if (changeLoc.value === "5") {
      longitude = "18.82";
      latitude = "49.09";      
   } else if (changeLoc.value === "6") {
      longitude = "17.99";
      latitude = "48.95";      
   } else if (changeLoc.value === "7") {
      longitude = "18.76";
      latitude = "49.13";      
   }
   locations = [longitude, latitude];
   //base = `https://api.open-meteo.com/v1/forecast?latitude=${locations[1]}&longitude=${locations[0]}&hourly=windspeed_950hPa,windspeed_925hPa,windspeed_900hPa,windspeed_850hPa,windspeed_800hPa,winddirection_950hPa,winddirection_925hPa,winddirection_900hPa,winddirection_850hPa,winddirection_800hPa&current_weather=true&windspeed_unit=ms&forecast_days=3&timezone=Europe%2FBerlin`;
   base = `https://api.open-meteo.com/v1/forecast?latitude=${locations[1]}&longitude=${locations[0]}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,cloudcover_low,cloudcover_mid,cloudcover_high,windspeed_950hPa,windspeed_925hPa,windspeed_900hPa,windspeed_850hPa,windspeed_800hPa,winddirection_950hPa,winddirection_925hPa,winddirection_900hPa,winddirection_850hPa,winddirection_800hPa&daily=weathercode,sunrise,sunset&current_weather=true&windspeed_unit=ms&forecast_days=3&timezone=Europe%2FBerlin`;   

  //save base to local storage
   localStorage.setItem("base", base);
 
});
let weatherCode = "";
let windDNow = "";
let windSNow = "";
let teplota = "";  
let vlhkost = ""; 
let rosnyBod = "";
let dostupy = "";
const isFlyable = document.getElementById("flyable?");
//get base from local storage
base = localStorage.getItem("base", base);
   // reset page without removing input Changing location
onunload = function() {
   var foo = document.getElementById('changeLoc');
   if (foo) {
   self.name = 'fooidx' + foo.selectedIndex;
   }
   }
   
   onload = function() {
   var idx, foo = document.getElementById('changeLoc');
   if (foo) {
   foo.selectedIndex = (idx = self.name.split('fooidx')) ? idx[1] : 0;
   }
   }
   // reset page without removing input Changing day
  
// fetch weather api(base)
window.addEventListener('load', () => {
     fetch(base)
        .then((response) => {            
            return response.json();          
        })
        .then((data) => {
         console.log(data);
///weather data right now//
let sunriseP = document.getElementById("sunrise");
let sunrise = data.daily.sunrise[0];
sunrise = sunrise.slice(11, 17);
sunriseP.textContent = sunrise;
let sunsetP = document.getElementById("sunset");
let sunset = data.daily.sunset[0];
sunset = sunset.slice(11, 17)
sunsetP.textContent = sunset;   

windDNow = data.current_weather.winddirection;
windSNow = data.current_weather.windspeed;
teplota = data.current_weather.temperature;
rosnyBod = data.hourly.dewpoint_2m[2];
weatherCode = data.current_weather.weathercode;

/*---------------------------Privitanie podla hodin------------------------------*/
const d = new Date();
let hours = d.getUTCHours()+2;
let greetSpan = document.getElementById("greetSpan");
let time = document.getElementById("time");
let startPlace = document.getElementById("startovacka");
let eg = 140;
if (hours < 18 && hours >= 12 ) {
    greetSpan.innerHTML = `<span>Good day</span>`;
} else if (hours <= 24 && hours >= 18 )
    greetSpan.innerHTML = `<span>Good evening</span>`;
else {
    greetSpan.innerHTML = `<span>Good morning</span>`;
}
console.log(hours)
/*let lCloudsP = document.getElementById("lClouds");
let mCloudsP = document.getElementById("mClouds");
let hCloudsP = document.getElementById("hClouds");
let lClouds = "";
let mClouds = "";
let hClouds = "";
if (hours === 9) {
   lClouds = data.hourly.cloudcover_low[9];
   mClouds = data.hourly.cloudcover_mid[9];
   hClouds = data.hourly.cloudcover_high[9];
} else if (hours === 10) {
   lClouds = data.hourly.cloudcover_low[10];
   mClouds = data.hourly.cloudcover_mid[10];
   hClouds = data.hourly.cloudcover_high[10];
} else if (hours === 11) {
   lClouds = data.hourly.cloudcover_low[11];
   mClouds = data.hourly.cloudcover_mid[11];
   hClouds = data.hourly.cloudcover_high[11];
} else if (hours === 12) {
   lClouds = data.hourly.cloudcover_low[12];
   mClouds = data.hourly.cloudcover_mid[12];
   hClouds = data.hourly.cloudcover_high[12];
} else if (hours === 13) {
   lClouds = data.hourly.cloudcover_low[13];
   mClouds = data.hourly.cloudcover_mid[13];
   hClouds = data.hourly.cloudcover_high[13];
} else if (hours === 14) {
   lClouds = data.hourly.cloudcover_low[14];
   mClouds = data.hourly.cloudcover_mid[14];
   hClouds = data.hourly.cloudcover_high[14];
} else if (hours === 15) {
   lClouds = data.hourly.cloudcover_low[15];
   mClouds = data.hourly.cloudcover_mid[15];
   hClouds = data.hourly.cloudcover_high[15];
} else if (hours === 16) {
   lClouds = data.hourly.cloudcover_low[16];
   mClouds = data.hourly.cloudcover_mid[16];
   hClouds = data.hourly.cloudcover_high[16];
} else if (hours === 17) {
   lClouds = data.hourly.cloudcover_low[17];
   mClouds = data.hourly.cloudcover_mid[17];
   hClouds = data.hourly.cloudcover_high[17];
} else if (hours === 18) {
   lClouds = data.hourly.cloudcover_low[18];
   mClouds = data.hourly.cloudcover_mid[18];
   hClouds = data.hourly.cloudcover_high[18];
} else if (hours === 19) {
   lClouds = data.hourly.cloudcover_low[19];
   mClouds = data.hourly.cloudcover_mid[19];
   hClouds = data.hourly.cloudcover_high[19];
} else if (hours === 20) {
   lClouds = data.hourly.cloudcover_low[20];
   mClouds = data.hourly.cloudcover_mid[20];
   hClouds = data.hourly.cloudcover_high[20];
} else if (hours === 20, 21, 22, 23) {
   lClouds = data.hourly.cloudcover_low[20];
   mClouds = data.hourly.cloudcover_mid[20];
   hClouds = data.hourly.cloudcover_high[20];
} else if (hours === 4, 5, 6, 7, 8) {
   lClouds = data.hourly.cloudcover_low[8];
   mClouds = data.hourly.cloudcover_mid[8];
   hClouds = data.hourly.cloudcover_high[8];
}

lCloudsP.textContent = lClouds;
mCloudsP.textContent = mClouds;
hCloudsP.textContent = hClouds; */

   

//nadpis podla pocasia
if (windDNow >= 270 && windDNow <= 360 ) {
   startPlace.innerHTML = `<span>"Baba or Súča" should be good.</span>`
}  else if (windSNow > 6) {
   isFlyable.innerHTML = `<span>is not flyable, wind is too strong</span>`
} else if (windDNow >= 170 && windDNow <= 235) {
   startPlace.innerHTML = `<span>"Straník or Čipčie" should be good.</span>`
} else if (windDNow >= 135 && windDNow <= 169) {
   startPlace.innerHTML = `<span>"Straník" should be good.</span>`         
} else if (windDNow >= 236 && windDNow <= 260) {
   startPlace.innerHTML = `<span>"Čipčie" should be good.</span>`
} else if (windDNow >= 40 && windDNow <= 120) {
  startPlace.innerHTML = `<span>"Martinky" should be good.</span>`
} else if (windDNow >= 5 && windDNow <= 134) {
   startPlace.innerHTML = `<span>Sh*t east again!</span>`
   isFlyable.innerHTML = `<span>is not flyable</span>`
} else {
   startPlace.innerHTML = `<span>Sh*t side wind!</span>`
   isFlyable.innerHTML = `<span>is not flyable</span>`
} 




         /////Wind speed table/////
                   //500m = 950Hpa           
         let [windS500m] = [data.hourly.windspeed_950hPa];   
          // Today
         WS50008.textContent = [windS500m[9]];
         WS50010.textContent = [windS500m[10]];
         WS50011.textContent = [windS500m[11]];
         WS50012.textContent = [windS500m[12]];
         WS50013.textContent = [windS500m[13]];
         WS50014.textContent = [windS500m[14]];
         WS50015.textContent = [windS500m[15]];
         WS50016.textContent = [windS500m[16]];
         WS50017.textContent = [windS500m[17]];
         WS50018.textContent = [windS500m[18]];
         WS50019.textContent = [windS500m[19]];
         WS50020.textContent = [windS500m[20]];
         //Tommorow      
         WS50033[0].textContent = [windS500m[33]];
         WS50034[0].textContent = [windS500m[34]];
         WS50035[0].textContent = [windS500m[35]];
         WS50036[0].textContent = [windS500m[36]];
         WS50037[0].textContent = [windS500m[37]];
         WS50038[0].textContent = [windS500m[38]];
         WS50039[0].textContent = [windS500m[39]];
         WS50040[0].textContent = [windS500m[40]];
         WS50041[0].textContent = [windS500m[41]];
         WS50042[0].textContent = [windS500m[42]];
         WS50043[0].textContent = [windS500m[43]];
         WS50044[0].textContent = [windS500m[44]];
        
                      //800m = 925Hpa
         let [windS800m] = [data.hourly.windspeed_925hPa];
         //today
         WS80008.textContent = [windS800m[8]];
         WS80010.textContent = [windS800m[10]];
         WS80011.textContent = [windS800m[11]];
         WS80012.textContent = [windS800m[12]];
         WS80013.textContent = [windS800m[13]];
         WS80014.textContent = [windS800m[14]];
         WS80015.textContent = [windS800m[15]];
         WS80016.textContent = [windS800m[16]];
         WS80017.textContent = [windS800m[17]];
         WS80018.textContent = [windS800m[18]];
         WS80019.textContent = [windS800m[19]];
         WS80020.textContent = [windS800m[20]];
         //tommorow
         WS80033[0].textContent = [windS800m[33]];
         WS80034[0].textContent = [windS800m[34]];
         WS80035[0].textContent = [windS800m[35]];
         WS80036[0].textContent = [windS800m[36]];
         WS80037[0].textContent = [windS800m[37]];
         WS80038[0].textContent = [windS800m[38]];
         WS80039[0].textContent = [windS800m[39]];
         WS80040[0].textContent = [windS800m[40]];
         WS80041[0].textContent = [windS800m[41]];
         WS80042[0].textContent = [windS800m[42]];
         WS80043[0].textContent = [windS800m[43]];
         WS80044[0].textContent = [windS800m[44]];
                      //1000m = 900Hpa
         let [windS1000m] = [data.hourly.windspeed_900hPa];
         //today
         WS100008.textContent = [windS1000m[8]];
         WS100010.textContent = [windS1000m[10]];
         WS100011.textContent = [windS1000m[11]];
         WS100012.textContent = [windS1000m[12]];
         WS100013.textContent = [windS1000m[13]];
         WS100014.textContent = [windS1000m[14]];
         WS100015.textContent = [windS1000m[15]];
         WS100016.textContent = [windS1000m[16]];
         WS100017.textContent = [windS1000m[17]];
         WS100018.textContent = [windS1000m[18]];
         WS100019.textContent = [windS1000m[19]];
         WS100020.textContent = [windS1000m[20]];
         //tommorow
         WS100033[0].textContent = [windS1000m[33]];
         WS100034[0].textContent = [windS1000m[34]];
         WS100035[0].textContent = [windS1000m[35]];
         WS100036[0].textContent = [windS1000m[36]];
         WS100037[0].textContent = [windS1000m[37]];
         WS100038[0].textContent = [windS1000m[38]];
         WS100039[0].textContent = [windS1000m[39]];
         WS100040[0].textContent = [windS1000m[40]];
         WS100041[0].textContent = [windS1000m[41]];
         WS100042[0].textContent = [windS1000m[42]];
         WS100043[0].textContent = [windS1000m[43]];
         WS100044[0].textContent = [windS1000m[44]];
                      //1500m = 850Hpa
         let [windS1500m] = [data.hourly.windspeed_850hPa];
         //today
         WS150008.textContent = [windS1500m[8]];
         WS150010.textContent = [windS1500m[10]];
         WS150011.textContent = [windS1500m[11]];
         WS150012.textContent = [windS1500m[12]];
         WS150013.textContent = [windS1500m[13]];
         WS150014.textContent = [windS1500m[14]];
         WS150015.textContent = [windS1500m[15]];
         WS150016.textContent = [windS1500m[16]];
         WS150017.textContent = [windS1500m[17]];
         WS150018.textContent = [windS1500m[18]];
         WS150019.textContent = [windS1500m[19]];
         WS150020.textContent = [windS1500m[20]];
         //tommorow
         WS150033[0].textContent = [windS1500m[33]];
         WS150034[0].textContent = [windS1500m[34]];
         WS150035[0].textContent = [windS1500m[35]];
         WS150036[0].textContent = [windS1500m[36]];
         WS150037[0].textContent = [windS1500m[37]];
         WS150038[0].textContent = [windS1500m[38]];
         WS150039[0].textContent = [windS1500m[39]];
         WS150040[0].textContent = [windS1500m[40]];
         WS150041[0].textContent = [windS1500m[41]];
         WS150042[0].textContent = [windS1500m[42]];
         WS150043[0].textContent = [windS1500m[43]];
         WS150044[0].textContent = [windS1500m[44]];
                      //1900m = 800Hpa
         let [windS1900m] = [data.hourly.windspeed_800hPa];
         //today
         WS190008.textContent = [windS1900m[8]];
         WS190010.textContent = [windS1900m[10]];
         WS190011.textContent = [windS1900m[11]];
         WS190012.textContent = [windS1900m[12]];
         WS190013.textContent = [windS1900m[13]];
         WS190014.textContent = [windS1900m[14]];
         WS190015.textContent = [windS1900m[15]];
         WS190016.textContent = [windS1900m[16]];
         WS190017.textContent = [windS1900m[17]];
         WS190018.textContent = [windS1900m[18]];
         WS190019.textContent = [windS1900m[19]];
         WS190020.textContent = [windS1900m[20]];
         //tommorow
         WS190033[0].textContent = [windS1900m[33]];
         WS190034[0].textContent = [windS1900m[34]];
         WS190035[0].textContent = [windS1900m[35]];
         WS190036[0].textContent = [windS1900m[36]];
         WS190037[0].textContent = [windS1900m[37]];
         WS190038[0].textContent = [windS1900m[38]];
         WS190039[0].textContent = [windS1900m[39]];
         WS190040[0].textContent = [windS1900m[40]];
         WS190041[0].textContent = [windS1900m[41]];
         WS190042[0].textContent = [windS1900m[42]];
         WS190043[0].textContent = [windS1900m[43]];
         WS190044[0].textContent = [windS1900m[44]];

         /////Wind direction table/////
                      //500m = 950Hpa
         let [windD500m] = [data.hourly.winddirection_950hPa];
         //today
         WD50008.textContent = [windD500m[8]];
         WD50010.textContent = [windD500m[10]];
         WD50011.textContent = [windD500m[11]];
         WD50012.textContent = [windD500m[12]];
         WD50013.textContent = [windD500m[13]];
         WD50014.textContent = [windD500m[14]];
         WD50015.textContent = [windD500m[15]];
         WD50016.textContent = [windD500m[16]];
         WD50017.textContent = [windD500m[17]];
         WD50018.textContent = [windD500m[18]];
         WD50019.textContent = [windD500m[19]];
         WD50020.textContent = [windD500m[20]];
         //tommorow
         WD50033[0].textContent = [windD500m[33]];
         WD50034[0].textContent = [windD500m[34]];
         WD50035[0].textContent = [windD500m[35]];
         WD50036[0].textContent = [windD500m[36]];
         WD50037[0].textContent = [windD500m[37]];
         WD50038[0].textContent = [windD500m[38]];
         WD50039[0].textContent = [windD500m[39]];
         WD50040[0].textContent = [windD500m[40]];
         WD50041[0].textContent = [windD500m[41]];
         WD50042[0].textContent = [windD500m[42]];
         WD50043[0].textContent = [windD500m[43]];
         WD50044[0].textContent = [windD500m[44]];   
                      //800m = 925Hpa
         let [windD800m] = [data.hourly.winddirection_925hPa];
         //today
         WD80008.textContent = [windD800m[8]];
         WD80010.textContent = [windD800m[10]];
         WD80011.textContent = [windD800m[11]];
         WD80012.textContent = [windD800m[12]];
         WD80013.textContent = [windD800m[13]];
         WD80014.textContent = [windD800m[14]];
         WD80015.textContent = [windD800m[15]];
         WD80016.textContent = [windD800m[16]];
         WD80017.textContent = [windD800m[17]];
         WD80018.textContent = [windD800m[18]];
         WD80019.textContent = [windD800m[19]];
         WD80020.textContent = [windD800m[20]];
         //tommorow
         WD80033[0].textContent = [windD800m[33]];
         WD80034[0].textContent = [windD800m[34]];
         WD80035[0].textContent = [windD800m[35]];
         WD80036[0].textContent = [windD800m[36]];
         WD80037[0].textContent = [windD800m[37]];
         WD80038[0].textContent = [windD800m[38]];
         WD80039[0].textContent = [windD800m[39]];
         WD80040[0].textContent = [windD800m[40]];
         WD80041[0].textContent = [windD800m[41]];
         WD80042[0].textContent = [windD800m[42]];
         WD80043[0].textContent = [windD800m[43]];
         WD80044[0].textContent = [windD800m[44]];
                      //1000m = 900Hpa
         let [windD1000m] = [data.hourly.winddirection_900hPa];
         //today
         WD100008.textContent = [windD1000m[8]];
         WD100010.textContent = [windD1000m[10]];
         WD100011.textContent = [windD1000m[11]];
         WD100012.textContent = [windD1000m[12]];
         WD100013.textContent = [windD1000m[13]];
         WD100014.textContent = [windD1000m[14]];
         WD100015.textContent = [windD1000m[15]];
         WD100016.textContent = [windD1000m[16]];
         WD100017.textContent = [windD1000m[17]];
         WD100018.textContent = [windD1000m[18]];
         WD100019.textContent = [windD1000m[19]];
         WD100020.textContent = [windD1000m[20]];
         //tommorow
         WD100033[0].textContent = [windD1000m[33]];
         WD100034[0].textContent = [windD1000m[34]];
         WD100035[0].textContent = [windD1000m[35]];
         WD100036[0].textContent = [windD1000m[36]];
         WD100037[0].textContent = [windD1000m[37]];
         WD100038[0].textContent = [windD1000m[38]];
         WD100039[0].textContent = [windD1000m[39]];
         WD100040[0].textContent = [windD1000m[40]];
         WD100041[0].textContent = [windD1000m[41]];
         WD100042[0].textContent = [windD1000m[42]];
         WD100043[0].textContent = [windD1000m[43]];
         WD100044[0].textContent = [windD1000m[44]];
                      //1500m = 850Hpa
         let [windD1500m] = [data.hourly.winddirection_850hPa];
         //today
         WD150008.textContent = [windD1500m[8]];
         WD150010.textContent = [windD1500m[10]];
         WD150011.textContent = [windD1500m[11]];
         WD150012.textContent = [windD1500m[12]];
         WD150013.textContent = [windD1500m[13]];
         WD150014.textContent = [windD1500m[14]];
         WD150015.textContent = [windD1500m[15]];
         WD150016.textContent = [windD1500m[16]];
         WD150017.textContent = [windD1500m[17]];
         WD150018.textContent = [windD1500m[18]];
         WD150019.textContent = [windD1500m[19]];
         WD150020.textContent = [windD1500m[20]];
         //tommorow
         WD150033[0].textContent = [windD1500m[33]];
         WD150034[0].textContent = [windD1500m[34]];
         WD150035[0].textContent = [windD1500m[35]];
         WD150036[0].textContent = [windD1500m[36]];
         WD150037[0].textContent = [windD1500m[37]];
         WD150038[0].textContent = [windD1500m[38]];
         WD150039[0].textContent = [windD1500m[39]];
         WD150040[0].textContent = [windD1500m[40]];
         WD150041[0].textContent = [windD1500m[41]];
         WD150042[0].textContent = [windD1500m[42]];
         WD150043[0].textContent = [windD1500m[43]];
         WD150044[0].textContent = [windD1500m[44]];
                      //1900m = 800Hpa
         let [windD1900m] = [data.hourly.winddirection_800hPa];
         //today
         WD190008.textContent = [windD1900m[8]];
         WD190010.textContent = [windD1900m[10]];
         WD190011.textContent = [windD1900m[11]];
         WD190012.textContent = [windD1900m[12]];
         WD190013.textContent = [windD1900m[13]];
         WD190014.textContent = [windD1900m[14]];
         WD190015.textContent = [windD1900m[15]];
         WD190016.textContent = [windD1900m[16]];
         WD190017.textContent = [windD1900m[17]];
         WD190018.textContent = [windD1900m[18]];
         WD190019.textContent = [windD1900m[19]];
         WD190020.textContent = [windD1900m[20]];
         //tommorow
         WD190033[0].textContent = [windD1900m[33]];
         WD190034[0].textContent = [windD1900m[34]];
         WD190035[0].textContent = [windD1900m[35]];
         WD190036[0].textContent = [windD1900m[36]];
         WD190037[0].textContent = [windD1900m[37]];
         WD190038[0].textContent = [windD1900m[38]];
         WD190039[0].textContent = [windD1900m[39]];
         WD190040[0].textContent = [windD1900m[40]];
         WD190041[0].textContent = [windD1900m[41]];
         WD190042[0].textContent = [windD1900m[42]];
         WD190043[0].textContent = [windD1900m[43]];
         WD190044[0].textContent = [windD1900m[44]];
         //clouds today
         //low clouds
         let [lowClouds] = [data.hourly.cloudcover_low];
         lClouds09.textContent = [lowClouds[09]];
         lClouds10.textContent = [lowClouds[10]];
         lClouds11.textContent = [lowClouds[11]];
         lClouds12.textContent = [lowClouds[12]];
         lClouds13.textContent = [lowClouds[13]];
         lClouds14.textContent = [lowClouds[14]];
         lClouds15.textContent = [lowClouds[15]];
         lClouds16.textContent = [lowClouds[16]];
         lClouds17.textContent = [lowClouds[17]];
         lClouds18.textContent = [lowClouds[18]];
         lClouds19.textContent = [lowClouds[19]];
         lClouds20.textContent = [lowClouds[20]];
         //medium clouds
         let [medClouds] = [data.hourly.cloudcover_mid];
         mClouds09.textContent = [medClouds[09]];
         mClouds10.textContent = [medClouds[10]];
         mClouds11.textContent = [medClouds[11]];
         mClouds12.textContent = [medClouds[12]];
         mClouds13.textContent = [medClouds[13]];
         mClouds14.textContent = [medClouds[14]];
         mClouds15.textContent = [medClouds[15]];
         mClouds16.textContent = [medClouds[16]];
         mClouds17.textContent = [medClouds[17]];
         mClouds18.textContent = [medClouds[18]];
         mClouds19.textContent = [medClouds[19]];
         mClouds20.textContent = [medClouds[20]];
         //high clouds
         let [higClouds] = [data.hourly.cloudcover_high];
         hClouds09.textContent = [higClouds[09]];
         hClouds10.textContent = [higClouds[10]];
         hClouds11.textContent = [higClouds[11]];
         hClouds12.textContent = [higClouds[12]];
         hClouds13.textContent = [higClouds[13]];
         hClouds14.textContent = [higClouds[14]];
         hClouds15.textContent = [higClouds[15]];
         hClouds16.textContent = [higClouds[16]];
         hClouds17.textContent = [higClouds[17]];
         hClouds18.textContent = [higClouds[18]];
         hClouds19.textContent = [higClouds[19]];
         hClouds20.textContent = [higClouds[20]];
         //clouds tommorow
         //low clouds
         lClouds33.textContent = [lowClouds[33]];
         lClouds34.textContent = [lowClouds[34]];
         lClouds35.textContent = [lowClouds[35]];
         lClouds36.textContent = [lowClouds[36]];
         lClouds37.textContent = [lowClouds[37]];
         lClouds38.textContent = [lowClouds[38]];
         lClouds39.textContent = [lowClouds[39]];
         lClouds40.textContent = [lowClouds[40]];
         lClouds41.textContent = [lowClouds[41]];
         lClouds42.textContent = [lowClouds[42]];
         lClouds43.textContent = [lowClouds[43]];
         lClouds44.textContent = [lowClouds[44]];
         //medium clouds
         mClouds33.textContent = [medClouds[33]];
         mClouds34.textContent = [medClouds[34]];
         mClouds35.textContent = [medClouds[35]];
         mClouds36.textContent = [medClouds[36]];
         mClouds37.textContent = [medClouds[37]];
         mClouds38.textContent = [medClouds[38]];
         mClouds39.textContent = [medClouds[39]];
         mClouds40.textContent = [medClouds[40]];
         mClouds41.textContent = [medClouds[41]];
         mClouds42.textContent = [medClouds[42]];
         mClouds43.textContent = [medClouds[43]];
         mClouds44.textContent = [medClouds[44]];
         //high clouds
         hClouds33.textContent = [higClouds[33]];
         hClouds34.textContent = [higClouds[34]];
         hClouds35.textContent = [higClouds[35]];
         hClouds36.textContent = [higClouds[36]];
         hClouds37.textContent = [higClouds[37]];
         hClouds38.textContent = [higClouds[38]];
         hClouds39.textContent = [higClouds[39]];
         hClouds40.textContent = [higClouds[40]];
         hClouds41.textContent = [higClouds[41]];
         hClouds42.textContent = [higClouds[42]];
         hClouds43.textContent = [higClouds[43]];
         hClouds44.textContent = [higClouds[44]];
         
         
      });        
});
//switching tables
let tableSwitcN = document.querySelector("#tableSwitchN");
let tableSwitcP = document.querySelector("#tableSwitchP");

function switchTable() {
   if (table2.style.display === "table") {     
      table1.style.display = "table";
      table2.style.display = "none";
   } else if (table2.style.display === "none") {
      table1.style.display = "none";
      table2.style.display = "table";
   } 
   
}
tableSwitchN.addEventListener("click", switchTable);
tableSwitchP.addEventListener("click", switchTable);

///////////////////////////////////////pocitanie dostupov/////////////////////////////////////////////


   
   const L = 0.0098
   const LCL = (teplota - ((teplota - rosnyBod) / (L * 1000))) * 1000;
   const LCLm = LCL / Math.pow((teplota/rosnyBod), (1/5.255));
   //return Math.round(LCLm);
 if (WD50033 === (":hover")) {
    WD50033.style.background = "green";
 }

   