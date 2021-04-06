(function(){
   const retirarDinero = (valorRetirar: number): Promise<number> =>{

    let saldoCuenta: number= 1000;

       return new Promise((resolve, reject)=>{
        
        if (valorRetirar> saldoCuenta) {
            reject('no hay saldo suficiente para el retiro');
        } else {
            saldoCuenta-=valorRetirar;
            resolve(saldoCuenta);
        }

       });
   }

   retirarDinero(1500).then(montoActual => console.log(`el nuevo saldo es ${montoActual}`))
   .catch(console.warn);

})();