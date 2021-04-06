(function () {
  interface Xmen {
    nombre: string;
    edad: number;
  }

  const enviarMision = (xmen: Xmen) => {
    console.log(`Enviando a  ${xmen.nombre} a la mision`);
  };

  const RegresarAlCuartel = (xmen: Xmen) => {
    console.log(`Enviando a  ${xmen.nombre} al cuartel`);
  };

  let wolvering: Xmen={
      nombre: 'logan',
      edad: 30
  }
enviarMision(wolvering);
RegresarAlCuartel(wolvering);

})();
