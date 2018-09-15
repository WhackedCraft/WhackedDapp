import web3 from 'web3';

export const web3 = (() => {
    if(window.web3)
        return new Web3(window.web3.currentProvider);
    else
        return null;
})();

export const web3ProviderName = (() => {
    if(window.web3.currentProvider.isMetaMask) return "MetaMask";
    if(window.mist) return "Mist";
    if(window.web3) return "web3";
})();