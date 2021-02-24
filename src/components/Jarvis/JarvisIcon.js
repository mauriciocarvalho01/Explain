import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    }
}));

const logoIcon = "https://dev.arigo.com.br/boleto/img/robot.png"

export default function JarvisIcon() {
    const classes = useStyles();

    return ( 
        <div align="center">
            <Avatar alt="User" src={logoIcon} className={classes.small} />
        </div>
    )
}