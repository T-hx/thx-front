import React from 'react'
import '../css/SideNav.css'

function Sidenav() {
  return (
    <div className='side-nav-container'>
      <h1 className='logo'></h1>
      <div className='thx-amount-area'>
        <h2 className='title'>今週もらった</h2>
        <p className='amount'>200</p>
      </div>
      <div className='thx-amount-area'>
        <h2 className='title'>今週おくった</h2>
        <p className='amount'>300</p>
      </div>
      <nav>
        <ul>
          <li><a href=''>タイムライン</a></li>
          <li><a href=''>設定</a></li>
          <li><a href=''>ダッシュボード</a></li>
          <li><a href=''>ヘルプページ</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidenav