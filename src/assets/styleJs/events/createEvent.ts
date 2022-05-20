import {makeStyles} from '@mui/styles'
import {border, borderRedius, color, font, margin, padding} from '../../style/globalVariables'

const useCreateEventStyles = makeStyles({
  rootCreateEvent: {
    height: '100%',
    padding: padding.padding30,
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
  evaluateeCard: {
    height: '305px',
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
  infoRootBoxCriteria: {
    width: '100%',
    marginTop: '-60px',
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
  backButton: {
    width: '146px',
    height: '36px',
    marginTop: margin.marginTop15,
    boxShadow: 'none',
  },
  addButton: {
    width: '33%',
    height: '40px',
    backgroundColor: color.blueColor,
    borderRadius: `${borderRedius.top0} ${borderRedius.right4} ${borderRedius.bottom4} ${borderRedius.left0}`,
    boxShadow: 'none',
  },
  addButtonCriteria: {
    width: '128px',
    height: '40px',
    backgroundColor: color.blueColor,
    borderRadius: borderRedius.all4,
    boxShadow: 'none',
  },
  addButtonBox: {
    display: 'flex',
    width: '100%',
  },
  evaluatorNumberErrorText: {
    marginBottom: margin.marginBottom25,
    color: color.redColor,
    fontWeight: font.fontWeight500,
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
  criteriaHeaderBox: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  criteriasPapersBox: {
    width: '100%',
    flexGrow: 1,
    marginTop: margin.marginTop15,
  },
  criteriaHeaderText: {
    fontWeight: font.fontWeight500,
    fontSize: font.fontSize18,
    alignItems: 'center',
  },
  criteriasPaper: {
    borderRadius: borderRedius.all4,
    width: '50%',
  },
  criteriaPaperBackground: {
    backgroundColor: color.whiteColor,
  },
  criteriasPaperHeaderText: {
    fontWeight: font.fontWeight500,
    fontSize: font.fontSize16,
  },
  criteriasPaperEachCriteriaText: {
    fontWeight: font.fontWeight400,
    fontSize: font.fontSize14,
  },
  criteriasPaperHeaderBox: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${padding.paddingTopBottom15} ${padding.paddingLeftRight30}`,
    borderBottom: `${border.border1} solid ${color.overViewBoxshadow}`,
  },
  criteriaAddButton: {
    textTransform: 'none',
    color: color.blueColor,
    '&:hover': {
      backgroundColor: color.whiteColor,
    },
    '&:active': {
      backgroundColor: 'transparent',
    },
  },
  criteriasAddButtonText: {
    fontWeight: font.fontWeight500,
    fontSize: font.fontSize14,
  },
  eachCriteria: {
    display: 'flex',
    paddingBottom: padding.paddingBottom10,
  },
  criteriasPaperInfo: {
    display: 'block',
    padding: `${padding.paddingTopBottom15} ${padding.paddingLeftRight30}`,
  },
  criteriaPaperBottomBox: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: margin.marginTop30,
  },
  criteriaPaperRatingRoot: {
    width: '50%',
    marginRight: margin.marginRight15,
  },
  criteriaItalicText: {
    fontWeight: font.fontWeight300,
    fontSize: font.fontSize12,
    fontStyle: font.fontStyleItalic,
  },
  criteriaRatingTexts: {
    marginBottom: margin.marginBottom10,
  },
  scoreRangeBox: {
    paddingLeft: padding.paddingLeft10,
  },
  ratingScoreLabel: {
    marginBottom: margin.marginBottom10,
    '& span:first-child': {
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      '& svg': {
        position: 'absolute',
        marginTop: margin.marginTop8,
      },
    },
    '& span:last-child': {
      marginLeft: margin.marginLeft15,
      fontWeight: font.fontWeight400,
      fontSize: font.fontSize14,
    },
  },
  criteriaPaperBonusPercentage: {
    width: '50%',
  },
  criteriasRatingPaper: {
    borderRadius: borderRedius.all4,
    width: '100%',
  },

  criteriaCalculateButton: {
    textTransform: 'none',
    color: color.blueColor,
    opacity: '50%',
    '&:hover': {
      backgroundColor: color.whiteColor,
    },
    '&:active': {
      backgroundColor: 'transparent',
    },
  },
  criteriaPagePercentField: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '120px',
    paddingLeft: padding.paddingLeft32,
  },

  inputFieldPercent: {
    width: '90px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: 'none',
    background: color.whiteColor,
    border: `${border.border1} solid ${color.percentageInputColor}`,
    borderRadius: borderRedius.all2,
  },
  inputBase: {
    '& input': {
      textAlign: 'center',
    },
    marginLeft: margin.marginLeft6,
  },
  percentageIconButton: {
    cursor: 'default',
    backgroundColor: color.percentageInputColor,
    borderRadius: borderRedius.all0,
  },
  bottomButtonsBox: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '340px',
  },

  dataPicker: {
    margin: `${margin.marginTopBottom20} ${margin.marginLeftRight0}`,
  },
  formBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  radioGroup: {
    display: 'flex',
    width: '360px',
    flexDirection: 'row',
    marginLeft: margin.marginLeft30,
    marginBottom: margin.marginBottom30,
  },

  assignBtnGroup: {
    display: 'flex',
  },
  assignButton: {
    marginRight: margin.marginRight40,
    width: '145px',
    height: '40px',
  },
  selectDate: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${padding.paddingTopBottom10} ${padding.paddingLeftRight14}`,
    width: '100%',
    borderRadius: borderRedius.all4,
    backgroundColor: color.whiteColor,
  },
  calendarDays: {
    fontSize: font.fontSize16,
    fontWeight: font.fontWeight400,
  },
})

export default useCreateEventStyles
