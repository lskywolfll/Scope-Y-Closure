const person = () => {
    // Convertir a una variable "privada"
    // hacer que solo mediante la funcion se pueda cambiar el estado y no desde afuera sin funciones osea practicamente directamente cambiarle su valor
    let guardarNombre = "Name";
    // asegurar los cambios de la variable privada la cual soo se puede modificar por metodos y jamas por valor directo
    const estadoNombre = () => {
        return guardarNombre;
    };
    // Creacion de un pseudo-objeto para manipular estados
    return {
        getName: () => {
            return guardarNombre;
        },
        setName: (nombre) => {
            guardarNombre = nombre;
        },
        estadoNombre
    };
};

nuevaPersona = person();
console.log(nuevaPersona.getName());
nuevaPersona.setName('Rene');
console.log(nuevaPersona.getName());
console.log(nuevaPersona.estadoNombre());