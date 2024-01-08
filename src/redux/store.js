'use client'
const { configureStore } = require("@reduxjs/toolkit");
const { default: authReducer } = require("./features/auth/authSlice");


const store = configureStore({
    reducer: {
        authReducer : authReducer
    },
})

export default store;