import React from "react";
import '../css/warning_banner.css'

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