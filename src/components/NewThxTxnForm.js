import React from 'react';
import { API_ROOT } from '../constants';
import '../css/NewThxTxnForm.css'
import Grid from '@material-ui/core/Grid';
import ThxAvatar from './ThxSmallAvatar'

class NewThxTxnForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      str: '',
      thx_txn: {
        thx: 0,
        comment: '',
        receiver_id: ''
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
        receiver_id: str[0],
        thx: str[1],
        comment: str[2],
      }
    };
    
    this.setState(params);
    let user = JSON.parse(localStorage.user);
    fetch(`${API_ROOT}/thx_txns`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json',
        "access-token": user["access-token"],
        "token-type": "Bearer",
        "client": user["client"],
        "uid": user["uid"]
      },
      body: JSON.stringify(params)
    })
      .then();
    this.setState({str: ''});
  }
  
  render() {
    return (
      <div className='form-outer'>
        <Grid container justify="flex-start" alignItems="flex-start">
          <ThxAvatar />
          <form className='thx-form' onSubmit={this.handSubmit}>
            <input type="text" value={this.state.str} onChange={this.handleChange}
                   placeholder='@shun +100 ありがとうございます '/>
            <input type="submit" value="Submit" hidden/>
          </form>
        </Grid>
      </div>
    );
  }
}

export default NewThxTxnForm;