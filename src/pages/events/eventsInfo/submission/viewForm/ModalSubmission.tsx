import React from 'react'
import useViewForm from '../../../../../assets/styleJs/viewForm/viewForm'
import {IDialogProprs} from '../../../../../types/viewForm'
import CheckedGreenIcon from '../../../../../assets/images/Icons/CheckedGreenIcon'
import {Box, Button, Dialog, Typography} from '@mui/material'
import {useNavigate} from 'react-router-dom'

const ModalSubmission = ({open, handleClose}: IDialogProprs) => {
  const navigate = useNavigate()
  const classes = useViewForm()
  const goToSavedSubmissions = () => {
    navigate('/')
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="dialog-box">
        <Box>
          <CheckedGreenIcon />
        </Box>
        <Typography className={classes.dialogBoxText}>
          The evoluation is added to saved submissions.
        </Typography>
        <Button variant="contained" color="primary" fullWidth onClick={goToSavedSubmissions}>
          REVIEW SAVED SUBMISSIONS
        </Button>
      </Box>
    </Dialog>
  )
}

export default ModalSubmission
