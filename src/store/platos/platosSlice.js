import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    platos: [],
    search: [],
    error: null
    
};
  
const platosSlice = createSlice({
    name: 'platos',
    initialState,
    reducers: {
        setPlato: (state, action) => {
            state.platos = action.payload;
        },
        searchPlatos: (state, action) => {
            state.search = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const { setPlato, searchPlatos, setError } = platosSlice.actions;
  
export default platosSlice.reducer;