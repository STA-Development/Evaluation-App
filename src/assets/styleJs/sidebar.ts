import {makeStyles} from '@mui/styles'
import {borderRedius, color, font, margin, padding} from '../style/globalVariables'

const useSliderStyle = makeStyles({
  drawer: {
    width: '250px',
    '&  > div': {
      width: '251px',
      backgroundColor: color.navbarColor,
      padding: `
      ${padding.paddingTop72}
      ${padding.paddingRight0} 
      ${padding.paddingBottom26}
      ${padding.paddingLeft0}
      `,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: `
        ${borderRedius.topLeft0}
        ${borderRedius.topRight50}
        ${borderRedius.bottomRight50}
        ${borderRedius.bottomLeft0}
       `,
    },
  },
  drawerBox: {
    width: '250px',
  },
  listItem: {
    padding: `${padding.paddingTopBottom15} ${padding.paddingLeftRight0}`,
    '&:hover': {
      backgroundColor: color.activeLink,
    },
  },
  itemIcon: {
    color: color.whiteColor,
    minWidth: '20px',
    minHeight: '20px',
    marginRight: margin.marginRight18,
  },
  itemText: {
    '& span': {
      color: color.whiteColor,
      fontWeight: font.fontWeight500,
      fontSize: font.fontSize18,
      fontFamily: 'Montserrat',
    },
  },
  listItemContent: {
    width: '141px',
    height: '24px',
    paddingLeft: padding.paddingLeft25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  upBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: margin.marginRight20,
  },
  listBox: {
    padding: padding.padding0,
    marginTop: margin.marginTop20,
  },
  logOutBox: {},
  avatar: {
    width: '105px',
    height: '105px',
  },
  nameSurname: {
    color: color.whiteColor,
    fontWeight: font.fontWeight500,
    fontSize: font.fontSize16,
    fontFamily: 'Montserrat',
    margin: `${margin.marginTopBottom20} ${margin.marginLeftRight0}`,
  },
})

export default useSliderStyle
