var hello = 'Hello';
var hello = 'Hello +';
let world = 'hello world';
const helloWorld = 'Hello World!!';

const anortherFunction = () => {
    console.log(`
        hello: ${hello}

        world: ${world}

        helloWorld: ${helloWorld}
    `);
};

anortherFunction();

const helloWorld = () => {
    // mala practica inicializar las variables de esta forma
    globalVar = 'im global'
};

helloWorld();
console.log(globalVar);

const anortherFunction = () => {
    var lovalVar = globalVar = 'Im Global';
};


anortherFunction()

console.log(globalVar);