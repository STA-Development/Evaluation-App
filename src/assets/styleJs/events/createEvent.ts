import {makeStyles} from '@mui/styles'
import {borderRedius, color, font, margin, padding} from '../../style/globalVariables'

const useCreateEventStyles = makeStyles({
  rootCreateEvent: {
    height: '100%',
  },

  eventTitleBox: {
    display: 'flex',
    alignItems: 'center',
    width: '45%',
    marginBottom: margin.marginBottom40,
  },
  eventInfoBoxEvaluator: {
    display: 'flex',
    alignItems: 'center',
    width: '40%',
    marginBottom: margin.marginBottom25,
  },
  evaluatorCard: {
    width: '368px',
    height: '245px',
    padding: `${margin.marginTop10} ${margin.marginRight15} ${margin.marginBottom40} ${margin.marginLeft15}`,
    marginRight: margin.marginRight16,
    marginBottom: margin.marginBottom16,
    boxShadow: 'none',
  },
  evaluatorCardInputBox: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    height: '100%',
  },

  evaluateeCardInput: {width: '336px', height: '40px'},
  evaluateeCardDateInput: {
    '& > div > input': {
      padding: `${padding.paddingTopBottom10} ${padding.paddingLeftRight14}`,
    },
    width: '336px',
    height: '40px',
  },

  evaluatorCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  deleteIconButton: {
    padding: padding.padding0,
  },
  evaluatorHeaderName: {
    fontWeight: font.fontWeight500,
    fontSize: font.fontSize16,
  },

  eventTitleInput: {
    backgroundColor: color.whiteColor,
    fontSize: font.fontSize14,
    '&:nth-child(3)': {
      marginBottom: margin.marginBottom10,
    },
  },

  evaluatorInput: {
    backgroundColor: color.whiteColor,
    fontSize: font.fontSize14,
    '&:nth-child(3)': {
      marginBottom: margin.marginBottom10,
    },
    width: '67%',
    borderRadius: `${borderRedius.top4} ${borderRedius.right0} ${borderRedius.bottom0} ${borderRedius.left4}`,
  },
  evaluatorsArr: {
    display: 'flex',
    width: '100%',
    marginTop: margin.marginTop30,
    marginBottom: margin.marginBottom30,
  },
  evaluateesArr: {
    display: 'flex',
    width: '100%',
  },
  headerTitle: {
    display: 'flex',
  },
  headerRegular: {
    fontWeight: font.fontWeight400,
    fontSize: font.fontSize16,
  },
  infoRootBox: {
    width: '100%',
  },
  headerTitleBold: {
    fontWeight: font.fontWeight700,
    fontSize: font.fontSize16,
    marginLeft: margin.marginLeft3,
  },
  createEventStepper: {
    marginTop: margin.marginTop25,
    marginBottom: margin.marginBottom85,
    display: 'flex',
    justifyContent: 'center',
  },
  eventTitleText: {
    fontWeight: font.fontWeight500,
    fontSize: font.fontSize16,
    marginRight: margin.marginRight40,
    whiteSpace: 'nowrap',
  },
  evaluatorText: {
    fontWeight: font.fontWeight500,
    fontSize: font.fontSize16,
    marginRight: margin.marginRight40,
  },
  checkboxManagerBox: {
    width: '60%',
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    color: color.blueColor,
    padding: 0,
    marginRight: margin.marginRight8,
    '& .MuiSvgIcon-root': {
      fontSize: font.fontSize24,
    },
  },
  nextButton: {
    width: '146px',
    height: '36px',
    marginTop: margin.marginTop15,
    backgroundColor: color.blueColor,
    boxShadow: 'none',
  },
  addButton: {
    width: '33%',
    height: '40px',
    backgroundColor: color.blueColor,
    borderRadius: `${borderRedius.top0} ${borderRedius.right4} ${borderRedius.bottom4} ${borderRedius.left0}`,
    boxShadow: 'none',
  },
  addButtonBox: {
    display: 'flex',
    width: '100%',
  },
  evaluatorNumberErrorText: {
    marginBottom: margin.marginBottom25,
    color: color.redColor,
    ontWeight: font.fontWeight500,
    fontSize: font.fontSize18,
  },
  stepperStepLabel: {
    '& > span': {
      padding: 0,
    },
  },
  stepperStack: {
    width: '70%',
    padding: 0,
  },
  stepperRoot: {
    padding: 0,
  },
})

export default useCreateEventStyles
