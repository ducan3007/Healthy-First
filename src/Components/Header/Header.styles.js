import { makeStyles } from "@material-ui/core";
import { deepPurple } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 5,
        display: 'flex',
        marginBottom:'10px',
        flexDirection: 'row',
        alignItems: 'center',
        position:'relative',
    },
    heading: {
        color: 'rgba(0,183,255,1)',
        textDecoration: 'none',
        fontSize: '3em'
    },

    image: {

    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    profile: {
        flex:1,
        justifyContent:'flex-end',
        display: 'flex',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
    },
    brandContainer: {
        justifyContent:'flex-start',
        alignItems: 'center',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    logout: {
        flex:1,
        justifyContent:'flex-end',
        display: 'flex',
        width: '300px',
        marginRight: '5px',
    }
}))

export default useStyles;