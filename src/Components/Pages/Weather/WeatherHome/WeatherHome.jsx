import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../../../store/slices/weatherSlice';
// import WeatherOutput from '../WeatherOutput/WeatherOutput';
import s from './WeatherHome.module.css'

const WeatherHome = () => {
    const [input, setInput] = useState("")
    const { country, isLoading } = useSelector(state => state?.weather)
    const dispatch = useDispatch()
    // console.log(input);
    // console.log(output)

    const search = () => {
        dispatch(fetchWeather(input))
    }

    return (
        <div>
            <div>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Название города...' />
                <button onClick={search}>Search</button>
            </div>


            <div>
                {
                    !isLoading ?
                        <div key={country?.cod} className={s.title_cont}>
                            {/* <h2>{country?.name}</h2>
                            <h2>Coord-lon: {country.coord?.lon}</h2>
                            <h2>Coord-lon: {country.coord?.lat}</h2>
                            <h2>Temp: {country.main?.temp}</h2>
                            <h2>wind deg: {country.wind?.deg}</h2>
                            <h2>Wind gust {country.wind?.gust}</h2>
                            <h2>description: {country.weather[0].description}</h2> */}

                            <h2 className={s.cityName}>{country?.name}</h2>
                            <h2 className={s.cityData}>{country.coord?.lon || country.coord?.lat ? "Координаты: " + country.coord?.lon + " | " + country.coord?.lat : null}</h2>
                            <h2 className={s.cityData}>{country.main?.temp ? "Температура в Цельсиях: " + Math.floor(country.main?.temp - 273.15) : null}</h2>
                            <h2 className={s.cityData}>{country.main?.temp ? "Температура в Фаренгейтах: " + Math.floor(((country.main?.temp - 273.15) * 1.8) + 32) : null}</h2>
                            <h2 className={s.cityData}>{country.wind?.deg ? "wind deg: " + country.wind?.deg : null}</h2>
                            <h2 className={s.cityData}>{country.wind?.deg ? "wind gust: " + country.wind?.gust : null}</h2>
                            {/* <h2 className={s.cityName}>{country.weather[0]?.description ? "description: " + country?.weather[0]?.description : null}</h2> */}

                        </div>
                        :
                        <h1>Loading...</h1>

                }
            </div>

        </div>



    );
};

export default WeatherHome;