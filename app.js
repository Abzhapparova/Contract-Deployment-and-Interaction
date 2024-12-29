const Web3 = require('web3'); // Подключение библиотеки
const web3 = new Web3('http://127.0.0.1:7545'); // URL Ganache

console.log('Connecting to Ganache...');

web3.eth.getAccounts()
    .then((accounts) => {
        console.log('Available accounts:', accounts);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });
    async function checkBalances() {
        const accounts = await web3.eth.getAccounts(); // Получение списка аккаунтов
        console.log('Accounts:', accounts);
    
        for (const account of accounts) {
            const balance = await web3.eth.getBalance(account); // Получение баланса
            console.log(`Account: ${account}, Balance: ${web3.utils.fromWei(balance, 'ether')} ETH`);
        }
    }
    
    checkBalances();
    