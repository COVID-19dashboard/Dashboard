let new_cases = document.getElementById("new_case");
let new_death = document.getElementById("new_death");
let total_death = document.getElementById("total_death");
let total_recovered = document.getElementById("total_recovered");
let total_cases = document.getElementById("total_cases");
let table = document.getElementById('countries_stat')

fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "21ed8cbd03mshef9da51381ec3e4p1ef88bjsn5086d81f2d34"
    }
})
.then(response => response.json().then( data => {
    console.log(data);
    total_cases.innerHTML = data.total_cases;
    new_cases.innerHTML = data.new_cases;
    new_death.innerHTML = data.new_deaths;
    total_death.innerHTML = data.total_deaths;
    total_recovered.innerHTML = data.total_recovered;

})).catch(err => {
    console.log(err);
});

//Fetching The Case by Country Data
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "21ed8cbd03mshef9da51381ec3e4p1ef88bjsn5086d81f2d34", 
    }
})
.then(response => response.json().then(data => {
    console.log(data);
}))
.catch(err => {
    console.log(err);
});

 // Set up the world map
 map = new L.Map('map');
 var cartocdn = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';
 cartoAttrib = 'Carto geodatabase is good for this application';
 carto = new L.TileLayer(cartocdn);
 map.setView([51.5, 0.12],2); // centered on London lat, long
 map.addLayer(carto);
 
 // add circles - Italy and Hubei are here as an example 
 L.circle([-51.7963,-59.5236],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:110}).addTo(map).bindPopup('Falkland Islands (Malvinas),United Kingdom : 11')
