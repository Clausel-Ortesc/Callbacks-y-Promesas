const paises = ['Francia', 'España', 'Holanda', 'Argentina', 'Brasil']

function nuevoPais(pais, callback) {//callback no es una palabra reservada por lo cual se puede usar como parametro

    setTimeout(()=>{
        paises.push(pais)
        callback();
    },2000)
}

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais)
        })
    }, 2000)
}
//mostrarPaises();

//nuevoPais('Alemania', mostrarPaises) //se agrega un nuevo elemento a la funcion y a la vez se manda a llamar la otra funcion, en cuestion de sintaxis primero se crea una funcion(mostrarPaises) y despues se crea la funcion donde va el callback (nuevoPais).

function iniciarCallbackHell(){
    setTimeout(()=>{
        //agregar un pais
        nuevoPais('Alemania', mostrarPaises);
        setTimeout(()=>{
            nuevoPais('Colombia', mostrarPaises);
            setTimeout(()=>{
                nuevoPais('Bolivia', mostrarPaises);
            },3000)

        },3000)
    },3000)
}
iniciarCallbackHell();