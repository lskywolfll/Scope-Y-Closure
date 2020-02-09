const fruits = () => {
    if(true){
        // el var se convierte una variable local dentro de la funcion fruits pero para let y const no se podra hacer por que no permaneces dentro del scope de la funcion sino desde el bloque por el cual fueron creados
        var fruits1 = 'apple';
        // al no usar var, el let y const se convertiran en ambitos lexicos por bloque, osea solo viviran dentro de este bloque y no podran existir fuera de este bloque
        // Ya que el hoisting vive solo con var y funciones => ayuda de js que solo provoca malos usos ya que si no existen variables este nos lo crea con una asignacion de undefined por lo cual siempre usar let o const para evitar casos extremas de malos usos
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        console.log(fruits2);
        console.log(fruits3);
    }

    console.log(fruits1);
};

fruits();

let numero = 1;
// si se intercambian por var ambos entonces se sobreescribiran por el hoisting, que es esta ayudita que nos da js pero en ciertos casos solo provoca errores 
// solo vive dentro de este bloque
// Inicio Bloque
{
    let numero = 2;
    console.log(numero);
}
// fin Bloque
console.log(numero);

const anortherFunction = () => {
    // al usar var en posicion cada vez que se itere esta sobreescribiendo el valor por el cual inicializo el evento de mostrar en pantalla
    // en cambio al usar let a la posicion este nos dejara gravado el valor que tenia en esa instancia sin intercambiar nunca saliendonos del hoisting
    for (let posicion = 0; posicion < 10; posicion++){
        setTimeout(() => {
            console.log(posicion);;
        }, 1000);
    }
    
};

anortherFunction();