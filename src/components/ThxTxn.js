import React, {Component} from "react";
import '../css/ThxTxn.css'
import ThxSmallAvatar from "./ThxSmallAvatar";
import ThxBigAvatar from './ThxBigAvatar'

class ThxTxn extends Component {
  render() {
    return(
      <div className='thx-txn-container'>
        <div className='sender'>
          <div className='thx-txn-avatar'><ThxSmallAvatar/></div>
          <div className='sender-container'>
            <ul>
              <li className='name'>{ this.props.data.sender.name }</li>
              <li className='nick-name'>{ this.props.data.sender.nickname }</li>
              <li className='date'>{ this.props.data.created_at }</li>
            </ul>
            <div className='comment'>
              <p>{ this.props.data.comment }</p>
            </div>
          </div>
        </div>
        <p>></p>
        <div className='receiver'>
          <ul>
            <ThxBigAvatar className='name'>{ this.props.data.receiver.nickname }</ThxBigAvatar>
          </ul>
        </div>
      </div>
    )
  }
}

export default ThxTxn