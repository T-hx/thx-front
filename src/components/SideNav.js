import React from 'react'
import '../css/SideNav.css'
import {ActionCableConsumer} from "react-actioncable-provider";

class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: props.userInfo
    };
    this.handleReceivedUser = this.handleReceivedUser.bind(this)
  };
  
  handleReceivedUser(response) {
    this.setState({
      userInfo: response.user,
    });
  };
  
  render() {
    return (
      <div className='side-nav-container'>
        <h1 className="logo"><a href='/'><span>thx</span></a></h1>
        <div className='thx-amount-area'>
          <h2 className='title'>今月thx残高</h2>
          <p className='amount'>{this.state.userInfo.thx_balance}</p>
        </div>
        <div className='thx-amount-area'>
          <h2 className='title'>もらったthx量</h2>
          <p className='amount'>{this.state.userInfo.received_thx}</p>
        </div>
        <nav>
          <ul>
            <li><a href='/'>タイムライン</a></li>
            <li><a href='/'>設定</a></li>
            <li><a href='/'>ダッシュボード</a></li>
            <li><a href='/'>ヘルプページ</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidenav