import {makeStyles} from '@mui/styles'
import {color, font, margin} from '../../style/globalVariables'

const useEventsStyle = makeStyles({
  ongoingEventsDivider: {
    margin: `${margin.marginTopBottom20} ${margin.marginLeftRight0}`,
    backgroundColor: color.lightGrey,
  },
  eventContent: {
    height: ' calc(100vh - 132px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  eventEmptyText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    marginTop: margin.marginTop25,
    fontWeight: font.fontWeight700,
    fontFamily: 'Montserrat',
    fontSize: font.fontSize18,
  },
  text2: {
    width: '365px',
    textAlign: 'center',
    flexDirection: 'column',
    fontWeight: font.fontWeight400,
    fontFamily: 'Montserrat',
    fontSize: font.fontSize16,
    margin: margin.margin20,
  },
  tableHeader: {
    backgroundColor: color.greenColor,
    '&: span': {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItem: 'center',
    },
  },
  sortableIcon: {
    '& svg': {
      display: 'none',
    },
  },
})

export default useEventsStyle
