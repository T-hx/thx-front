import React, {Component} from "react";
import '../css/ThxTxn.css'
import ThxSmallAvatar from "./ThxNomalAvatar";
import ThxBigAvatar from './ThxBigAvatar'

class ThxTxn extends Component {
  render() {
    const sender_avatar_url = this.props.data.sender.avatar_url;
    const receiver_avatar_url = this.props.data.receiver.avatar_url;
    const sender_nickname = this.props.data.sender.nickname;
    const receiver_nickname = this.props.data.receiver.nickname;
    return(
      <li>
        <div className='thx-txn-container'>
          <div className='sender'>
            <div className='thx-txn-avatar'>
              <ThxSmallAvatar icon={sender_avatar_url} display={sender_nickname[0]} />
            </div>
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
            <ThxBigAvatar className='name' icon={receiver_avatar_url} display={receiver_nickname[0]}/>
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