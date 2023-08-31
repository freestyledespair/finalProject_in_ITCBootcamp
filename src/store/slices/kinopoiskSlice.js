
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { filmsAPI } from '../../API/kinopoiskAPI/kinoAPI';


export const fetchMovieData = createAsyncThunk(
    'films/fetchData',
    async (page, { rejectWithValue }) => {
        try {
            const response = await filmsAPI.getAllFilms(page);
            console.log(response);
            return response
            // console.log(response.items);
        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
);

export const detailFilms = createAsyncThunk(
    'films/detailFilms',
    async (id, { rejectWithValue }) => {
        try {
            const response = await filmsAPI.getFilmDetail(id);
            return response
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const searchFilm = createAsyncThunk(
    "films/searchFilm",
    async (obj, { rejectWithValue }) => {
        // console.log(obj);
        try {
            const res = await filmsAPI.searchFilmByName(obj.searchQuery, obj.page)
            return res;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)




const filmsSlice = createSlice({
    name: 'films',
    initialState: {
        pagesCount: 20,
        fetchName: 'fetchMovieData',
        films: [],
        filmDetail: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        toggleFetchName(state, action) {
            state.fetchName = 'fetchMovieData'
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovieData.pending, (state) => {
            state.isLoading = true
            state.films = []
            state.error = null
        })
        builder.addCase(fetchMovieData.fulfilled, (state, action) => {
            state.isLoading = false
            state.films = action.payload.items
            state.pagesCount = action.payload.totalPages
            state.fetchName = 'fetchMovieData'
            state.error = null
            console.log(action.payload);
        })
        builder.addCase(fetchMovieData.rejected, (state, action) => {
            state.isLoading = false
            state.films = []
            state.error = action.payload
        });
        builder.addCase(detailFilms.pending, (state) => {
            state.isLoading = true
            state.filmDetail = []
            state.error = null
        })
        builder.addCase(detailFilms.fulfilled, (state, action) => {
            state.isLoading = false
            state.filmDetail = action.payload
            state.error = null
        })
        builder.addCase(detailFilms.rejected, (state, action) => {
            state.isLoading = false
            state.filmDetail = []
            state.error = action.payload
        });
        builder.addCase(searchFilm.pending, (state) => {
            state.isLoading = true
            state.films = []
            state.error = null
        })
        builder.addCase(searchFilm.fulfilled, (state, action) => {
            state.isLoading = false
            state.films = action.payload.films
            state.pagesCount = Math.ceil(action.payload.searchFilmsCountResult / 20)
            console.log(action.payload);
            state.fetchName = 'searchFilm'
            state.error = null
        })
        builder.addCase(searchFilm.rejected, (state, action) => {
            state.isLoading = false
            state.films = []
            state.error = action.payload
            console.log(action.payload);
        });
    },
});


export const { toggleFetchName } = filmsSlice.actions


export default filmsSlice.reducer