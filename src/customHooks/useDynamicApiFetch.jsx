import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from '../features/auth/apiSlice';

const useDynamicFetchApi = (apiUrl, bodyOfRequest, method) => {
    const dispatch = useDispatch();
    const { data, loading, error, msg } = useSelector((state) => state.api);

    useEffect(() => {
        if (!bodyOfRequest) {
            return
        }
        dispatch(fetchApiData(
            {
                apiUrl: import.meta.env.VITE_API_URL + apiUrl,
                bodyOfRequest,
                method
            }
        ));

    }, [apiUrl, bodyOfRequest, method]);

    return { data, loading, error, msg };
};

export default useDynamicFetchApi;
