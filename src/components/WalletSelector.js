import React, { Component } from 'react';
import './WalletSelector.css';

class WalletSelector extends Component {
    render() {
        return (
            <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Selected wallet: {this.props.selectedWallet ? this.props.selectedWallet : "none"}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        {this.props.accounts.map((account) => {
                    return (
          <a key={account} className="dropdown-item" onClick={() => this.props.selectWallet(account)}>{account}</a>
                    )
        })}
        </div>
      </li>
        );
    }
}

export default WalletSelector;