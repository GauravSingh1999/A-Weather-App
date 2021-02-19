
const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');


const getInfo = async(e) => {
    e.preventDefault();
    e.stopPropogation();
    let city = cityName.nodeValue;

    if(city =="")
    {
        city_name.innerText = 'plz write the city name before search';

    }
    else{
        try{
            let url = 'api.openweathermap.org/data/2.5/weather?q=${city}&appid= 31503bd4f9c57efa3aba8cfde027fd4d';
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = '${arrData[0].name},${arrData[0].sys.country}';
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;

            console.log(data);
        }
        catch{
            city_name.innerText = 'plz enter the city name before search';
        }
    }
}
submitBtn.addEventListener('click',getInfo);