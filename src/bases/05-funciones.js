//Funciones en JS
//no creaer funciones usando function simplemnte, sino usar una constant
const saludar = function(nombre) {
    return `Hola ${nombre}`
}


const saludar2 = (nombre) => {
    return `Hola ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola pequeña`;

console.log(saludar('Jesus'))
console.log(saludar2('Chubeto'))
console.log(saludar3('Petra'))
console.log(saludar4())

const getUser = ()=> ({
    uid:'ABC123',
    userName:'elquemasmeo'
})

console.log(getUser())

//tarea
//transformar  en función de flecha
//retornar objeto implicito
//pruebas
// function getUsuarioActivo(nombre) {
//     return {
//         iud:'ABC567',
//         username: nombre
//     }
    
// }

//const usuarioActivo = getUsuarioActivo('Jesus Roberto')

const getUsuarioActivo = (nombre) =>({
    iud:'ABC567',
    username: nombre
})

console.log(getUsuarioActivo('Jesus Roberto'))
