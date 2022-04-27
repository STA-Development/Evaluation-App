import {makeStyles} from '@mui/styles'
import {borderRedius, color, font, margin} from '../../style/globalVariables'

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
  checkboxEmpty: {
    // color: 'red',
    // '& svg': {
    //   color: 'green',
    // },
  },
})
export default useViewForm
