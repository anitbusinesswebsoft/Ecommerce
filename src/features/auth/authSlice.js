import { createSlice, createSelector } from "@reduxjs/toolkit"

const initialState = {
    value: 0,
    isAuthenticated: false,
    token: ""
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authenticated: (state, action) => {
            localStorage.setItem("token",action.payload.token )
            state.isAuthenticated = action.payload.status;
            state.token = action.payload.token
        }
    }
})

export const { authenticated } = authSlice.actions

export const tokenSelector = createSelector(
    (state) => state.auth.token,
    (token) => token
  );
export default authSlice.reducer
