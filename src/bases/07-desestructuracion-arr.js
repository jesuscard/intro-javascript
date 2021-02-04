const personajes = ['Goku', 'Vegeta','Trunks']

const [ , , p3 ] =  personajes

//console.log(p3)
// console.log(personajes[0])
// console.log(personajes[1])
// console.log(personajes[2])

const retornaArreglo = () =>{
    return['ABC',123]
}

const [ letras, numeros] = retornaArreglo();
//console.log(letras, numeros)

//Tarea

const devolverArreglo = (valor) =>{
    return[ valor, ()=>{console.log('hola Mundo')}]
}

const arr = devolverArreglo( 'Goku');
console.log(arr)