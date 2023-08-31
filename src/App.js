import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Cocktails from './Components/Pages/Cocktails/Cocktails';
import Detail from './Components/Pages/Cocktails/Detail/Detail';
import Ingredients from './Components/Pages/Cocktails/Ingredients/Ingredients';
import FilmDetail from './Components/Pages/Kinopoisk/FilmDetail/FilmDetail';
import Kinopoisk from './Components/Pages/Kinopoisk/Kinopoisk';
import WeatherHome from './Components/Pages/Weather/WeatherHome/WeatherHome';
import { fetchCocktails } from './store/slices/cocktailsSlice';
import Header from './Components/Header/Header';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCocktails())
    // dispatch(fetchWeather(name))
  }, [dispatch])


  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cocktails' element={<Cocktails />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path='/ingredients/:name' element={<Ingredients />} />
        <Route path='/films/' element={<Kinopoisk />} />
        <Route path='/film-detail/:id' element={<FilmDetail />} />
        <Route path='/weathers' element={<WeatherHome />} />
        <Route path="*" element={<h1>Not found 404 (Click on title)</h1>} />
      </Routes>

    </div>
  );
};

export default App;