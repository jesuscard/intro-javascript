//promesas
import { getHeroeById } from './bases/08-export-import'

// const promesa = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         //tarea
//         const heroe = getHeroeById(2);
//         resolve(heroe)
//         // reject('no se puede encontrar el heroe')
//     }, 2000);

// });

// promesa.then( (heroe)=>{
//     console.log('then de la promesa', heroe)
// })
// .catch(err => console.warn(err))

const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve, reject)=>{
    setTimeout(() => {
        const heroe = getHeroeById(id);
        if( heroe ){
            resolve(heroe)
        }else{
            reject('No se encontro Heroe')
        }
        
        // reject('no se puede encontrar el heroe')
    }, 2000 );

});
}

getHeroeByIdAsync(3)
    .then(console.log)
    .catch(console.warn)