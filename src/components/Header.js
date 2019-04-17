import React, {Component} from "react";
import {API_ROOT} from "../constants";
import { withStyles } from '@material-ui/core/styles';
import ThxBadges from './ThxBadges';
import '../css/Header.css'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ThxSmallAvatar from './ThxSmallAvatar'
import { withRouter } from "react-router";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this)
  }
  
  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  };
  
  handleClose() {
    this.setState({ anchorEl: null });
  };
  
  
  handleSignOut() {
    fetch(`${API_ROOT}/auth/sign_out`, {
      method: 'DELETE',
      headers: JSON.parse(localStorage.user),
    })
      .then(() => {
        localStorage.removeItem('user');
        this.props.history.push('/login');
      })
  };
  
  render () {
    const avatar_url = this.props.userInfo.avatar_url
    const nickname = this.props.userInfo.nickname
    return (
      <div className='header-container'>
        <ThxBadges className='header-badges' />
        <Button
          className='header-icon'
          aria-owns={this.state.anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          color="primary"
          onClick={this.handleClick}
        >
          <ThxSmallAvatar icon={avatar_url} display={nickname[0]} />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleSignOut}>Logout</MenuItem>
        </Menu>
      </div>
    )
  }
}
export default withRouter(withStyles(styles)(Header))