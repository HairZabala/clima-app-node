const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=fb6ac163b9da8db7de112dfcddf5cab4&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}