import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "9d0ed6787b580938836afcc09d9d0692";

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_Key,
        }
    })

    return data;
};
