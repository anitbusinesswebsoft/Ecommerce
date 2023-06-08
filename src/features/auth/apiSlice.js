import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from "axios"
const initialState = {
    data: null,
    loading: false,
    error: null,
    msg: null
}

const apiSlice = createSlice({
    name: 'api',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchApiData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchApiData.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.loading = false;
                    state.data = action.payload;
                    state.error = !action.payload.status;
                    state.msg = action.payload.msg;
                } else {
                    state.loading = false;
                    state.error = !action.payload.status;
                    state.msg = action.payload.msg;
                }
            })
            .addCase(fetchApiData.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.msg = action.error.message;
            });
    },
});

export const fetchApiData = createAsyncThunk('api/fetchData', async (apiData) => {
    try {
        const { apiUrl, bodyOfRequest, method } = apiData
        console.log("api", apiUrl);
        let response
        if (method === 'GET') {
            response = await axios.get(apiUrl);
        } else if (method === 'POST') {
            response = await axios.post(apiUrl, bodyOfRequest);
        }

        return response.data;
    } catch (error) {
        console.log("error ", error);
        throw new Error(error.message);
    }
});

export default apiSlice.reducer;
