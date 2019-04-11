import React from 'react';
import {ActionCableConsumer} from 'react-actioncable-provider';
import {API_ROOT} from '../constants';
import ThxTxn from "./ThxTxn";

class AllThxTxns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thx_txns: []
    };
    this.handleReceivedThxTxn = this.handleReceivedThxTxn.bind(this)
  };
  
  componentDidMount() {
    fetch(`${API_ROOT}/thx_txns`)
      .then(res =>  res.json() )
      .then(thx_txns => this.setState({ thx_txns }));
  };
  
  handleReceivedThxTxn(response) {
    this.setState({
      thx_txns: [...this.state.thx_txns, response.thx_txn],
    });
  };
  
  render() {
    let { thx_txns } = this.state;
    return (
      <ul>
        {this.acc || (this.acc = <ActionCableConsumer channel={{channel: 'ThxTxnsChannel'}} onReceived={this.handleReceivedThxTxn} />)}
        {mapThxTxns(thx_txns)}
      </ul>
    );
  };
}

export default AllThxTxns;

const mapThxTxns = (thx_txns) => {
  return thx_txns.map(thx_txn => {
    return (
      <ThxTxn data={ thx_txn } key={ thx_txn.id } />
    );
  });
};
