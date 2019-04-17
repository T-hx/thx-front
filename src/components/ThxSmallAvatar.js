import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';

const styles = {
  orangeAvatar: {
    fontSize: '16px',
    margin: 3,
    color: '#fff',
    width: 30,
    height: 30,
    backgroundColor: deepOrange[500],
  },
};

function ThxSmallAvatar(props) {
  const {classes} = props;
  return (
    props.icon ?
    <Avatar src={props.icon} className={classes.orangeAvatar} /> :
      <Avatar className={classes.orangeAvatar}>{props.display[0]}</Avatar>
  );
}

export default withStyles(styles)(ThxSmallAvatar);