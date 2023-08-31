import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCocktails = createAsyncThunk(
    'cocktails/fetchCocktails',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
            return res.data.drinks

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const detailCocktail = createAsyncThunk(
    'cocktails/detailCocktail',
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            return res.data.drinks[0]
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const ingredientCocktail = createAsyncThunk(
    'cocktails/ingredientCocktail',
    async (name, { rejectWithValue }) => {
        try {
            const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`)
            return res.data.ingredients[0];
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const searchCocktail = createAsyncThunk(
    "cocktails/searchCocktail",
    async (name, { rejectWithValue }) => {
        try {
            const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
            return res.data.drinks
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const filterByAlco = createAsyncThunk(
    "cocktails/filterByAlco",
    async (value, { rejectWithValue }) => {
        try {
            const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${value}`)
            return res.data.drinks
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)





const cocktailsSlice = createSlice({
    name: 'cocktails',
    initialState: {
        isLoading: false,
        cocktails: [],
        drinkDetail: {},
        error: null,
        ingredient: {}

    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCocktails.pending, (state, action) => {
            state.isLoading = true
            state.cocktails = []
            state.error = null
        })
        builder.addCase(fetchCocktails.fulfilled, (state, action) => {
            state.isLoading = false
            state.cocktails = action.payload
            state.error = null
        })
        builder.addCase(fetchCocktails.rejected, (state, action) => {
            state.isLoading = false
            state.cocktails = []
            state.error = action.payload
        })

        builder.addCase(detailCocktail.pending, (state, action) => {
            state.isLoading = true
            state.drinkDetail = {}
            state.error = null
        })
        builder.addCase(detailCocktail.fulfilled, (state, action) => {
            state.isLoading = false
            state.drinkDetail = action.payload
            state.error = null
        })
        builder.addCase(detailCocktail.rejected, (state, action) => {
            state.isLoading = false
            state.drinkDetail = {}
            state.error = action.payload
        })

        builder.addCase(ingredientCocktail.pending, (state, action) => {
            state.isLoading = true
            state.ingredient = {}
            state.error = null
        })
        builder.addCase(ingredientCocktail.fulfilled, (state, action) => {
            state.isLoading = false
            state.ingredient = action.payload
            state.error = null
        })
        builder.addCase(ingredientCocktail.rejected, (state, action) => {
            state.isLoading = false
            state.ingredient = {}
            state.error = action.payload
        })

        builder.addCase(searchCocktail.pending, (state, action) => {
            state.isLoading = true
            state.cocktails = []
            state.error = null
        })
        builder.addCase(searchCocktail.fulfilled, (state, action) => {
            state.isLoading = false
            state.cocktails = action.payload
            state.error = null
        })
        builder.addCase(searchCocktail.rejected, (state, action) => {
            state.isLoading = false
            state.cocktails = []
            state.error = action.payload
        })

        builder.addCase(filterByAlco.pending, (state, action) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(filterByAlco.fulfilled, (state, action) => {
            state.isLoading = false
            state.cocktails = action.payload
            state.error = null
        })
        builder.addCase(filterByAlco.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }

})

export default cocktailsSlice.reducer