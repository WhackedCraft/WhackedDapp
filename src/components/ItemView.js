import React, { Component } from 'react';

import ItemViewEntry from './ItemViewEntry';

class ItemView extends Component {
    render() {
        return (
            <div>
                
                {this.props.items ? <table className="table">
                <thead>
                    <tr>
                    <th>Asset ID</th>
                    <th>Emitter</th>
                    <th>Data</th>
                    <th>Claim string</th>
                    </tr>
                </thead><tbody>{this.props.items.map((item, key) => {
                    return (<ItemViewEntry key={key} item={item} selectedWallet={this.props.selectedWallet} />);
                })}</tbody></table> : <div>Item array is null.</div>}
            </div>
        );
    }
}
export default ItemView;