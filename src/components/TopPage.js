import React, {Component} from "react";
import Header from "./Header";
import ThxTxnsArea from './ThxTxnsArea'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import SideNav from './SideNav'
import '../css/Reset.css'
import '../css/TopPage.css'
import {Redirect} from "react-router";

class TopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
    };
  }
  
  render() {
    return (
      localStorage.getItem('user') ?
        <div className='page'>
          <SideNav />
          <Header />
          <div className="main-container">
            <h1>タイムライン</h1>
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({tabIndex})}>
              <TabList>
                <Tab>すべて</Tab>
                <Tab>おくった</Tab>
                <Tab>もらった</Tab>
                <Tab>拍手</Tab>
              </TabList>
              <TabPanel><ThxTxnsArea value='all'/></TabPanel>
              <TabPanel><ThxTxnsArea value='send'/></TabPanel>
              <TabPanel><ThxTxnsArea value='receive'/></TabPanel>
              <TabPanel> </TabPanel>
            </Tabs>
          </div>
        </div> :
        <Redirect to={'/login'}/>
    )
  }
}

export default TopPage