"use strict";
(function () {
    const enviarMision = (xmen) => {
        console.log(`Enviando a  ${xmen.nombre} a la mision`);
    };
    const RegresarAlCuartel = (xmen) => {
        console.log(`Enviando a  ${xmen.nombre} al cuartel`);
    };
    let wolvering = {
        nombre: 'logan',
        edad: 30
    };
    enviarMision(wolvering);
    RegresarAlCuartel(wolvering);
})();
