import React, {useContext, useState} from 'react'
import {
  Box,
  Button,
  Checkbox,
  FormGroup,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import {IEvaluatee, IEvaluator, ITopManagerEmptyObjInfoType} from './TypesEvents'
import DeleteIcon from '../../../assets/images/Icons/DeleteIcon'
import useCreateEventStyles from '../../../assets/styleJs/events/createEvent'
import {useNavigate} from 'react-router-dom'
import {EventContext} from './EventsContext'
import {v4 as uuidv4} from 'uuid'
import createEventReducerTypes from '../../../types/createEventTypes'

const CreateEventFirstPage = () => {
  const classes = useCreateEventStyles()
  const navigate = useNavigate()
  const UseEventContext = () => useContext(EventContext)
  const {dispatch} = UseEventContext()

  const [evaluatorsCount, setEvaluatorsCount] = useState<number>(0)
  const [evaluateesCount, setEvaluateesCount] = useState<number>(0)
  const [eventTitle, setEventTitle] = useState<string>('')
  const [evaluatorsList, setEvaluatorsList] = useState<IEvaluator[]>([])
  const [evaluateesList, setEvaluateesList] = useState<IEvaluatee[]>([])
  const [isTopManagerChecked, setIsTopManagerChecked] = useState<boolean>(true)
  const [foundTopManager, setFoundTopManager] = useState<boolean>(false)
  const [topManagerId, setTopManagerId] = useState<string>('')
  const [evaluatorCountError, setEvaluatorCountError] = useState<boolean>(false)
  const [evaluateeCountError, setEvaluateeCountError] = useState<boolean>(false)

  const [topManagerEmptyObjInfo] = useState<ITopManagerEmptyObjInfoType>({
    id: uuidv4(),
    header: 'Evaluator 1 (Top Manager)',
    name: 'Norvik Abdalian',
    position: 'CTO',
    email: 'norvik@adrack.com',
  })

  const [evaluatorObjInfo] = useState<IEvaluator>({
    id: uuidv4(),
    header: 'Evaluator 1',
    name: 'Name / Surname',
    nameValue: '',
    position: 'Position',
    positionValue: '',
    email: 'Email',
    emailValue: '',
  })

  const [evaluateeObjInfo] = useState<IEvaluatee>({
    id: uuidv4(),
    header: '',
    name: 'Name / Surname',
    nameValue: '',
    position: 'Position',
    positionValue: '',
    date: 'Hire date',
    dateValue: undefined,
    salary: 'Monthly Salary',
    salaryValue: '',
  })

  const navigateToCriteriasAndSendDataToContext = () => {
    dispatch({type: createEventReducerTypes.eventTitle, eventTitle})
    dispatch({type: createEventReducerTypes.evaluators, evaluators: evaluatorsList})
    dispatch({type: createEventReducerTypes.evaluatees, evaluatees: evaluateesList})
    dispatch({
      type: createEventReducerTypes.updateActivePageToCriterias,
      activePage: 'criteriasPage',
    })
    navigate('criteria')
  }

  const label = {inputProps: {'aria-label': 'Checkbox demo'}}

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTopManagerChecked(e.target.checked)
  }

  const onChangeEvaluatorData = (id: string, value: string, changingValue: string) => {
    const newArray = evaluatorsList.map((item: IEvaluator) => {
      if (item.id === id) {
        return {...item, [changingValue]: value}
      }
      return item
    })
    setEvaluatorsList(newArray)
  }

  const onChangeEvaluateeData = (id: string, value: string, changingValue: string) => {
    const newArray = evaluateesList.map((item: IEvaluatee) => {
      if (item.id === id) {
        return {...item, [changingValue]: value}
      }
      return item
    })
    setEvaluateesList(newArray)
  }

  const handleEvaluatorsSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEvaluatorCountError(false)
    renderEvaluators(evaluatorsCount)
  }

  const handleEvaluateesSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEvaluateeCountError(false)
    renderEvaluatees(evaluateesCount)
  }

  const renderEvaluators = (count: number) => {
    evaluatorsList.forEach((el: IEvaluator) => {
      if (el.id === topManagerId) {
        setFoundTopManager(true)
      }
    })
    if (count > 0) {
      let tempArr: IEvaluator[] = []
      for (let evaluator = 1; evaluator <= count; evaluator++) {
        const evaluatorNumber = evaluatorsList.length + evaluator
        if (isTopManagerChecked && !foundTopManager && evaluator === 1) {
          tempArr[0] = {
            emailValue: '',
            nameValue: '',
            positionValue: '',
            ...topManagerEmptyObjInfo,
          }
          setTopManagerId(topManagerEmptyObjInfo.id)
        } else {
          tempArr = [
            ...tempArr,
            {...evaluatorObjInfo, id: uuidv4(), header: `Evaluator ${evaluatorNumber}`},
          ]
        }
      }
      setEvaluatorsList([...evaluatorsList, ...tempArr])
    } else {
      setEvaluatorCountError(true)
    }
  }

  const renderEvaluatees = (count: number) => {
    if (count > 0) {
      let tempArr: IEvaluatee[] = []
      for (let evaluatee = 1; evaluatee <= count; evaluatee++) {
        const evaluateeNumber = evaluateesList.length + evaluatee
        tempArr = [
          ...tempArr,
          {...evaluateeObjInfo, id: uuidv4(), header: `Evaluatee ${evaluateeNumber}`},
        ]
      }
      setEvaluateesList([...evaluateesList, ...tempArr])
    } else {
      setEvaluateeCountError(true)
    }
  }

  const handleRemoveEvaluator = (item: IEvaluator) => {
    const newList = [...evaluatorsList]
    const index = evaluatorsList.indexOf(item)
    if (index > -1) {
      newList.splice(index, 1)
    }
    setEvaluatorsList(newList)
  }

  const handleRemoveEvaluatee = (item: IEvaluatee) => {
    const newList = [...evaluateesList]
    const index = evaluateesList.indexOf(item)
    if (index > -1) {
      newList.splice(index, 1)
    }
    setEvaluateesList(newList)
  }

  return (
    <Box className={classes.infoRootBox}>
      <Box className={classes.eventTitleBox}>
        <Typography className={classes.eventTitleText}>Event Title:</Typography>
        <TextField
          InputLabelProps={{style: {fontSize: 14}}}
          className={`${classes.eventTitleInput} textField-remove-border`}
          label="Event Title"
          variant="outlined"
          type="input"
          fullWidth
          size="small"
          value={eventTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEventTitle(e.target.value)
          }}
        />
      </Box>
      <Box className={classes.eventInfoBoxEvaluator}>
        <Typography className={classes.evaluatorText}>Evaluators:</Typography>
        <FormGroup className={classes.addButtonBox}>
          <Box component="form" onSubmit={handleEvaluatorsSubmit}>
            <TextField
              InputLabelProps={{
                style: {
                  fontSize: 14,
                },
              }}
              className={`${classes.evaluatorInput} textField-remove-border`}
              label="Number of evaluators"
              variant="outlined"
              error={evaluatorCountError}
              type="number"
              fullWidth
              size="small"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEvaluatorsCount(parseInt(e.target.value, 10))
              }}
            />
            <Button className={classes.addButton} type="submit" variant="contained" size="medium">
              ADD
            </Button>
          </Box>
        </FormGroup>
      </Box>
      {evaluatorCountError ? (
        <Typography className={classes.evaluatorNumberErrorText}>
          You need to fill number of evaluators.
        </Typography>
      ) : null}
      <Box className={classes.checkboxManagerBox}>
        <Checkbox
          className={classes.checkbox}
          {...label}
          checked={isTopManagerChecked}
          onChange={handleChangeCheckbox}
        />
        <Typography className={classes.headerRegular}>Include Top Manager as Evaluator </Typography>
      </Box>
      <Box className={classes.evaluatorsArr}>
        <Grid container>
          {evaluatorsList.map((item: IEvaluator) => (
            <Paper key={item.id} className={classes.evaluatorCard}>
              <Box className={classes.evaluatorCardHeader}>
                <Typography className={classes.evaluatorHeaderName}>{item.header}</Typography>
                <IconButton
                  className={classes.deleteIconButton}
                  onClick={() => {
                    handleRemoveEvaluator(item)
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
                  label={item.name}
                  value={item.nameValue}
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={(e) => {
                    onChangeEvaluatorData(item.id, e.target.value, e.target.name)
                  }}
                />
                <TextField
                  name={'positionValue'}
                  className={classes.evaluateeCardInput}
                  label={item.position}
                  value={item.positionValue}
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onChangeEvaluatorData(item.id, e.target.value, e.target.name)
                  }}
                />
                <TextField
                  name={'emailValue'}
                  className={classes.evaluateeCardInput}
                  label={item.email}
                  value={item.emailValue}
                  variant="outlined"
                  size="small"
                  autoComplete="email"
                  fullWidth
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onChangeEvaluatorData(item.id, e.target.value, e.target.name)
                  }}
                />
              </Box>
            </Paper>
          ))}
        </Grid>
      </Box>
      <Box>
        <Box className={classes.eventInfoBoxEvaluator}>
          <Typography className={classes.evaluatorText}>Evaluatees:</Typography>
          <FormGroup className={classes.addButtonBox}>
            <Box component="form" onSubmit={handleEvaluateesSubmit}>
              <TextField
                InputLabelProps={{style: {fontSize: 14}}}
                className={`${classes.evaluatorInput} textField-remove-border`}
                label="Number of evaluatees"
                variant="outlined"
                error={evaluateeCountError}
                type="number"
                fullWidth
                size="small"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEvaluateesCount(parseInt(e.target.value, 10))
                }}
              />
              <Button className={classes.addButton} type="submit" variant="contained" size="medium">
                ADD
              </Button>
            </Box>
          </FormGroup>
        </Box>
        {evaluateeCountError ? (
          <Typography className={classes.evaluatorNumberErrorText}>
            You need to fill number of evaluatees.
          </Typography>
        ) : null}
        <Box className={classes.evaluateesArr}>
          <Grid container>
            {evaluateesList.map((item: IEvaluatee) => (
              <Paper key={item.id} className={classes.evaluatorCard}>
                <Box className={classes.evaluatorCardHeader}>
                  <Typography className={classes.evaluatorHeaderName}>{item.header}</Typography>
                  <IconButton
                    onClick={() => {
                      handleRemoveEvaluatee(item)
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
                    label={item.name}
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
                    label={item.position}
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
                    label={item.date}
                    type="date"
                    defaultValue="2022-04-21"
                    value={item.dateValue}
                    className={classes.evaluateeCardDateInput}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      onChangeEvaluateeData(item.id, e.target.value, e.target.name)
                    }}
                  />
                  <TextField
                    name="salaryValue"
                    className={classes.evaluateeCardInput}
                    label={item.salary}
                    value={item.salaryValue}
                    variant="outlined"
                    size="small"
                    type="number"
                    fullWidth
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      onChangeEvaluateeData(item.id, e.target.value, e.target.name)
                    }}
                  />
                </Box>
              </Paper>
            ))}
          </Grid>
        </Box>
      </Box>
      <Button
        className={classes.nextButton}
        type="submit"
        variant="contained"
        size="medium"
        onClick={navigateToCriteriasAndSendDataToContext}
      >
        NEXT
      </Button>
    </Box>
  )
}

export default CreateEventFirstPage
