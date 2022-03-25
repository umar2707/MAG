import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2IxYzM0ODhjZDhmMjYyMDhkZDA2ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODE1MTAyNCwiZXhwIjoxNjQ4NDEwMjI0fQ.pTjcXu-5EWv3trDvXteVEi_vHnBJFmMbDscOX8VtyJQ";
export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header: {token:`Bearer ${TOKEN}`}
});