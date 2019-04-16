import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
});

function ThxBadges(props) {
  const { classes } = props;
  return (
    <Badge className={classes.margin} badgeContent={4} color="secondary">
      <MailIcon/>
    </Badge>
  );
}

export default withStyles(styles)(ThxBadges);