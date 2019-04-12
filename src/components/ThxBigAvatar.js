import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';

const styles = {
  orangeAvatar: {
    margin: 10,
    width: 60,
    height: 60,
    color: '#fff',
    backgroundColor: deepOrange[500]
  },
};

function ThxBigAvatar(props) {
  const {classes} = props;
  return (
    <Avatar className={classes.orangeAvatar}>OP</Avatar>
  );
}

export default withStyles(styles)(ThxBigAvatar);