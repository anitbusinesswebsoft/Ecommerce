import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import apiReducer from "../features/auth/apiSlice"

export const store = configureStore({
    reducer:{
        auth: authReducer,
        api: apiReducer
    }
})