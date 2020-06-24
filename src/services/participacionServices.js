import endpoints from './endpoints';
import { getIdUsuario, getToken } from './authenticationServices'

const axios = require('axios');
const authorizationConfig = { headers: { Authorization: 'Bearer ' + getToken() }};

export const createParticipacion = (idJuego, idNivel, puntaje) => {
    try {

        var request = {
            idUsuario: getIdUsuario(), 
            idJuego: idJuego,
            idNivel: idNivel,
            puntaje: puntaje
         }

        return axios.post(endpoints.createParticipacion, request, authorizationConfig);
    } catch (error) {
        console.log(error)
    }
}

export const listRanking = (idJuego) => {
    try {
        return axios.get(idJuego ? (endpoints.listRankingByJuego + '?id=' + idJuego) : endpoints.listRanking, authorizationConfig);
    } catch (error) {
        console.log(error)
    }
}


