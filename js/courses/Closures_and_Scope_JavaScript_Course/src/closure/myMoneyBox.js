// create a money box using CLOSURES

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const CristopherCount = moneyBox();
const JessCount = moneyBox();

console.log("Cristopher's count: ");
CristopherCount(5);
CristopherCount(19);
CristopherCount(20);
console.log('');

console.log("Jess's count: ");
JessCount(10);
JessCount(25);
JessCount(30);
