import React from 'react';
import {ActionCableConsumer} from 'react-actioncable-provider';
// import {API_ROOT} from '../constants';
// import ThxTxn from "./ThxTxn";

class SentThxTxns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thx_txns: []
    };
    // this.handleReceivedThxTxn = this.handleReceivedThxTxn.bind(this)
  };
  
  // componentDidMount() {
  //   fetch(`${API_ROOT}/thx_txns`)
  //     .then(res =>  res.json() )
  //     .then(thx_txns => this.setState({ thx_txns }));
  // };
  //
  // handleReceivedThxTxn(response) {
  //   console.log(response.thx_txn);
  //   this.setState({
  //     thx_txns: [...this.state.thx_txns, response.thx_txn],
  //   });
  // };
  
  render() {
    let { thx_txns } = this.state;
    return (
      <div>
        <ActionCableConsumer channel={{channel: 'ThxTxnsChannel'}} onReceived={this.handleReceivedThxTxn}>
          {thx_txns}
        </ActionCableConsumer>
      </div>
    );
  };
}

export default SentThxTxns;

// const mapThxTxns = (thx_txns) => {
//   return thx_txns.reverse().map(thx_txn => {
//     return (
//       <ThxTxn data={ thx_txn } key={ thx_txn.id } />
//     );
//   });
// };
