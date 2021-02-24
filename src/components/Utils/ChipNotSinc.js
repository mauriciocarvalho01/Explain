import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'left'
  },
}));

export default function ChipNotSinc(props) {
  const classes = useStyles();

  const { image, sinc } = props;



  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      <Chip
        avatar={image ?
          <Avatar alt="User" src={image} className={classes.small} /> : <PersonIcon />}
        label={sinc}
        onDelete={handleDelete}
        color="secondary"
      />
    </div>
  );
}