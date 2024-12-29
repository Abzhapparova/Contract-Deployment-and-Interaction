import Web3 from 'web3';

// Подключение к локальной сети Ganache
const provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
const web3 = new Web3(provider);

// ABI и адрес контракта
const contractABI = [[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "FundsReceived",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "FundsWithdrawn",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
];
const contractAddress = '0xD7ACd2a9FD159E69Bb102A1ca21C9a3e3A5F771B';

// Создание экземпляра контракта
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Функция взаимодействия с контрактом
const interactWithContract = async () => {
    try {
        const accounts = await web3.eth.getAccounts();

        // Отправка 1 ETH в контракт
        console.log('Sending 1 ETH to the contract...');
        await web3.eth.sendTransaction({
            from: accounts[0],
            to: contractAddress,
            value: web3.utils.toWei('1', 'ether'),
        });
        console.log('1 ETH sent to the contract.');

        // Получение баланса контракта
        console.log('Fetching contract balance...');
        const balance = await contract.methods.getBalance().call();
        console.log('Contract balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');

        // Вывод средств владельцем
        console.log('Withdrawing funds from the contract...');
        await contract.methods.withdraw().send({ from: accounts[0] });
        console.log('Funds withdrawn successfully.');

    } catch (error) {
        console.error('Error interacting with the contract:', error.message);
    }
};

interactWithContract();
