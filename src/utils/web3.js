import Web3 from 'web3';
import abi from './abi.json';

export const web3 = (() => {
    if(window.web3)
        return new Web3(window.web3.currentProvider);
    else
        return null;
})();

export const web3ProviderName = (() => {
    if(!window.web3) return "none";
    if(window.web3.currentProvider.isMetaMask) return "MetaMask";
    if(window.mist) return "Mist";
    if(window.web3) return "web3";
})();

export const contract = (() => {
    if(web3) {
        return new web3.eth.Contract(abi, "0x7ca65a364874a6e092eeabaf59d23c0f62dc3791");
    }
    return null;
})();