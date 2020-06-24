import endpoints from './endpoints';
import { getToken } from './authenticationServices'

const axios = require('axios');
const authorizationConfig = { headers: { Authorization: 'Bearer ' + getToken() }};

export const listJuegos = () => {
    try {
        return axios.get(endpoints.listJuegos, authorizationConfig);
    } catch (error) {
        console.log(error)
    }
}

export const getJuegoById = (idJuego) => {
    return axios.get(endpoints.getJuegoById + '?id=' + idJuego, authorizationConfig);
}


