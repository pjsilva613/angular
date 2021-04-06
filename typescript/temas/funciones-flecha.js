"use strict";
(function () {
    const mifuncion = function (a) {
        return a.toUpperCase();
    };
    const mifuncion2 = (a) => a.toUpperCase();
    console.log(mifuncion('funcion normal'));
    console.log(mifuncion2('funcion flecha'));
    const mifuncionsumar = function (a, b) {
        return a + b;
    };
    const mifuncionsumar2 = (a, b) => a + b;
    console.log(mifuncionsumar(5, 5));
    console.log(mifuncionsumar2(10, 10));
    const hulk = {
        nombre: 'hulk',
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!!`);
            }, 1000);
        }
    };
    hulk.smash();
})();
