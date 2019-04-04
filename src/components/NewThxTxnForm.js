import React from 'react';
import { API_ROOT, HEADERS } from '../constants';

class NewThxTxnForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      str: '',
      thx_txn: {
        thx: 0,
        comment: '',
        sender: '',
        receiver: ''
      }
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handSubmit = this.handSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({str: event.target.value})
  }
  
  handSubmit(event) {
    event.preventDefault();
    let str = this.state.str.split(' ');
    let params = {
      thx_txn: {
        thx: str[0],
        comment: str[1],
        sender: str[2],
        receiver: str[3]
      }
    };
    
    this.setState(params);
  
    fetch(`${API_ROOT}/thx_txns`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(params)
    })
      .then();
    this.setState({ str: '' });
  }
  
  render() {
    return (
      <form onSubmit={this.handSubmit}>
        <label>
          <input type="text" value={this.state.str} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NewThxTxnForm