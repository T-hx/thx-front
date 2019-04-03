import React from 'react';
import {ActionCableConsumer} from 'react-actioncable-provider';
import {API_ROOT} from '../constants';
import ThxTxn from "./ThxTxn";
import NewThxTxnForm from "./NewThxTxnForm";

class ThxTxnsList extends React.Component {
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
    const { thx_txn } = response;
    this.setState({
      thx_txns: [...this.state.thx_txns, thx_txn],
    });
  };
  
  render() {
    let { thx_txns } = this.state;
    return (
      <div>
        <NewThxTxnForm/>
        <ActionCableConsumer channel={{channel: 'ThxTxnsChannel'}} onReceived={this.handleReceivedThxTxn}>
          <ul>{mapThxTxns(thx_txns)}</ul>
        </ActionCableConsumer>
      </div>
    );
  };
}

export default ThxTxnsList;

const mapThxTxns = (thx_txns) => {
  return thx_txns.reverse().map(thx_txn => {
    return (
      <ThxTxn data={ thx_txn } key={ thx_txn.id } />
    );
  });
};
