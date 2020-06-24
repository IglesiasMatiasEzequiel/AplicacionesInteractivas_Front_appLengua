import endpoints from './endpoints';
const axios = require('axios');

export const register = async (userData) => {
    try {
        const response = await axios.post(endpoints.register, { 
            username: userData.username, 
            password: userData.password 
        });

        setToken(response.data.token);
        setActiveSession(true);
        setSessionName(userData.username);
        setIdUsuario(response.data.idUsuario);

        return response;
    } catch (error) {
        console.log(error)
    }
}

export const login = async (userData) => {
    try {
        const response = await axios.post(endpoints.login, { 
            username: userData.username, 
            password: userData.password 
        });

        setToken(response.data.token);
        setActiveSession(true);
        setSessionName(userData.username);
        setIdUsuario(response.data.idUsuario);

        return response;
    } catch (error) {
        if (error.response) {
            return error.response;
        }
    }
}

// Non api internal functionalities
export const isConnected = () => getActiveSession();
export const logOut = (cb) => {
    removeToken();
    removeActiveSession();
    removeSessionName();
    removeIdUsuario();
    setTimeout(cb, 100);
}

//Token methods
export const getToken = () => sessionStorage.getItem('token');
export const setToken = (value) => sessionStorage.setItem('token', value);
export const removeToken = () => sessionStorage.removeItem('token');

//ActiveSession methods
export const getIdUsuario = () => localStorage.getItem('idUsuario');
export const setIdUsuario = (value) => localStorage.setItem('idUsuario', value);
export const removeIdUsuario = () => localStorage.removeItem('idUsuario');

//ActiveSession methods
export const getActiveSession = () => localStorage.getItem('activeSession');
export const setActiveSession = (value) => localStorage.setItem('activeSession', value);
export const removeActiveSession = () => localStorage.removeItem('activeSession');

//SessionName methods
export const getSessionName = () => localStorage.getItem('sessionName');
export const setSessionName = (value) => localStorage.setItem('sessionName', value);
export const removeSessionName = () => localStorage.removeItem('sessionName');


