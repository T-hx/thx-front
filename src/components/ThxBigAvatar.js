import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';
import Icon from '../img/shun.png'

const styles = {
  BigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
    color: '#fff',
  },
};

function ThxBigAvatar(props) {
  const {classes} = props;
  return (
    props.Icon ?
      <Avatar src={Icon} className={classes.BigAvatar} /> :
      <Avatar className={classes.BigAvatar}>{props.display}</Avatar>
  );
}

export default withStyles(styles)(ThxBigAvatar);