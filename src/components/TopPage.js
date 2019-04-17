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
import MDSpinner from 'react-md-spinner'

class TopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
      userInfo: null,
    };
  }
  
  componentDidMount() {
    if (localStorage.getItem('user')) {
      axios({
        url: `${API_ROOT}/users/me`,
        headers: JSON.parse(localStorage.user)
      })
        .then(response => {
          this.setState({
            userInfo: response.data.user
          })
        })
        .catch(error => {
      
        })
    }
  }
  
  render() {
    return (
      localStorage.getItem('user') ?
        this.state.userInfo === null ?
          <MDSpinner /> :
          <div className='page'>
            <SideNav userInfo={this.state.userInfo} />
            <Header userInfo={this.state.userInfo}/>
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
                <TabPanel><ThxTxnsArea userInfo={this.state.userInfo} value='send'/></TabPanel>
                <TabPanel><ThxTxnsArea userInfo={this.state.userInfo} value='receive'/></TabPanel>
                <TabPanel> </TabPanel>
              </Tabs>
            </div>
          </div> :
        <Redirect to={'/login'}/>
    )
  }
}

export default TopPage