import {makeStyles} from "@mui/styles";
import {borderRedius, color, font, margin, padding} from "../../style/globalVariables";


export const useCreateEventStyles = makeStyles({
  rootCreateEvent: {
    height: "100%"
  },

  eventTitleBox: {
    display: "flex",
    alignItems: "center",
    width: "45%",
    marginBottom: margin.marginBottom40
  },
  eventInfoBoxEvaluator: {
    display: "flex",
    alignItems: "center",
    width: "40%",
    marginBottom: margin.marginBottom25
  },
  eventInfoBoxEvaluatee: {
    display: "flex",
    alignItems: "center",
    width: "40%",
    marginBottom: margin.marginBottom25,
  },
  evaluatorCard: {
    width: "368px",
    height: "245px",
    padding: `${margin.marginTop10} ${margin.marginRight15} ${margin.marginBottom40} ${margin.marginLeft15}`,
    marginRight: margin.marginRight16,
    marginBottom: margin.marginBottom16,
    boxShadow: "none"
  },
  evaluateeCard: {
    width: "368px",
    height: "305px",
    padding: `${margin.marginTop10} ${margin.marginRight15} ${margin.marginBottom40} ${margin.marginLeft15}`,
    marginRight: margin.marginRight16,
    marginBottom: margin.marginBottom16,
    boxShadow: "none",
  },
  evaluatorCardInputBox: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    height:'100%'
  },
  evaluateeCardInputBox: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    height:'100%'
  },

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
    padding: padding.padding0
  },
  evaluatorHeaderName: {
    fontWeight: font.fontWeight500,
    fontSize: font.fontSize16
  },
  evaluateeHeaderName: {
    fontWeight: font.fontWeight500,
    fontSize: font.fontSize16
  },

  eventTitleInput: {
    backgroundColor: color.whiteColor,
    fontSize: font.fontSize14,
    "&:nth-child(3)": {
      marginBottom: margin.marginBottom10,
    },
  },

  evaluatorInput: {
    backgroundColor: color.whiteColor,
    fontSize: "14px",
    "&:nth-child(3)": {
      marginBottom: margin.marginBottom10,
    },
    width: "67%",
    borderRadius: `${borderRedius.top4} ${borderRedius.right0} ${borderRedius.bottom0} ${borderRedius.left4}`,
  },

  createEventInput: {
    backgroundColor: color.whiteColor,
    fontSize: font.fontSize14,
    "&:nth-child(3)": {
      marginBottom: margin.marginBottom10,
    },
  },
  evaluatorsArr: {
    display: "flex",
    width: "100%",
    marginTop: margin.marginTop30,
    marginBottom: margin.marginBottom30
  },
  evaluatorsArr1: {
    display: "flex",
    width: "100%",
    marginTop: margin.marginTop30,
  },
  evaluateesArr: {
    display: "flex",
    width: "100%",
  },
  classesHeaderBox: {

  },
  headerTitle: {
    display: "flex",
  },

  headerRegular: {
    fontWeight: font.fontWeight400,
    fontSize: font.fontSize16

  },
  managerText: {
    fontWeight: font.fontWeight400,
    fontSize: font.fontSize14
  },

  infoRootBox:{
    width: "100%"
  },

  headerTitleBold: {
    fontWeight: font.fontWeight700,
    fontSize: font.fontSize16,
    marginLeft: margin.marginLeft3
  },
  createEventStepper: {
    marginTop: margin.marginTop25,
    marginBottom: margin.marginBottom85,
    display: "flex",
    justifyContent: "center"
  },
  eventTitleText: {
    fontWeight: font.fontWeight500,
    fontSize: font.fontSize16,
    marginRight: margin.marginRight40,
    whiteSpace: "nowrap",
  },
  evaluatorText: {
    fontWeight: font.fontWeight500,
    fontSize: font.fontSize16,
    marginRight: margin.marginRight40,
  },
  checkboxManagerBox:{
    width: "60%",
    display: "flex",
    alignItems: "center",
  },
  checkbox: {
    color: "#00e676",
    padding: 0,
    marginRight: margin.marginRight8,
    '& .MuiSvgIcon-root': {
      fontSize: font.fontSize24 }
  },
  nextButton: {
    width: "146px",
    height: "36px",
    marginTop: margin.marginTop15,
    backgroundColor: color.blueColor,
    boxShadow: "none"
  },
  addButton: {
    width: "33%",
    height: "40px",
    backgroundColor: color.blueColor,
    borderRadius: `${borderRedius.top0} ${borderRedius.right4} ${borderRedius.bottom4} ${borderRedius.left0}`,
    boxShadow: "none"
  },
  addButtonBox: {
    display: "flex",
    width: "100%"
  },

  stepperStepLabel: {
    "& > span": {
      padding : padding.padding0
    }
  },
  stepperStack: {
    width: '70%',
    padding: padding.padding0,
  },
  stepperRoot: {
    padding: padding.padding0
  },
  stepperStep: {
    padding: padding.padding0
  }
})