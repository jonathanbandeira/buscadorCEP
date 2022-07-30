import axios from "axios";

//29313795/json

const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});

export default api;