import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: "56.25%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "darken",
        position: "relative",
    },
    border: {
        border: "solid",
    },
    fullHeightCard: {
        height: "100%",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "15px",
        height: "100%",
        position: "relative",
    },
    overlay: {
        position: "absolute",
        top: "20px",
        left: "20px",
        color: "white",
    },
    overlay2: {
        position: "absolute",
        top: "20px",
        right: "20px",
        color: "white",
    },
    grid: {
        display: "flex",
    },
    details: {
        display: "flex",
        flexDirection: "column",
        boxSizing: "content-box",
        justifyContent: "space-between",
        margin: "0",
        padding: 0,
    },
    title: {
        marginLeft: "15px",
        marginRight: "15px",
        marginBottom: '10px',
        fontSize: "2em",
        padding: 0,
        fontWeight: "bold"
    },
    message: {
        marginTop: 5,
        marginLeft: "5px",
        marginRight: "15px",
        fontSize: "15px",
        fontFamily: 'Roboto',
    },
    cardActions: {
        padding: "0 16px 8px 16px",
        display: "flex",
        justifyContent: "space-between",
    },
    customBox: {
        display: "box",
        boxOrient: "vertical",
        lineClamp: 3,
        wordBreak: "break-all",
        overflow: "hidden",
        margin: '0 15px 10px 10px'
    },
});
export default useStyles;