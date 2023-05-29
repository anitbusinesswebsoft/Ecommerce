import { createSlice } from '@reduxjs/toolkit';
import axios from "axios"
import { createAsyncThunk } from '@reduxjs/toolkit';

const apiSlice = createSlice({
    name: 'api',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        fetchDataStart(state) {
            state.loading = true;
        },
        fetchDataSuccess(state, action) {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchDataFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const fetchApiData = createAsyncThunk('api/fetchData', async (apiUrl, bodyOfRequest, method) => {
    try {
        console.log("In Thunk Fn", apiUrl, bodyOfRequest, method);
        let response
        if (method === 'GET') {
            response = await axios.get(apiUrl);
        } else if (method === 'POST') {
            response = await axios.post(apiUrl, bodyOfRequest);
        }
        console.log("resp__________", response);


        if (!response.ok) {
            throw new Error('API request failed');
        }
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        throw new Error(error.message);
    }
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = apiSlice.actions;
export default apiSlice.reducer;