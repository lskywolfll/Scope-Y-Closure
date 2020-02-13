var saludo = 'Hello';

function hello(){
    let saludoCompleto = 'Hello World';
    const saludoCompletoGritandoBajo = 'Hello World!';
    if(true){
        let saludoCompletoGritandoMedio = 'Hello World!!';
        debugger
    }
}

hello();

const moneyBox = () => {
    debugger
    var saveCoins = 0;
    var saveCoinsTest = 0;
    const countCoins = (coins) => {
        debugger
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    };

    const countTest = (coins, other) => {
        saveCoinsTest += coins + other;
        console.log(`saveCoinsTest: ${saveCoinsTest}`);
    };
    // el return ejecuta la funcion anonima con los parametros que piden por el cual nosotros ingresamos por el moneybox
    return countCoins
};

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);