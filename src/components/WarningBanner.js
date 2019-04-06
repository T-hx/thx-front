import React from "react";
import '../css/WanningBanner.css'

class WarningBanner extends React.Component {
  render() {
    return (
      <div className='is-fail'>
        {this.props.message}
      </div>
    )
  }
}

export default WarningBanner