L.circle([-42.8821,147.3272],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:670}).addTo(map).bindPopup('Tasmania,Australia : 67')
L.circle([-40.9006,174.886],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:11180}).addTo(map).bindPopup('New Zealand : 1118')
L.circle([-38.4161,-63.6167],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:9760}).addTo(map).bindPopup('Argentina : 976')
L.circle([-37.8136,144.9631],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:11720}).addTo(map).bindPopup('Victoria,Australia : 1172')
L.circle([-35.6751,-71.543],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:63270}).addTo(map).bindPopup('Chile : 6327')
L.circle([-35.4735,149.0124],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:880}).addTo(map).bindPopup('Australian Capital Territory,Australia : 88')
L.circle([-34.9285,138.6007],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3310}).addTo(map).bindPopup('South Australia,Australia : 331')
L.circle([-33.8688,151.2093],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:13790}).addTo(map).bindPopup('New South Wales,Australia : 1379')
L.circle([-32.5228,-55.7658],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3690}).addTo(map).bindPopup('Uruguay : 369')
L.circle([-31.9505,115.8605],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3400}).addTo(map).bindPopup('Western Australia,Australia : 340')
L.circle([-30.5595,22.9375],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:14730}).addTo(map).bindPopup('South Africa : 1473')
L.circle([-27.4698,153.0251],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:7380}).addTo(map).bindPopup('Queensland,Australia : 738')
L.circle([-26.5225,31.4659],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:100}).addTo(map).bindPopup('Eswatini : 10')
L.circle([-23.4425,-58.4438],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:780}).addTo(map).bindPopup('Paraguay : 78')
L.circle([-22.9576,18.4904],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:70}).addTo(map).bindPopup('Namibia : 7')
L.circle([-21.1151,55.5364],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3000}).addTo(map).bindPopup('Reunion,France : 300')
L.circle([-20.904305,165.618042],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:170}).addTo(map).bindPopup('New Caledonia,France : 17')
L.circle([-20.348404,57.552152],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2850}).addTo(map).bindPopup('Mauritius : 285')
L.circle([-19.015438,29.154857],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:20}).addTo(map).bindPopup('Zimbabwe : 2')
L.circle([-18.766947,46.869107],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:610}).addTo(map).bindPopup('Madagascar : 61')
L.circle([-18.665695,35.529562],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:120}).addTo(map).bindPopup('Mozambique : 12')
L.circle([-17.7134,178.065],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:100}).addTo(map).bindPopup('Fiji : 10')
L.circle([-17.6797,-149.4068],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:410}).addTo(map).bindPopup('French Polynesia,France : 41')
L.circle([-16.2902,-63.5887],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:540}).addTo(map).bindPopup('Bolivia : 54')
L.circle([-14.235,-51.9253],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:276550}).addTo(map).bindPopup('Brazil : 27655')
L.circle([-13.254308,34.301525],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:40}).addTo(map).bindPopup('Malawi : 4')
L.circle([-13.133897,27.849332],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:370}).addTo(map).bindPopup('Zambia : 37')
L.circle([-12.8275,45.166244],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1440}).addTo(map).bindPopup('Mayotte,France : 144')
L.circle([-12.4634,130.8456],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:90}).addTo(map).bindPopup('Northern Territory,Australia : 9')
L.circle([-11.2027,17.8739],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:60}).addTo(map).bindPopup('Angola : 6')
L.circle([-9.19,-75.0152],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:74960}).addTo(map).bindPopup('Peru : 7496')
L.circle([-8.874217,125.727539],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:20}).addTo(map).bindPopup('Timor-Leste : 2')
L.circle([-6.369028,34.888822],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:480}).addTo(map).bindPopup('Tanzania : 48')
L.circle([-4.6796,55.492],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:60}).addTo(map).bindPopup('Seychelles : 6')
L.circle([-4.322447,15.307045],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:480}).addTo(map).bindPopup('Congo (Kinshasa) : 48')
L.circle([-4.2634,15.2832],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:190}).addTo(map).bindPopup('Congo (Brazzaville) : 19')
L.circle([-3.3731,29.9189],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:40}).addTo(map).bindPopup('Burundi : 4')
L.circle([-1.9403,29.8739],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:870}).addTo(map).bindPopup('Rwanda : 87')
L.circle([-1.8312,-78.1834],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:13660}).addTo(map).bindPopup('Ecuador : 1366')
L.circle([-0.8037,11.6094],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:260}).addTo(map).bindPopup('Gabon : 26')
L.circle([-0.7893,113.9213],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:10020}).addTo(map).bindPopup('Indonesia : 1002')
L.circle([-0.0236,37.9062],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:940}).addTo(map).bindPopup('Kenya : 94')
L.circle([1.2833,103.8333],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:9560}).addTo(map).bindPopup('Singapore : 956')
L.circle([1.373333,32.290275],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:460}).addTo(map).bindPopup('Uganda : 46')
L.circle([1.6508,10.2679],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:70}).addTo(map).bindPopup('Equatorial Guinea : 7')
L.circle([3.2028,73.2207],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:160}).addTo(map).bindPopup('Maldives : 16')
L.circle([3.848,11.5021],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:6680}).addTo(map).bindPopup('Cameroon : 668')
L.circle([3.9193,-56.0278],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:70}).addTo(map).bindPopup('Suriname : 7')
L.circle([4,-53],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:870}).addTo(map).bindPopup('French Guiana,France : 87')
L.circle([4.210484,101.975766],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:36630}).addTo(map).bindPopup('Malaysia : 3663')
L.circle([4.5353,114.7277],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1200}).addTo(map).bindPopup('Brunei : 120')
L.circle([4.5709,-74.2973],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:10030}).addTo(map).bindPopup('Colombia : 1003')
L.circle([4.860416,-58.93018],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:120}).addTo(map).bindPopup('Guyana : 12')
L.circle([5.152149,46.199616],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:80}).addTo(map).bindPopup('Somalia : 8')
L.circle([6.4238,-66.5897],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1320}).addTo(map).bindPopup('Venezuela : 132')
L.circle([6.428055,-9.429499],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:250}).addTo(map).bindPopup('Liberia : 25')
L.circle([6.6111,20.9394],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:100}).addTo(map).bindPopup('Central African Republic : 10')
L.circle([7.54,-5.5471],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:4190}).addTo(map).bindPopup('Cote dIvoire : 419')
L.circle([7.873054,80.771797],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1090}).addTo(map).bindPopup('Sri Lanka : 109')
L.circle([7.9465,-1.0232],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1340}).addTo(map).bindPopup('Ghana : 134')
L.circle([8.460555,-11.779889],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:100}).addTo(map).bindPopup('Sierra Leone : 10')
L.circle([8.538,-80.7821],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3190}).addTo(map).bindPopup('Panama : 319')
L.circle([8.6195,0.8248],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:590}).addTo(map).bindPopup('Togo : 59')
L.circle([9.082,8.6753],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2080}).addTo(map).bindPopup('Nigeria : 208')
L.circle([9.145,40.4897],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:250}).addTo(map).bindPopup('Ethiopia : 25')
L.circle([9.3077,2.3158],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:270}).addTo(map).bindPopup('Benin : 27')
L.circle([9.7489,-83.7534],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2160}).addTo(map).bindPopup('Costa Rica : 216')
L.circle([9.9456,-9.6966],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1910}).addTo(map).bindPopup('Guinea : 191')
L.circle([10.6918,-61.2225],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:480}).addTo(map).bindPopup('Trinidad and Tobago : 48')
L.circle([11.55,104.9167],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1170}).addTo(map).bindPopup('Cambodia : 117')
L.circle([11.8037,-15.1804],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:30}).addTo(map).bindPopup('Guinea-Bissau : 3')
L.circle([11.8251,42.5903],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3300}).addTo(map).bindPopup('Djibouti : 330')
L.circle([12.1165,-61.679],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:70}).addTo(map).bindPopup('Grenada : 7')
L.circle([12.1696,-68.99],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:110}).addTo(map).bindPopup('Curacao,Netherlands : 11')
L.circle([12.2383,-1.5616],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:4250}).addTo(map).bindPopup('Burkina Faso : 425')
L.circle([12.5211,-69.9683],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:690}).addTo(map).bindPopup('Aruba,Netherlands : 69')
L.circle([12.8628,30.2176],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:140}).addTo(map).bindPopup('Sudan : 14')
L.circle([12.865416,-85.207229],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:70}).addTo(map).bindPopup('Nicaragua : 7')
L.circle([12.879721,121.774017],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:7620}).addTo(map).bindPopup('Philippines : 762')
L.circle([12.9843,-61.2872],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:50}).addTo(map).bindPopup('Saint Vincent and the Grenadines : 5')
L.circle([13.1939,-59.5432],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:310}).addTo(map).bindPopup('Barbados : 31')
L.circle([13.4432,-15.3101],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:80}).addTo(map).bindPopup('Gambia : 8')
L.circle([13.7942,-88.8965],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:750}).addTo(map).bindPopup('El Salvador : 75')
L.circle([13.9094,-60.9789],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:150}).addTo(map).bindPopup('Saint Lucia : 15')
L.circle([14.058324,108.277199],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2200}).addTo(map).bindPopup('Vietnam : 220')
L.circle([14.4974,-14.4524],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2620}).addTo(map).bindPopup('Senegal : 262')
L.circle([14.6415,-61.0242],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:770}).addTo(map).bindPopup('Martinique,France : 77')
L.circle([15.1794,39.7823],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:110}).addTo(map).bindPopup('Eritrea : 11')
L.circle([15.2,-86.2419],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:580}).addTo(map).bindPopup('Honduras : 58')
L.circle([15.415,-61.371],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:100}).addTo(map).bindPopup('Dominica : 10')
L.circle([15.4542,18.7322],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:80}).addTo(map).bindPopup('Chad : 8')
L.circle([15.552727,48.516388],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:10}).addTo(map).bindPopup('Yemen : 1')
L.circle([15.7835,-90.2308],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:300}).addTo(map).bindPopup('Guatemala : 30')
L.circle([15.870032,100.992541],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:25470}).addTo(map).bindPopup('Thailand : 2547')
L.circle([16.265,-61.551],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:820}).addTo(map).bindPopup('Guadeloupe,France : 82')
L.circle([16.5388,-23.0418],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:10}).addTo(map).bindPopup('Cabo Verde : 1')
L.circle([16.742498,-62.187366],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:20}).addTo(map).bindPopup('Montserrat,United Kingdom : 2')
L.circle([17.0608,-61.7964],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:110}).addTo(map).bindPopup('Antigua and Barbuda : 11')
L.circle([17.1899,-88.4976],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:50}).addTo(map).bindPopup('Belize : 5')
L.circle([17.357822,-62.782998],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:20}).addTo(map).bindPopup('Saint Kitts and Nevis : 2')
L.circle([17.570692,-3.996166],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:870}).addTo(map).bindPopup('Mali : 87')
L.circle([17.607789,8.081666],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2890}).addTo(map).bindPopup('Niger : 289')
L.circle([17.9,-62.8333],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:60}).addTo(map).bindPopup('Saint Barthelemy,France : 6')
L.circle([18.0425,-63.0548],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:220}).addTo(map).bindPopup('Sint Maarten,Netherlands : 22')
L.circle([18.0708,-63.0501],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:240}).addTo(map).bindPopup('St Martin,France : 24')
L.circle([18.1096,-77.2975],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:280}).addTo(map).bindPopup('Jamaica : 28')
L.circle([18.2206,-63.0686],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:10}).addTo(map).bindPopup('Anguilla,United Kingdom : 1')
L.circle([18.4207,-64.64],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:30}).addTo(map).bindPopup('British Virgin Islands,United Kingdom : 3')
L.circle([18.7357,-70.1627],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:7630}).addTo(map).bindPopup('Dominican Republic : 763')
L.circle([18.9712,-72.2852],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:60}).addTo(map).bindPopup('Haiti : 6')
L.circle([19.1959,109.7453],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1620}).addTo(map).bindPopup('Hainan,China : 162')
L.circle([19.3133,-81.2546],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:80}).addTo(map).bindPopup('Cayman Islands,United Kingdom : 8')
L.circle([19.85627,102.495496],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:40}).addTo(map).bindPopup('Laos : 4')
L.circle([20.593684,78.96288],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:54980}).addTo(map).bindPopup('India : 5498')
L.circle([21.0079,-10.9408],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:60}).addTo(map).bindPopup('Mauritania : 6')
L.circle([21.512583,55.923255],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3250}).addTo(map).bindPopup('Oman : 325')
L.circle([21.521757,-77.781167],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:4160}).addTo(map).bindPopup('Cuba : 416')
L.circle([21.694,-71.7979],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:40}).addTo(map).bindPopup('Turks and Caicos Islands,United Kingdom : 4')
L.circle([21.9162,95.956],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:90}).addTo(map).bindPopup('Burma : 9')
L.circle([22.1667,113.55],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:270}).addTo(map).bindPopup('Macau,China : 27')
L.circle([22.3,114.2],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:7250}).addTo(map).bindPopup('Hong Kong,China : 725')
L.circle([23.3417,113.4244],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:15340}).addTo(map).bindPopup('Guangdong,China : 1534')
L.circle([23.424076,53.847818],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:17600}).addTo(map).bindPopup('United Arab Emirates : 1760')
L.circle([23.6345,-102.5528],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:71490}).addTo(map).bindPopup('Mexico : 7149')
L.circle([23.685,90.3563],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1120}).addTo(map).bindPopup('Bangladesh : 112')
L.circle([23.7,121],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2640}).addTo(map).bindPopup('Taiwan* : 264')
L.circle([23.8298,108.7881],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2520}).addTo(map).bindPopup('Guangxi,China : 252')
L.circle([23.885942,45.079162],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:20490}).addTo(map).bindPopup('Saudi Arabia : 2049')
L.circle([24.2155,-12.8858],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:50}).addTo(map).bindPopup('Western Sahara : 5')
L.circle([24.974,101.487],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1800}).addTo(map).bindPopup('Yunnan,China : 180')
L.circle([25.025885,-78.035889],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:150}).addTo(map).bindPopup('Bahamas : 15')
L.circle([25.3548,51.1839],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:8090}).addTo(map).bindPopup('Qatar : 809')
L.circle([26.0275,50.55],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:11130}).addTo(map).bindPopup('Bahrain : 1113')
L.circle([26.0789,117.9874],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3490}).addTo(map).bindPopup('Fujian,China : 349')
L.circle([26.3351,17.228331],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:180}).addTo(map).bindPopup('Libya : 18')
L.circle([26.8154,106.8748],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1450}).addTo(map).bindPopup('Guizhou,China : 145')
L.circle([26.820553,30.802498],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:10750}).addTo(map).bindPopup('Egypt : 1075')
L.circle([27.5142,90.4336],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:30}).addTo(map).bindPopup('Bhutan : 3')
L.circle([27.6104,111.7088],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:10150}).addTo(map).bindPopup('Hunan,China : 1015')
L.circle([27.614,115.7221],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:9360}).addTo(map).bindPopup('Jiangxi,China : 936')
L.circle([28.0339,1.6596],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:14080}).addTo(map).bindPopup('Algeria : 1408')
L.circle([28.1667,84.25],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:110}).addTo(map).bindPopup('Nepal : 11')
L.circle([29.1832,120.0934],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:12560}).addTo(map).bindPopup('Zhejiang,China : 1256')
L.circle([29.31166,47.481766],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:6130}).addTo(map).bindPopup('Kuwait : 613')
L.circle([30.0572,107.874],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:5730}).addTo(map).bindPopup('Chongqing,China : 573')
L.circle([30.3753,69.3451],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:27550}).addTo(map).bindPopup('Pakistan : 2755')
L.circle([30.6171,102.7103],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:5580}).addTo(map).bindPopup('Sichuan,China : 558')
L.circle([30.9756,112.2707],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:635930}).addTo(map).bindPopup('Hubei,China : 63593')
L.circle([31.046051,34.851612],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:60030}).addTo(map).bindPopup('Israel : 6003')
L.circle([31.202,121.4491],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:5580}).addTo(map).bindPopup('Shanghai,China : 558')
L.circle([31.24,36.51],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3260}).addTo(map).bindPopup('Jordan : 326')
L.circle([31.6927,88.0924],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:10}).addTo(map).bindPopup('Tibet,China : 1')
L.circle([31.7917,-7.0926],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:4860}).addTo(map).bindPopup('Morocco : 486')
L.circle([31.8257,117.2264],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:9850}).addTo(map).bindPopup('Anhui,China : 985')
L.circle([31.9522,35.2332],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:920}).addTo(map).bindPopup('West Bank and Gaza : 92')
L.circle([32.3078,-64.7505],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:390}).addTo(map).bindPopup('Bermuda,United Kingdom : 39')
L.circle([32.427908,53.688046],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:665990}).addTo(map).bindPopup('Iran : 66599')
L.circle([32.9711,119.455],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:6460}).addTo(map).bindPopup('Jiangsu,China : 646')
L.circle([33.223191,43.679291],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:12040}).addTo(map).bindPopup('Iraq : 1204')
L.circle([33.8547,35.8623],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1400}).addTo(map).bindPopup('Lebanon : 140')
L.circle([33.882,113.614],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:12540}).addTo(map).bindPopup('Henan,China : 1254')
L.circle([33.886917,9.537499],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1940}).addTo(map).bindPopup('Tunisia : 194')
L.circle([33.93911,67.709953],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1880}).addTo(map).bindPopup('Afghanistan : 188')
L.circle([34.802075,38.996815],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:60}).addTo(map).bindPopup('Syria : 6')
L.circle([35.1264,33.4299],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:980}).addTo(map).bindPopup('Cyprus : 98')
L.circle([35.1917,108.8701],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2530}).addTo(map).bindPopup('Shaanxi,China : 253')
L.circle([35.7452,95.9956],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:180}).addTo(map).bindPopup('Qinghai,China : 18')
L.circle([35.907757,127.766922],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:86350}).addTo(map).bindPopup('South Korea : 8635')
L.circle([35.9375,14.3754],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2230}).addTo(map).bindPopup('Malta : 223')
L.circle([36.1408,-5.3536],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1310}).addTo(map).bindPopup('Gibraltar,United Kingdom : 131')
L.circle([36.204824,138.252924],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:15300}).addTo(map).bindPopup('Japan : 1530')
L.circle([36.3427,118.1498],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:7670}).addTo(map).bindPopup('Shandong,China : 767')
L.circle([37.2692,106.1655],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:750}).addTo(map).bindPopup('Ningxia,China : 75')
L.circle([37.5777,112.2922],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1490}).addTo(map).bindPopup('Shanxi,China : 149')
L.circle([37.8099,101.0583],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1370}).addTo(map).bindPopup('Gansu,China : 137')
L.circle([38.9637,35.2433],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:217370}).addTo(map).bindPopup('Turkey : 21737')
L.circle([39.0742,21.8243],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:5770}).addTo(map).bindPopup('Greece : 577')
L.circle([39.3054,117.323],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1810}).addTo(map).bindPopup('Tianjin,China : 181')
L.circle([39.3999,-8.2245],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:12280}).addTo(map).bindPopup('Portugal : 1228')
L.circle([39.549,116.1306],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3180}).addTo(map).bindPopup('Hebei,China : 318')
L.circle([40.0691,45.0382],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:7280}).addTo(map).bindPopup('Armenia : 728')
L.circle([40.1431,47.5769],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:10130}).addTo(map).bindPopup('Azerbaijan : 1013')
L.circle([40.1824,116.4142],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:5250}).addTo(map).bindPopup('Beijing,China : 525')
L.circle([40.463667,-3.74922],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:923550}).addTo(map).bindPopup('Spain : 92355')
L.circle([41.1129,85.2401],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:730}).addTo(map).bindPopup('Xinjiang,China : 73')
L.circle([41.1533,20.1683],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3940}).addTo(map).bindPopup('Albania : 394')
L.circle([41.20438,74.766098],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3450}).addTo(map).bindPopup('Kyrgyzstan : 345')
L.circle([41.2956,122.6085],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1430}).addTo(map).bindPopup('Liaoning,China : 143')
L.circle([41.377491,64.585262],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:6210}).addTo(map).bindPopup('Uzbekistan : 621')
L.circle([41.6086,21.7453],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3370}).addTo(map).bindPopup('North Macedonia : 337')
L.circle([41.87194,12.56738],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:604980}).addTo(map).bindPopup('Italy : 60498')
L.circle([41.9029,12.4534],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:20}).addTo(map).bindPopup('Holy See : 2')
L.circle([42.3154,43.3569],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1320}).addTo(map).bindPopup('Georgia : 132')
L.circle([42.5063,1.5218],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3440}).addTo(map).bindPopup('Andorra : 344')
L.circle([42.602636,20.902977],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:930}).addTo(map).bindPopup('Kosovo : 93')
L.circle([42.708678,19.37439],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1230}).addTo(map).bindPopup('Montenegro : 123')
L.circle([42.7339,25.4858],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1970}).addTo(map).bindPopup('Bulgaria : 197')
L.circle([43.6661,126.1923],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:990}).addTo(map).bindPopup('Jilin,China : 99')
L.circle([43.7333,7.4167],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:410}).addTo(map).bindPopup('Monaco : 41')
L.circle([43.9159,17.6791],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:5380}).addTo(map).bindPopup('Bosnia and Herzegovina : 538')
L.circle([43.9424,12.4578],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:640}).addTo(map).bindPopup('San Marino : 64')
L.circle([44.0165,21.0059],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:8700}).addTo(map).bindPopup('Serbia : 870')
L.circle([44.0935,113.9448],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1140}).addTo(map).bindPopup('Inner Mongolia,China : 114')
L.circle([45.1,15.2],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:9820}).addTo(map).bindPopup('Croatia : 982')
L.circle([45.9432,24.9668],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:28170}).addTo(map).bindPopup('Romania : 2817')
L.circle([46.1512,14.9955],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2110}).addTo(map).bindPopup('Slovenia : 211')
L.circle([46.2276,2.2137],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:434930}).addTo(map).bindPopup('France : 43493')
L.circle([46.8182,8.2275],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:210000}).addTo(map).bindPopup('Switzerland : 21000')
L.circle([46.8625,103.8467],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:90}).addTo(map).bindPopup('Mongolia : 9')
L.circle([47.14,9.55],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:550}).addTo(map).bindPopup('Liechtenstein : 55')
L.circle([47.1625,19.5033],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:4580}).addTo(map).bindPopup('Hungary : 458')
L.circle([47.4116,28.3699],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:7550}).addTo(map).bindPopup('Moldova : 755')
L.circle([47.5162,14.5501],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:118720}).addTo(map).bindPopup('Austria : 11872')
L.circle([47.862,127.7615],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:5080}).addTo(map).bindPopup('Heilongjiang,China : 508')
L.circle([48.0196,66.9237],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:6040}).addTo(map).bindPopup('Kazakhstan : 604')
L.circle([48.3794,31.1656],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:6010}).addTo(map).bindPopup('Ukraine : 601')
L.circle([48.669,19.699],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3550}).addTo(map).bindPopup('Slovakia : 355')
L.circle([49.3723,-2.3644],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2950}).addTo(map).bindPopup('Channel Islands,United Kingdom : 295')
L.circle([49.8153,6.1296],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:30070}).addTo(map).bindPopup('Luxembourg : 3007')
L.circle([49.8175,15.473],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:23710}).addTo(map).bindPopup('Czechia : 2371')
L.circle([50.8333,4.469936],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:101220}).addTo(map).bindPopup('Belgium : 10122')
L.circle([51.165691,10.451526],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1098000}).addTo(map).bindPopup('Germany : 109800')
L.circle([51.9194,19.1451],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:19440}).addTo(map).bindPopup('Poland : 1944')
L.circle([53.1424,-7.6921],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:92330}).addTo(map).bindPopup('Ireland : 9233')
L.circle([53.7098,27.9534],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:11200}).addTo(map).bindPopup('Belarus : 1120')
L.circle([54.2361,-4.5481],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2300}).addTo(map).bindPopup('Isle of Man,United Kingdom : 230')
L.circle([55.1694,23.8813],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:4300}).addTo(map).bindPopup('Lithuania : 430')
L.circle([56.2639,9.5018],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:55260}).addTo(map).bindPopup('Denmark : 5526')
L.circle([56.8796,24.6032],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2670}).addTo(map).bindPopup('Latvia : 267')
L.circle([58.5953,25.0136],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2060}).addTo(map).bindPopup('Estonia : 206')
L.circle([60.128161,18.643501],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:10050}).addTo(map).bindPopup('Sweden : 1005')
L.circle([60.472,8.4689],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:320}).addTo(map).bindPopup('Norway : 32')
L.circle([61.52401,105.318756],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:55680}).addTo(map).bindPopup('Russia : 5568')
L.circle([61.8926,-6.9118],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1780}).addTo(map).bindPopup('Faroe Islands,Denmark : 178')
L.circle([61.92411,25.748151],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:25000}).addTo(map).bindPopup('Finland : 2500')
L.circle([64.9631,-19.0208],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:15420}).addTo(map).bindPopup('Iceland : 1542')
L.circle([71.7069,-42.6043],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:110}).addTo(map).bindPopup('Greenland,Denmark : 11')

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}