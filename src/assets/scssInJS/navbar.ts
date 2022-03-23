import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
    navbar: {
        height: '100vh',
        flexShrink: 0,
        "& .MuiDrawer-paper": {
            width: "250px",
            backgroundColor: "#131924",
            borderRadius: "0px 50px 50px 0px",
            boxSizing: "border-box",
            justifyContent: "space-between",
        }
    },
    listItem: {
        "&:hover": {
            background: "#262F3F"
        },
        padding: "15px 0px"
    },
    itemIcon: {
        color: "#fff",
        minWidth: "20px",
        minHeight: "20px",
        marginRight: "18px"
    },
    itemText: {
        '& span': {
            color: "#fff",
            fontWeight: 500,
            fontSize: "18px",
            fontFamily: "Montserrat",
        },
    },
    listItemContent: {
        width: "141px",
        height: "24px",
        paddingLeft: "25px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

    },
    upBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight: "20px"
    },
    listBox: {
        padding: "0px",
        marginTop: "20px"
    },
    logOutBox: {},
    avatar: {
        width: "105px",
        height: "105px"
    },
    nameSurname: {
        color: "#fff",
        fontWeight: 500,
        fontSize: "16px",
        fontFamily: "Montserrat",
    },

});