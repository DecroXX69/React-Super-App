import axios from 'axios';

const BASE_URL = "https://api.weatherapi.com/v1";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function fetchWeather() {
    try {
       
        const getPosition = () => {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });
        };

        const position = await getPosition();
        const { latitude, longitude } = position.coords;
        const city='bengaluru'
        const { data } = await axios.get(`${BASE_URL}/current.json`, {
            params: {
                key: API_KEY,
                q: latitude!=null && longitude!=null?`${latitude},${longitude}`:city
            }
        });

        return data;
    } catch (error) {

        

        console.log(error)

        if(error.code===1)
            
    {
        const city='bengaluru'
        const { data } = await axios.get(`${BASE_URL}/current.json`, {
            params: {
                key: API_KEY,
                q:city
            }
        });
        return data
    }
       

    else console.log(error)
    }
}
