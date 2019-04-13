import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
};

function ThxSmallAvatar(props) {
  const {classes} = props;
  return (
    props.icon ?
    <Avatar src={props.icon} className={classes.purpleAvatar} /> :
      <Avatar className={classes.purpleAvatar}>{props.display}</Avatar>
  );
}

export default withStyles(styles)(ThxSmallAvatar);