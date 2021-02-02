import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';;
import PublishIcon from '@material-ui/icons/Publish';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
// Import axios
import axios from "axios";
import store from "../../Watson/Jarvis/Store";

// Import action
import { createSession } from "../../../pages/watson/actions/watson";

const useStyles = makeStyles({
  root: {
    width: 'auto',
    position: 'relative'
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function resetBot() {
    if (process.browser) {
      localStorage.removeItem('session');
    }
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Upload" value="upload" icon={<PublishIcon />} />
      <BottomNavigationAction label="Voz" value="voz" icon={<SettingsVoiceIcon />} />
      <BottomNavigationAction label="Salvar" value="salvar" icon={<SaveAltIcon />} />
      <BottomNavigationAction onClick={resetBot} label="Resetar" value="resetar" icon={<RotateLeftIcon />} />
    </BottomNavigation>
  );
}