import React from 'react'
import useCreateEventStyles from '../../../assets/styleJs/events/createEvent'
import {Box} from '@mui/material'
import CriteriasPapers from './CriteriasPaper'

const CreateEventCriteria = () => {
  const classes = useCreateEventStyles()

  // const [openDialog, setOpenDialog] = React.useState(false)
  // const [newCriteriaHeaderTemp, setNewCriteriaHeaderTemp] = useState<string>('')
  //
  // const addCriteria = () => {
  //   axiosData
  //     .post('/criteria', {
  //       name: newCriteriaHeaderTemp,
  //       criteria: true,
  //     })
  //     .then((res) => {
  //       console.log(res)
  //     })
  //   handleDialogClose()
  // }
  //
  // const handleClickOpen = () => {
  //   setOpenDialog(true)
  // }
  //
  // const handleDialogClose = () => {
  //   setOpenDialog(false)
  // }

  return (
    <Box>
      <Box className={classes.infoRootBoxCriteria}>
        <CriteriasPapers />
      </Box>
    </Box>
  )
}
export default CreateEventCriteria
