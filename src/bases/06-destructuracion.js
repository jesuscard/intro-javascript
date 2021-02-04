// Desestructuración
// Asignación desestructurante
const persona = {
    nombre: 'Tony',
    clave: 'Ironman',
    edad: 45,
    rango: 'El chivo que más mea'
}

//const { nombre, edad, clave } = persona;


// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornarPersona = ({clave,  nombre, edad, rango = 'Capitan'})=>{
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.333,
            lng: -12.333
        }
    }
}

const  { nombreClave,anios,latlng:{lat, lng}} = retornarPersona(persona);

console.log(nombreClave, anios)

console.log(lat, lng)
