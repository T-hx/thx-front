import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';

const styles = {
  orangeAvatar: {
    fontSize: '16px',
    margin: 10,
    color: '#fff',
    width: 40,
    height: 40,
    backgroundColor: deepOrange[500],
  },
};

function ThxNormalAvatar(props) {
  const {classes} = props;
  return (
    props.icon ?
    <Avatar src={props.icon} className={classes.orangeAvatar} /> :
      <Avatar className={classes.orangeAvatar}>{props.display}</Avatar>
  );
}

export default withStyles(styles)(ThxNormalAvatar);