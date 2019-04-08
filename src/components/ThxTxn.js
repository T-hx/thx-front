import React, {Component} from "react";
import '../css/ThxTxn.css'

class ThxTxn extends Component {
  render() {
    return(
      <div className='thx-txn-container'>
        <div className='sender'>
          <ul>
            <li className='name'>{ this.props.data.sender.name }</li>
            <li className='nick-name'>{ this.props.data.sender.nickname }</li>
            <li className='date'>{ this.props.data.created_at }</li>
          </ul>
          <div className='comment'>
            <p>{ this.props.data.comment }</p>
          </div>
        </div>
        <p>></p>
        <div className='receiver'>
          <ul>
            <li className='thx'>{ this.props.data.thx }</li>
            <li className='name'>{ this.props.data.receiver.name }</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ThxTxn