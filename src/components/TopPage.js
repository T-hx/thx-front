import React, {Component, Fragment} from "react";
import Header from "./Header";
import ThxTxnsArea from './ThxTxnsArea'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SideNavi from './SideNavi'
import '../css/top_page.css'

class TopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
    };
  }
  
  render() {
    return (
      <Fragment>
        <Header />
        <SideNavi />
        <div className="main-container">
          <p>タイムライン</p>
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
      </Fragment>
    )
  }
}

export default TopPage