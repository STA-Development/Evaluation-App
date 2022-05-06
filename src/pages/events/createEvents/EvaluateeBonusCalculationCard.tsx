import React, {useContext, useEffect, useState} from 'react'
import {Box, Grid, IconButton, InputBase, Paper, TextField, Typography} from '@mui/material'
import {IEvaluatee} from './TypesEvents'
import DeleteIcon from '../../../assets/images/Icons/DeleteIcon'
import useCreateEventStyles from '../../../assets/styleJs/events/createEvent'
import {EventContext} from './EventsContext'
import PercentIcon from '../../../assets/images/Icons/PercentIcon'

const EvaluateeBonusCalculationCard = () => {
  const [evaluateesList, setEvaluateesList] = useState<IEvaluatee[]>([])

  const classes = useCreateEventStyles()
  const UseEventContext = () => useContext(EventContext)
  const {state} = UseEventContext()

  useEffect(() => {
    setEvaluateesList(state.evaluatees)
  }, [])

  const onChangeEvaluateeData = (id: string, value: string, changingValue: string) => {
    const newArray = evaluateesList.map((item: IEvaluatee) => {
      if (item.id === id) {
        return {...item, [changingValue]: value}
      }
      return item
    })
    setEvaluateesList(newArray)
  }

  return (
    <Box className={classes.evaluateesArr}>
      <Grid container>
        {evaluateesList.map((item: IEvaluatee) => (
          <Paper key={item.id} className={`${classes.evaluatorCard} ${classes.evaluateeCard}`}>
            <Box className={classes.evaluatorCardHeader}>
              <Typography className={classes.evaluatorHeaderName}>{item.header}</Typography>
              <IconButton
                onClick={() => {
                  // handleRemoveEvaluatee(item)
                }}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </Box>
            <Box className={classes.evaluatorCardInputBox}>
              <TextField
                name={'nameValue'}
                className={classes.evaluateeCardInput}
                value={item.nameValue}
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  onChangeEvaluateeData(item.id, e.target.value, e.target.name)
                }}
              />
              <TextField
                name={'positionValue'}
                className={classes.evaluateeCardInput}
                value={item.positionValue}
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  onChangeEvaluateeData(item.id, e.target.value, e.target.name)
                }}
              />
              <TextField
                name={'dateValue'}
                type="date"
                defaultValue="2022-04-21"
                value={item.dateValue}
                className={classes.evaluateeCardDateInput}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  onChangeEvaluateeData(item.id, e.target.value, e.target.name)
                }}
              />
              <Box className={classes.criteriaPagePercentField}>
                <Paper component="form" className={classes.evaluateeCardInput}>
                  <InputBase
                    type="number"
                    className={classes.inputBase}
                    placeholder="0"
                    inputProps={{'aria-label': '0'}}
                  />
                  <IconButton
                    disableRipple
                    className={classes.percentageIconButton}
                    aria-label="directions"
                  >
                    <PercentIcon />
                  </IconButton>
                </Paper>
              </Box>
            </Box>
          </Paper>
        ))}
      </Grid>
    </Box>
  )
}

export default EvaluateeBonusCalculationCard
