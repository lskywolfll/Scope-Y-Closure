const contruirContador = i => {
    // Closure => mantener un estado anterior y/o cambiarlo mantienendo el ultimo cambio de su estado o valor
    let count = i;

    const mostrarContador = () => {
        console.log(`valor i: ${i}, valor count: ${count++}`);
    };

    return mostrarContador
}

const miContador = contruirContador(1);
miContador();
miContador();
miContador();

const otroContador = contruirContador(10);
otroContador();
otroContador();
otroContador();