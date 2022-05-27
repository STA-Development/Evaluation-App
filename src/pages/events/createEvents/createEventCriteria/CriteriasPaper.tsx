import React, {useContext, useEffect, useState} from 'react'
import useCreateEventStyles from '../../../../assets/styleJs/events/createEvent'
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  InputBase,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import {
  ICriteriaPaperInfo,
  IEvaluatee,
  IratingScoreObj,
} from '../TypesEvents'
import {v4 as uuidv4} from 'uuid'

import PercentIcon from '../../../../assets/images/Icons/PercentIcon'
import {createEventReducerTypes} from '../../../../types/createEventTypes'
import {EventContext} from '../EventsContext'
import axiosData from '../../../../axiosData'
import {AxiosError, AxiosResponse} from 'axios'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import axiosError from '../../../../utils/axiosError'
import EditIconCalculationCard from '../../../../assets/images/Icons/EditIconCalculationCard'
import DollarIcon from '../../../../assets/images/Icons/DollarIcon'
import CriteriaCard from "./CriteriaCard";
import RatingScore from "./RatingScore";
import BonusPercentage from "./BonusPercentage";

const CriteriasPapers = () => {
  const UseEventContext = () => useContext(EventContext)
  const {state, dispatchContext} = UseEventContext()
  const classes = useCreateEventStyles()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [criteriaData, setCriteriaData] = useState<ICriteriaPaperInfo[]>([])
  const [evaluateesList, setEvaluateesList] = useState<IEvaluatee[]>([])

  const [ratingFinalValue, setRatingFinalValue] = useState<IratingScoreObj>({
    from: 1,
    to: 10,
    id: Math.random(),
    isSelected: false
  })

  const [percentageIsSet, setPercentageIsSet] = useState<boolean>(false)
  const [ratingScoreArr, setRatingScoreArr] = useState<IratingScoreObj[]>([])

  useEffect(() => {
    setEvaluateesList(state.evaluatees)
    const getCriterias = async () => {
      try {
        setIsLoading(true)
        const response: AxiosResponse = await axiosData.get('/criteria')
        await setCriteriaData(response.data)
        setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
        axiosError(err as AxiosError)
      }
    }
    const getRatings = async () => {
      try {
        setIsLoading(true)
        const response: AxiosResponse = await axiosData.get('/rating')
        await setRatingScoreArr(response.data)
        setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
        axiosError(err as AxiosError)
      }
    }
    getCriterias()
    getRatings()
  }, [])


  const onBackButtonClick = () => {
    dispatchContext({
      type: createEventReducerTypes.updateActivePageToCriterias,
      activePage: 'firstPage',
    })
  }

  const saveCriteraDataInGlobal = () => {
    dispatchContext({type: createEventReducerTypes.ratingRange, ratingRange: ratingFinalValue})
    dispatchContext({type: createEventReducerTypes.criterias, criterias: criteriaData})
    dispatchContext({type: createEventReducerTypes.evaluatees, evaluatees: evaluateesList})
  }

  const [openDialog, setOpenDialog] = React.useState(false)
  const [newCriteriaHeaderTemp, setNewCriteriaHeaderTemp] = useState<string>('')

  const addCriteria = () => {
    const newObj = {
      id: uuidv4(),
      criteria: true,
      name: newCriteriaHeaderTemp,
      subCriteria: [],
    }
    const temp = [...criteriaData, newObj]
    setCriteriaData(temp)
    handleDialogClose()
  }

  const handleClickOpen = () => {
    setOpenDialog(true)
  }

  const handleDialogClose = () => {
    setOpenDialog(false)
  }

  return (
    <Box>
      <Box className={classes.criteriaHeaderBox}>
        <Typography className={classes.criteriaHeaderText}>Choose Evaluation Criteria</Typography>
        <Box>
          <Button
            onClick={handleClickOpen}
            className={classes.addButtonCriteria}
            type="submit"
            variant="contained"
            size="medium"
          >
            ADD
          </Button>
          <Dialog open={openDialog} onClose={handleDialogClose}>
            <Box className={classes.criteriasRatingPaper}>
              <Box className={classes.criteriaPaperBackground}>
                <Box className={classes.criteriasPaperHeaderBox}>
                  <Box className={classes.addRatingTextBox}>
                    <TextField
                      onChange={(e) => {
                        setNewCriteriaHeaderTemp(e.target.value)
                      }}
                      InputProps={{
                        classes: {notchedOutline: classes.noBorder},
                      }}
                      className={classes.textFieldBold}
                      autoFocus
                      margin="dense"
                      id="name"
                      placeholder="Add Evaluation Criteria Name"
                      type="email"
                      fullWidth
                      variant="outlined"
                    />
                  </Box>
                </Box>
                <Box className={classes.criteriasPaperInfo}>
                  <Box className={classes.addCriteriaPopUpButtonsBox}>
                    <DialogActions>
                      <Button
                        onClick={handleDialogClose}
                        className={classes.criteriaAddButton}
                        variant="text"
                        disableRipple
                      >
                        <Typography className={classes.criteriasAddButtonText}>Cancel</Typography>
                      </Button>
                      <Button
                        onClick={addCriteria}
                        className={classes.criteriaAddButton}
                        variant="text"
                        disableRipple
                      >
                        <Typography className={classes.criteriasAddButtonText}>Apply</Typography>
                      </Button>
                    </DialogActions>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Dialog>
        </Box>
      </Box>
      {!isLoading ? (
        <Box className={classes.criteriasPapersBox}>
          <CriteriaCard criteriaData={criteriaData} setCriteriaData={setCriteriaData}/>
          <RatingScore ratingScoreArr={ratingScoreArr} setRatingScoreArr={setRatingScoreArr} setRatingFinalValue={setRatingFinalValue} setPercentageIsSet={setPercentageIsSet} evaluateesList={evaluateesList} />
          <BonusPercentage setEvaluateesList={setEvaluateesList} evaluateesList={evaluateesList}  percentageIsSet={percentageIsSet}/>
          <Box className={classes.bottomButtonsBox}>
            <Button
              className={classes.backButton}
              type="submit"
              variant="outlined"
              size="medium"
              onClick={onBackButtonClick}
            >
              BACK
            </Button>
            <Button
              className={classes.nextButton}
              type="submit"
              variant="contained"
              size="medium"
              onClick={saveCriteraDataInGlobal}
            >
              NEXT
            </Button>
          </Box>
        </Box>
      ) : (
        <Box className="circle">
          <CircularProgress />
        </Box>
      )}
    </Box>
  )
}

export default CriteriasPapers
