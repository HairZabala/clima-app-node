const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'nombre de la ciudad para mostrar el clima',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}