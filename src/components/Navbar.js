import React, { Component } from 'react';

import WalletSelector from './WalletSelector';

class Navbar extends Component {
    render() {
        return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">CGEx</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Przedmioty</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Oferty</a>
      </li>
      <WalletSelector accounts={this.props.accounts} selectedWallet={this.props.selectedWallet} selectWallet={(address) => this.props.selectWallet(address)}  />
    </ul>
  </div>
</nav>
        );
    }
}
export default Navbar;