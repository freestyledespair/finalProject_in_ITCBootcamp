import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { weatherAPI } from '../../API/weatherAPI/weather';

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (name, { rejectWithValue }) => {
        try {
            const response = await weatherAPI.getWeather(name);
            console.log(response)
            return response
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        country: {},
        isLoading: false,
        error: null,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchWeather.pending, (state) => {
            state.isLoading = true
            state.country = {}
            state.error = null
        })
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.isLoading = false
            state.country = action.payload
            state.error = null
        })
        builder.addCase(fetchWeather.rejected, (state, action) => {
            state.isLoading = false
            state.country = {}
            state.error = action.payload
        });
    },



})


export default weatherSlice.reducer
