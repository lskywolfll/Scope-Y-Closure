const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
};

helloWorld();
// funcion a ser ejecutada luego que se vacie el call stack con todo el recodirrido que debe hacer javascript andes de poder ejecutar el resto de cosas del event-loop o queue task
setTimeout(() => {
    console.log(hello);
}, 0);

var scope = "i am global";
// ambito lexico => se refiere a que solo viviran en este campo del bloque
const functionScope = () => {
    // Desde aqui y cuando se llame a scope estara llamando solo en este ambito y no al global
    var scope = " i am just a local";
    const func = () => {
        return scope
    };
    // aqui se llamara solo al => i am just a local por que esta dentro de solo este ambito lexico de funcion 
    console.log(func());
};

functionScope();
// aqui se llama al global scope => i am global
console.log(scope);