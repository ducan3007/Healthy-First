import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: "5px",
        backgroundColor: "white",
        minHeight: '50vh'
    },
    tabs: {
        root: {
            display: "flex",
            justifyContent: "space-between",
        },
    },
}));
export default useStyles;