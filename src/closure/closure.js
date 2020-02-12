const moneyBox = (coins) => {
    var saveCoins = 0;

    saveCoins += coins
    console.log(`MoneyBox: $${saveCoins}`);
};

moneyBox(5);
moneyBox(10);
// closure recuerda los estados que poseia el valor
const moneyBox = () => {
    var saveCoins = 0;
    var saveCoinsTest = 0;
    const countCoins = (coins) => {
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
// myMoneyBox(10, 10);