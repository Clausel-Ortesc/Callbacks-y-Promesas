//const aplicarDesc = new promise((resolve, reject) => {//resolve cuando se cumple la promesa y reject cuando no es cumplida
//    const descuento = true
//    if (descuento) {
//        resolve('Descuento aplicado')
//    } else
//        reject('no se pudo aplicar el descuento')
//})
//aplicarDesc
//    .then(resultado => {
//        console.log(resultado)
//    }).catch(error => {
//        console.log(error)
//    })
//
//console.log(aplicarDesc)

//Hay 3 posibles valores en las promesas
//resulto=true
//rechazado=false
//pendiente= que a un no se ha cumplido pero tampoco rechazado
// .then (entonces) la accion que se realiza en la promesa 
//y siempre que la promesa falla tenemos acceso al .catch

const paises = []

const nuevoPais = pais => new Promise(resolve=> {
    setTimeout(() => {
        paises.push(pais)
        resolve(`Agregado ${pais}`)
    }, 3000)
})

nuevoPais('Alemania')
    .then(resultado => {
        console.log(resultado)
        console.log(paises)
        return nuevoPais('Francia')
    })
    .then(resultado => {
        console.log(resultado)
        console.log(paises)
        return nuevoPais('Inglaterra')
    })
    .then(resultado => {
        console.log(resultado)
        console.log(paises)
    })