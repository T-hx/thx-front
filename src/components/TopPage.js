import React, {Component} from "react";
import Header from "./Header";
import ThxTxnsArea from './ThxTxnsArea'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import SideNav from './SideNav'
import '../css/Reset.css'
import '../css/TopPage.css'
import {Redirect} from "react-router";
import axios from 'axios'
import {API_ROOT} from "../constants";

class TopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
      userInfo: null,
    };
  }
  
  componentDidMount() {
    axios({
      url: `${API_ROOT}/users/me`,
      headers: JSON.parse(localStorage.user),
    })
      .then(response => {
        this.setState({
          userInfo: response.data
        })
      })
      .catch(error => {
      
      })
  }
  
  render() {
    return (
      localStorage.getItem('user') ?
        this.state.userInfo === null ?
          <div>loading...</div> :
          <div className='page'>
            <SideNav/>
            <Header/>
            <div className="main-container">
              <h1>タイムライン</h1>
              <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({tabIndex})}>
                <TabList>
                  <Tab>すべて</Tab>
                  <Tab>おくった</Tab>
                  <Tab>もらった</Tab>
                  <Tab>拍手</Tab>
                </TabList>
                <TabPanel><ThxTxnsArea userInfo={this.state.userInfo} value='all'/></TabPanel>
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