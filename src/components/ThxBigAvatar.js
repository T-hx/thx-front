import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

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
    props.icon ?
      <Avatar src={props.icon} className={classes.BigAvatar} /> :
      <Avatar className={classes.BigAvatar}>{props.display}</Avatar>
  );
}

export default withStyles(styles)(ThxBigAvatar);