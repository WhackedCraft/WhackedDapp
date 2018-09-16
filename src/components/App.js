import React, { Component } from 'react';
import { web3, web3ProviderName, contract } from '../utils/web3';
import ItemView from './ItemView';
import './App.css';

import Navbar from './Navbar.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        accounts: [],
        selectedWallet: null,
        items: []
    };
    web3.eth.getAccounts().then((accounts) => this.setState({ accounts }));
  }
  render() {
    return (
      <div>
      <Navbar accounts={this.state.accounts} selectedWallet={this.state.selectedWallet} selectWallet={(address) => this.selectWallet(address)} />
      <ItemView selectedWallet={this.state.selectedWallet} items={this.state.items} />
      </div>
    );
  }
  selectWallet(account) {
      this.setState({ selectedWallet: account, items: null });
      this.getItems(account);
  }
  async getItems(account) {
    contract.methods.getUserInventory(account).call().then(async (items) => {
      let itemsdata = [];
      for(let i in items) {
        let emitter = await contract.methods.getAssetEmmiter(items[i]).call();
        let data = await contract.methods.getAssetData(items[i]).call();
        let claim_string = await contract.methods.getAssetClaimString(items[i]).call();
        itemsdata.push({ id: items[i], emitter, data, claim_string });
      }
      this.setState({ items: itemsdata });
    });
  }
}

export default App;
