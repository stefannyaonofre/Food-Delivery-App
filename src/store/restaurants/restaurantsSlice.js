import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    restaurants: [],
    search: [],
    error: null
    
};
  
const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        setRestaurant: (state, action) => {
            state.restaurants = action.payload;
        },
        searchRestaurants: (state, action) => {
            state.search = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const { setRestaurant, searchRestaurants, setError } = restaurantsSlice.actions;
  
export default restaurantsSlice.reducer;