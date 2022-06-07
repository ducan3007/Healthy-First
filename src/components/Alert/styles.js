import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    alertBar: {
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        top: "15px",
        left: 0,
        right: 0,
        zIndex: 1200,
    },
    root: {
        maxWidth: "800px",
        width: "fit-content",
        paddingTop: 0,
        paddingBottom: 0,
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    alert_text: {
        fontSize: "1rem",
        display: 'inline'
    }

}));
export default useStyles;