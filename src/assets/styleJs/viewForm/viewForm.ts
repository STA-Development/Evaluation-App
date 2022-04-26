import {makeStyles} from '@mui/styles'
import {color, font, margin} from '../../style/globalVariables'

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
})
export default useViewForm
