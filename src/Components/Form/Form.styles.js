import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
        }
    },
    paper: {
        padding: theme.spacing(4),
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    button: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        gap: 5
    },
}));
export default useStyles;