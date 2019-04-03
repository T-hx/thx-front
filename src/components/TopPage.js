import React, {Component} from "react";
import Header from "./Header";
import ThxTxnsList from './ThxTxns'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../css/tab.css'

class TopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
    };
  }
  
  render() {
    return (
      <div>
        <Header/>
        <p>タイムライン</p>
        <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({tabIndex})}>
          <TabList>
            <Tab>すべて</Tab>
          </TabList>
          <TabPanel>
            <ThxTxnsList/>
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

export default TopPage