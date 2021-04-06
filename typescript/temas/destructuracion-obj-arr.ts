(function(){
   
    const avenger={
        nombre: 'steve',
        clave: 'capitan america',
        poder: 'droga'
    }

    console.log(avenger.nombre);
    console.log(avenger.clave);
    console.log(avenger.poder);

    // const{nombre, clave, poder}= avenger;    

    // console.log(nombre);
    // console.log(clave);
    // console.log(poder);


    const{nombre, poder}= avenger;    

    console.log(nombre);
    console.log(poder);
    
    const extraer= ({nombre, clave, poder}: any) =>{
        console.log(nombre);
        console.log(clave);
        console.log(poder);
    }

    extraer(avenger)

    const avengers: string[]=['thor', 'ironman', 'spiderman']

    console.log(avengers[0]);
    console.log(avengers[1]);
    console.log(avengers[2]);
    
    // const [avenger1, avenger2, avenger3]= avengers;
    
    // console.log(avenger1);
    // console.log(avenger2);
    // console.log(avenger3);

    const [, , avenger3]= avengers;
    
    console.log(avenger3);

    const extraerArr=([avenger1, avenger2, avenger3]: string[])=>{
        console.log(avenger1);
        console.log(avenger2);
        console.log(avenger3);
    }

    extraerArr(avengers);
})();