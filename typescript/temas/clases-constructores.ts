(function () {

    class Avenger {

        constructor( public nombre: string,
                     public equipo: string,
                     public nombreReal?: string,
                     public puedePelear: boolean= true,
                     public peleasGanadas: number=0){
        }
        
    }

    const antMan: Avenger= new Avenger('Antman', 'Capi');

    console.log(antMan);

})();
