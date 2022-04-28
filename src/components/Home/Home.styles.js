import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    rightbar: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    }
}))
export default useStyles