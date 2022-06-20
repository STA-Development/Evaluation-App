import {makeStyles} from '@mui/styles'
import {borderRedius, color, font, margin} from '../../style/globalVariables'

const useReportsStyle = makeStyles({
  reportSelect: {
    backgroundColor: color.whiteColor,
    borderRadius: borderRedius.all4,
    color: 'red',
    '& fieldset': {
      borderColor: 'transparent',
      borderRadius: borderRedius.all4,
      '&:hover': {
        borderColor: 'transparent',
      },
    },
    '& label': {
      color: color.closeButton,
      fontSize: font.fontSize14,
      fontWeight: font.fontWeight500,
    },
  },
  performBtn: {
    marginLeft: margin.marginLeft40,
    width: '130px',
    height: '40px',
  },
  searchSelect: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  sortableIcon: {
    '& svg': {
      display: 'none',
    },
  },
  roundColor: {
    width: '12px',
    height: '12px',
    borderRadius: borderRedius.all50,
    display: ' inline-block',
    marginLeft: margin.marginLeft6,
  },
  exportBtn: {
    marginTop: margin.marginTop30,
    marginBottom: margin.marginBottom25,
  },
  formControl: {
    maxWidth: '100%',
    width: '400px',
  },
})

export default useReportsStyle
