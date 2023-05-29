import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from '../features/auth/apiSlice';

const useDynamicApiFetch = (apiUrl, bodyOfRequest, method) => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.api);
    console.log("1___________________", apiUrl, bodyOfRequest, method);
    useEffect(() => {
        console.log("2__________",apiUrl, bodyOfRequest, method);
        dispatch(fetchApiData(apiUrl, bodyOfRequest, method));
    }, [dispatch, apiUrl, bodyOfRequest, method]);

    return { data, loading, error };
};

export default useDynamicApiFetch;
