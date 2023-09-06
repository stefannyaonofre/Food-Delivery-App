import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
        uid: null,
        email: null,
        displayName: null,
        birthDate:null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: ( state, { payload } ) => {
            state.status = 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.birthDate = payload.birthDate;
            state.phone = payload.phone;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        // addNewUser:(state,{payload}) =>{
        //     state.status = 'authenticated', // checking
        //     state.uid = payload.uid;
        //     state.userSave= true;
        //     state.email = payload.email;
        //     state.displayName = payload.displayName;
        //     state.date = payload.date;
        //     state.phone = payload.phone;
        //     state.photoURL = payload.photoURL;
        // },
        logout: ( state, {payload} ) => {
            state.status = 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.birthDate = null;
            state.phone = null;
            state.photoURL = null;
            state.errorMessage = payload;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials, addNewUser } = authSlice.actions;