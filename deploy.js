import Web3 from 'web3'; // Импортируем Web3

// Подключаемся к локальной сети Ganache
const provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
const web3 = new Web3(provider);

// ABI и байткод вашего контракта
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
]];
const contractBytecode = "608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506103cd806100606000396000f3fe6080604052600436106100385760003560e01c806312065fe0146100925780633ccfd60b146100bd5780638da5cb5b146100d45761008d565b3661008d573373ffffffffffffffffffffffffffffffffffffffff167f8e47b87b0ef542cdfa1659c551d88bad38aa7f452d2bbb349ab7530dfec8be8f34604051610083919061032f565b60405180910390a2005b600080fd5b34801561009e57600080fd5b506100a76100ff565b6040516100b4919061032f565b60405180910390f35b3480156100c957600080fd5b506100d2610107565b005b3480156100e057600080fd5b506100e9610272565b6040516100f691906102f4565b60405180910390f35b600047905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610195576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018c9061030f565b60405180910390fd5b600047905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610200573d6000803e3d6000fd5b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167feaff4b37086828766ad3268786972c0cd24259d4c87a80f9d3963a3c3d999b0d82604051610267919061032f565b60405180910390a250565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61029f8161035b565b82525050565b60006102b260178361034a565b91507f4f6e6c79206f776e65722063616e2077697468647261770000000000000000006000830152602082019050919050565b6102ee8161038d565b82525050565b60006020820190506103096000830184610296565b92915050565b60006020820190508181036000830152610328816102a5565b9050919050565b600060208201905061034460008301846102e5565b92915050565b600082825260208201905092915050565b60006103668261036d565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600081905091905056fea2646970667358221220e3ec6c4b750126048da9f66c9e194cbe30619f76c27c57b8b80108253548ea7a64736f6c63430008000033"


// Функция для развертывания контракта
const deployContract = async () => {
    try {
        const accounts = await web3.eth.getAccounts(); // Получаем аккаунты
        console.log('Deploying contract from account:', accounts[0]);

        const contract = new web3.eth.Contract(contractABI);

        const deployedContract = await contract
            .deploy({
                data: contractBytecode,
            })
            .send({
                from: accounts[0],
                gas: 1500000,
                gasPrice: '30000000000', // 30 Gwei
            });

        console.log('Contract deployed at:', deployedContract.options.address);
    } catch (error) {
        console.error('Error deploying contract:', error.message);
    }
};

deployContract();
