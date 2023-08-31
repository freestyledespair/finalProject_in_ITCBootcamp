import { configureStore } from "@reduxjs/toolkit";
import cocktailsSlice from "./slices/cocktailsSlice";
import filmsSlice from './slices/kinopoiskSlice';
import weatherSlice from "./slices/weatherSlice";


const store = configureStore({
    reducer: {
        cocktails: cocktailsSlice,
        films: filmsSlice,
        weather: weatherSlice
    }
})

export default store;