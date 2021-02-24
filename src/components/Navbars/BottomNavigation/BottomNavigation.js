import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';;
import JarvisIcon from '../../Jarvis/JarvisIcon';
import Watson from '../../../pages/api/watson/watson';


const useStyles = makeStyles({
  root: {
    width: "auto"
  },
  effect: {
    display: "none"
  }
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [jarvis, getJarvis] = React.useState(false);



  return (
    <div>
      <BottomNavigation className={classes.root}>
        <BottomNavigationAction onClick={() => getJarvis(true)} label="Jarvis Explain" value="jarvis" icon={<JarvisIcon />} />
      </BottomNavigation>
      {jarvis ? <Watson className={classes.effect} /> : false}
    </div>
  );
}