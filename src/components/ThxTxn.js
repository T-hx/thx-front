import React, {Component} from "react";
import '../css/ThxTxn.css'
import ThxSmallAvatar from "./ThxSmallAvatar";
import ThxBigAvatar from './ThxBigAvatar'

class ThxTxn extends Component {
  render() {
    return(
      <li>
        <div className='thx-txn-container'>
          <div className='sender'>
            <div className='thx-txn-avatar'><ThxSmallAvatar icon={this.props.data.sender.avatar_url} /></div>
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
            <ThxBigAvatar className='name' icon={this.props.data.receiver.avatar_url}/>
            <div className='thx-txn-avatar-thx'>
              <ThxSmallAvatar className='thx' display={'+' + this.props.data.thx}/>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default ThxTxn