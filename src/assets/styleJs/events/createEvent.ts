import {makeStyles} from "@mui/styles";

export const useCreateEventStyles = makeStyles({
  rootCreateEvent: {
    height: "100%"
  },

  eventTitleBox: {
    display: "flex",
    width: "40%",
    alignItems: "center",
  },
  evaluatorCard: {width: "368px", height: "245px", padding: "9px 19px 48px 13px"},
  evaluateeCard: {width: "368px", height: "305px", padding: "9px 19px 48px 13px"},

  mt20: {marginTop: '20px'},
  mt14: {marginTop: "14px"},

  evaluatorCardInput: {width: "336px", height: "40px"},
  evaluateeCardInput: {width: "336px", height: "40px"},

  evaluatorCardHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  evaluateeCardHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIconButton: {
    padding: 0
  },
  evaluatorHeaderName: {
    fontWeight: "500",
    fontFamily: "Montserrat",
    fontSize: "16px"
  },
  evaluateeHeaderName: {
    fontWeight: "500",
    fontFamily: "Montserrat",
    fontSize: "16px"
  },

  createEventInput: {
    color: "#828282",
    fontSize: "14px",
    marginBottom: "25px",
    "&:nth-child(3)": {
      marginBottom: "10px",
    },
  },
  evaluatorsArr: {},
  evaluateesArr: {}

})