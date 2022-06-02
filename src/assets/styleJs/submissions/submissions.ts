import {makeStyles} from '@mui/styles'
import {borderRedius, color, font, margin, padding} from '../../style/globalVariables'

const useSubmissionsStyle = makeStyles({
  header: {
    fontSize: font.fontSize16,
    fontWeight: font.fontWeight700,
    color: color.navbarColor,
  },
  divider: {
    backgroundColor: color.lightGrey,
    margin: `${margin.marginTopBottom10} ${margin.marginLeftRight0}`,
  },
  evaluatorName: {
    fontSize: font.fontSize14,
    fontWeight: font.fontWeight700,
    marginBottom: margin.marginBottom5,
  },
  evaluatorPosition: {
    fontSize: font.fontSize12,
    marginBottom: margin.marginBottom5,
  },
  dataPicker: {
    margin: `${margin.marginTopBottom20} ${margin.marginLeftRight0}`,
  },
  selectDate: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '10px',
    height: '40px',
    border: `1px solid ${color.lightGrayColor}`,
    width: '100%',
    borderRadius: borderRedius.all4,
    backgroundColor: color.whiteColor,
  },
  // datePicker: {
  //   width: '200px'
  // },
  submitedReview: {
    margin: `${margin.marginTopBottom10} ${margin.marginLeftRight0}`,
    fontSize: font.fontSize10,
  },
  savedSubmission: {
    fontSize: font.fontSize8,
    color: color.tableBorderColor,
  },
  viewFormBox: {
    display: 'flex',
    alignItems: 'end',
  },
  viewFormButton: {
    padding: padding.padding0,
    fontSize: font.fontSize12,
  },
  statusName: {
    fontSize: font.fontSize10,
    fontWeight: font.fontWeight700,
    textTransform: 'uppercase',
  },
  viewButtonDown: {
    display: 'flex',
    alignItems: 'end',
    marginBottom: margin.marginBottomM15,
  },
  formControl: {
    width: '400px',
    marginBottom: margin.marginBottom30,
  },
  formControl200PX: {
    width: '200px',
    backgroundColor: color.whiteColor,
  },
  savedSubmissionRootBox: {

  },

  eachSelectText: {
    fontSize: font.fontSize16,
    fontWeight: font.fontWeight500,
    marginBottom: margin.marginBottom5
  },
  savedSubmissionHeaderFirstRowBox: {
    display: "flex",
    justifyContent: 'space-between',
    marginBottom: margin.marginBottom25
  },
  savedSubmissionHeaderSecondRowBox: {
    display: "flex",
    justifyContent: 'space-between',
    width: '71%',
    alignItems: 'flex-end',
    marginBottom: margin.marginBottom50
  },
  nextButton: {
    width: '146px',
    height: '40px',
    marginTop: margin.marginTop15,
    backgroundColor: color.blueColor,
    boxShadow: 'none',
  },
  backButton: {
    width: '146px',
    height: '40px',
    marginTop: margin.marginTop15,
    boxShadow: 'none',
  },
  getCertificateButton: {
    width: '177px',
    height: '40px',
    boxShadow: 'none',
    marginRight: margin.marginRight15
  },
  exportReportButton: {
    width: '160px',
    height: '40px',
    boxShadow: 'none',
  },
  buttonText: {
    fontWeight: font.fontWeight500,
    fontSize: font.fontSize14,
    color: color.closeButton
  },
  savedSubmissionsButtonBox: {

  }

})

export default useSubmissionsStyle
