//Objetos literales o diccionarios
//key-value
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad:'New York',
        zip:  554353453,
        lat: 14.4444,
        lng: 13.4444
    } 
}

//console.table(persona)



const persona2 = {...persona} //operador de ppropagación o spread operator, permite clonar un objeto y modificarlo
persona2.nombre = 'Peter'

console.log( persona )
console.log( persona2 )