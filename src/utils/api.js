import axios from "axios";
const BASE_URL="https://www.googleapis.com/customsearch/v1"
const params={
    key:"AIzaSyBCUhDxZblVYWR44KUqMOYQvEfgQWSvA_A",
    cx:"d23fc8e6a19644582",
}


export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload }
    });
    return data;
};