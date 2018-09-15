import React, { Component } from 'react';
import { web3 } from '../utils/web3';
import './WalletSelector.css';

class WalletSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: [],
            selected: null
        };
        web3.eth.getAccounts().then((accounts) => this.setState({ accounts }));
    }
    render() {
        return (
            <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Selected address: {this.state.selected ? this.state.selected : "none"}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        {this.state.accounts.map((account) => {
                    return (
          <a key={account} className="dropdown-item" onClick={() => this.selectAddress(account)}>{account}</a>
                    )
        })}
        </div>
      </li>
        );
    }
    selectAddress(account) {
        this.setState({ selected: account });
    }
}

export default WalletSelector;