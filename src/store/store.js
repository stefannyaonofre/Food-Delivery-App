//fuente unica de la verdad
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import restaurantsReducer from './restaurants/restaurantsSlice';
import platosReducer from './platos/platosSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    restaurants: restaurantsReducer,
    platos: platosReducer,
  },
})