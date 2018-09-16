import React, { Component } from 'react';
import { web3, contract } from '../utils/web3';

class ItemViewEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            claim_string: ""
        }
    }
    render() {
        const { item } = this.props;
        return (
            <tr>
                <td>{item.id}</td>
                <td>{item.emitter}</td>
                <td>{item.data}</td>
                <td>
                    <div className="input-group">
                    <input type="text" className="form-control" placeholder={item.claim_string}
                    value={this.state.claim_string} onChange={(evt) => this.setState({ claim_string: evt.target.value })} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={() => this.changeClaimString()}>Zmień</button>
                    </div>
                    </div>
                </td>
            </tr>
        );
    }
    changeClaimString() {
        console.log(this.props.item.id, this.state.claim_string);
        contract.methods.setAssetClaimString(this.props.item.id, this.state.claim_string).send({ from: this.props.selectedWallet});
    }
}

export default ItemViewEntry;