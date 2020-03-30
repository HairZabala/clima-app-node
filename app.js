const lugar = require('./lugar/lugar.js');
const argv = require('./config/yargs').argv;
const clima = require('./clima/clima.js');


const getInfo = async(direccion) => {

    let getLugar = await lugar.getLugar(direccion);
    let getClima = await clima.getClima(getLugar.lat, getLugar.lng);
    return getClima;

}

getInfo(argv.direccion)
    .then(resp => console.log(`El clima de ${argv.direccion} es de ${resp}`))
    .catch(err => console.log(`No se pudo determinar el clima de ${argv.direccion}`));