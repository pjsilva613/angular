(function(){

    const mifuncion = function(a: string){
        return a.toUpperCase();
    }

    const mifuncion2 = (a: string)=>a.toUpperCase();

    console.log(mifuncion('funcion normal'));
    console.log(mifuncion2('funcion flecha'));

    

    const mifuncionsumar = function(a: number, b: number){
        return a+b;
    }

    const mifuncionsumar2 = (a: number, b: number)=>a+b;

    console.log(mifuncionsumar(5, 5));
    console.log(mifuncionsumar2(10, 10));

    const hulk={
        nombre: 'hulk',
        smash(){
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!!`);
            }, 1000);            
        }
    }

    hulk.smash();

})();