App = {
    loading:false,
    contracts: {},

    load: async() => {
        await App.loadWeb3()
        await App.loadAccount()
        await App.loadContract()
        await App.render()
    },

    loadWeb3: async() => {
        if(typeof web3 !== 'undefined'){
            App.w3Provider = web3.currentProvider
            web3 = new Web3(web3.currentProvider)
        }else {
            window.alert("Please Connect to Metamask.")
        }

        if(window.ethereum) {
            window.web3 = new Web3(ethereum)
            try {
                await ethereum.enable()
                web3.eth.sendTransaction({})
            } catch(error) {

            }
        }
        // Legacy dapp browsers
        else if(window.web3) {
            App.web3Provider = web3.currentProvider
            window.web3 = new Web3(web3.currentProvider)
            web3.eth.sendTransaction({})
        }

        else{
            console.log('Non-Ethereum Browser detected.You should consider trying MetaMask!')
        }
    }
}