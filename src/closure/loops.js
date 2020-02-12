
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