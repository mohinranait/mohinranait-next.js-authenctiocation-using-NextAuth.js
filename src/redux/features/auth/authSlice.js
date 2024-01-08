'use client'
const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
    name : 'auth',
    initialState : {
        isLoading : false,
        user : {},
        isError : null,
    },
    reducers : {
        userRequest : (state) => {
            state.isLoading = true;
        },
        userSuccess: (state,action) => {
            state.isLoading = false;
            state.user = action.payload
        },
        userError: (state,action) => {
            state.isLoading = false;
            state.isError = action.payload
        },
    }
})


export const { userRequest, userSuccess, userError } = authSlice.actions

export default  authSlice.reducer