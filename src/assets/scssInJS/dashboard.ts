import {makeStyles} from "@mui/styles";

export const useDashboardStyles = makeStyles({
    dashboardPage: {
        width: 'calc(100% - 250px)',
        height: "100vh", position: "relative", justifyContent: "center", paddingTop: "40px"
    },
    dashboardHeader: {
        fontWeight: "700",
        fontFamily: "Montserrat",
        fontSize: "24px"
    },
    dashboardContent: {
        height: "calc(100vh - 150px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
    },
    dashboardEmptyImg: {},
    dashboardEmptyText: {display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}
})