import {makeStyles} from '@mui/styles'
import {border, borderRedius, color, font, margin, padding} from '../../style/globalVariables'

const useViewForm = makeStyles({
  progressTitle: {
    fontSize: font.fontSize16,
    fontWeight: font.fontWeight700,
    color: color.navbarColor,
    marginRight: margin.marginRight20,
  },
  progressPercentText: {
    fontSize: font.fontSize12,
    fontWeight: font.fontWeight300,
    color: color.percentGrey,
    fontStyle: 'italic',
  },
  evalName: {
    marginRight: margin.marginRight50,
    fontSize: font.fontSize16,
    fontWeight: font.fontWeight500,
    color: color.navbarColor,
  },
  evalPosition: {
    fontSize: font.fontSize16,
    fontWeight: font.fontWeight400,
    color: color.blackColor,
    opacity: 0.6,
  },
  stepperStep: {
    width: '40px',
    height: '40px',
    borderRadius: borderRedius.borderP50,
    backgroundColor: color.blueColor,
    color: color.whiteColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: font.fontSize18,
    fontWeight: font.fontWeight500,
  },
  stepper: {
    width: '70%',
    margin: `${margin.marginTop100} ${margin.marginRightAuto} ${margin.marginBottom30} ${margin.marginLeftAuto} `,
  },
  stepperConnector: {
    height: '2px',
    backgroundColor: color.blueColor,
  },
  paperReportLabel: {
    fontSize: font.fontSize14,
    color: color.blackColor,
    fontWeight: font.fontWeight300,
    fontStyle: 'italic',
  },
  checkSkills: {
    fontSize: font.fontSize18,
    fontWeight: font.fontWeight600,
    color: color.navbarColor,
    marginBottom: margin.marginBottom15,
    '& :last-child': {
      fontSize: 'inherit',
      fontWeight: 'inherit',
    },
  },
  formGroupLabel: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: margin.marginLeft30,
  },
  skillsDivider: {
    margin: `${margin.marginTopBottom15} ${margin.marginLeftRight0}`,
    backgroundColor: color.dividerColor,
  },
  labelLeft: {
    marginLeft: margin.marginLeftM36,
  },
  pagnition: {
    '& ul': {
      display: 'flex',
      justifyContent: 'space-between',
    },
    '& li': {
      borderRadius: borderRedius.borderP50,
      width: '40px',
      height: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& button': {
      color: color.tableBorderColor,
      border: `${border.border2} solid ${color.tableBorderColor}`,
      padding: padding.padding20,
      borderRadius: borderRedius.borderP50,
      fontSize: font.fontSize18,
      fontWeight: font.fontWeight500,
      '&:selected': {
        bacgroundColor: 'blue',
        color: '#fff',
      },
    },
  },
})
export default useViewForm
