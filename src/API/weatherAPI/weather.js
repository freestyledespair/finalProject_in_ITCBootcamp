
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


// const API = "https://api.openweathermap.org/data/2.5/weather?"
const key = "&appid=75f215a6af0c8a261c1adaed5508ec2e"
// const params = "&q="
// export const GET_WEATHER = API + key + params



const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather?'
})


export const weatherAPI = {
    getWeather(name) {
        return instance.get(`${key}&q=${name}`).then(res => res.data)
    },
}