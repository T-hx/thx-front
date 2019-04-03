import React, {Component} from "react";

class ThxTxn extends Component {
  render() {
    return(
      <p>
        <span>{ this.props.data.thx }</span>
        <span>{ this.props.data.sender }</span>
        <span>{ this.props.data.comment }</span>
        <span>{ this.props.data.receiver }</span>
      </p>
    )
  }
}

export default ThxTxn