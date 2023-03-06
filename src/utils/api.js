import axios from "axios";





const BASE_URL="https://www.googleapis.com/customsearch/v1"
const key=import.meta.env.VITE_APP_GOOGLE_API_KEY
const cx=import.meta.env.VITE_APP_GOOGLE_CX_KEY
const params={
    key,
    cx
}


export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload }
    });
    return data;
};