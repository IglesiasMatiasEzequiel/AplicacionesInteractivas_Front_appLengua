const urlApi = process.env.BACKEND_APP_URL || "http://localhost:8000"; //"https://apilenguaback.herokuapp.com";

const endpoints = {
   //auth endpoints
    login:`${urlApi}/api/auth/login`,
    register:`${urlApi}/api/auth/register`,

    //User endpoints
    findUserByUsername:`${urlApi}/api/usuarios/find`,
    listAllUsers:`${urlApi}/api/usuarios/list`,

    //Juegos endpoints
    listJuegos:`${urlApi}/api/juegos/list`,
    getJuegoById:`${urlApi}/api/juegos/getById`,

    //Participacion endpoints
    createParticipacion:`${urlApi}/api/participacion/create`,
    listRanking:`${urlApi}/api/participacion/listRanking`,
    listRankingByJuego:`${urlApi}/api/participacion/listRankingByJuego`
}

export default endpoints;