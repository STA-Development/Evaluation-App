import React, {FC, useContext, useState} from 'react';
import {Box, Button, Checkbox, Grid, IconButton, Paper, TextField, TextFieldProps, Typography} from "@mui/material";
import {useCreateEventStyles} from "../../../assets/styleJs/events/createEvent"
import {v4 as uuidv4} from "uuid";
import DeleteIcon from "../../../assets/images/Icons/DeleteIcon";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import CalendarIcon from "../../../assets/images/Icons/CalendarIcon";
import {EventContext} from "./EventsContext";


const CreateEvent: FC = () => {
  const classes = useCreateEventStyles()
  // const navigate = useNavigate();
  const UseEventContext = () => useContext(EventContext)
  const {state, dispatch} = UseEventContext()


  const [evaluatorsCount, setEvaluatorsCount] = useState<any>(null)
  const [eventTitle, setEventTitle] = useState<string>("")
  const [evaluateesCount, setEvaluateesCount] = useState<any>(null)
  const [evaluatorsList, setEvaluatorsList] = useState<any>([])
  const [evaluateesList, setEvaluateesList] = useState<any>([])
  const [checked, setChecked] = useState<boolean>(true);

  const [evaluatorObjInfo, setEvaluatorObjInfo] = useState<object>({
    id: uuidv4(),
    header: "Evaluator 1",
    name: "Name / Surname",
    nameValue: "",
    position: "Position",
    positionValue: "",
    email: "Email",
    emailValue: ""
  })

  const [evaluateeObjInfo, setEvaluateeObjInfo] = useState<object>({
    id: uuidv4(),
    header: "",
    name: "Name / Surname",
    nameValue: "",
    position: "Position",
    positionValue: "",
    date: "Hire date",
    dateValue: null,
    salary: "Monthly Salary",
    salaryValue: 0
  })


  const navigateToCriteriasAndSendDataToContext = () => {

    dispatch({type: 'Event_Title', payload: eventTitle})
    dispatch({type: 'Evaluators', payload: evaluatorsList})
    dispatch({type: 'Evaluatees', payload: evaluateesList})
    console.log(state)
    // navigate("criteria")
  }
  // useEffect(() => {
  //   console.log(state)
  // }, [state])

  const label = {inputProps: {'aria-label': 'Checkbox demo'}}


  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const onChangeEvaluatorName = (id: string, value: string) => {
    const newArray = evaluatorsList.map((item: any) => {
      if (item.id === id) {
        return {...item, nameValue: value}
      }
      return item
    })
    setEvaluatorsList(newArray)
  }

  const onChangeEvaluatorPosition = (id: string, value: string) => {
    const newArray = evaluatorsList.map((item: any) => {
      if (item.id === id) {
        return {...item, positionValue: value}
      }
      return item
    })
    setEvaluatorsList(newArray)
  }


  const onChangeEvaluatorEmail = (id: string, value: string) => {
    const newArray = evaluatorsList.map((item: any) => {
      if (item.id === id) {
        return {...item, emailValue: value}
      }
      return item
    })
    setEvaluatorsList(newArray)
  }

  const onChangeEvaluateeName = (id: string, value: string) => {
    const newArray = evaluateesList.map((item: any) => {
      if (item.id === id) {
        return {...item, nameValue: value}
      }
      return item
    })
    setEvaluateesList(newArray)
  }

  const onChangeEvaluateePosition = (id: string, value: string) => {
    const newArray = evaluateesList.map((item: any) => {
      if (item.id === id) {
        return {...item, positionValue: value}
      }
      return item
    })
    setEvaluateesList(newArray)
  }

  const onChangeEvaluateeDate = (id: string, value: string) => {
    const newArray = evaluateesList.map((item: any) => {
      if (item.id === id) {
        return {...item, dateValue: value}
      }
      return item
    })
    setEvaluateesList(newArray)
  }

  const onChangeEvaluateeSalary = (id: string, value: string) => {
    const newArray = evaluateesList.map((item: any) => {
      if (item.id === id) {
        return {...item, salaryValue: value}
      }
      return item
    })
    setEvaluateesList(newArray)
  }

  const renderEvaluators = (count: number) => {
    let found = false
    evaluatorsList.forEach(function (el: any) {
      if (el.email === "norvik@adrack.com") {
        found = true
      }
    })
    let tempArr: any[] = []
    if (checked && !found) {
      tempArr[0] = {
        id: uuidv4(),
        header: "Evaluator 1 (Top Manager)",
        name: "Norvik Abdalian",
        position: "CTO",
        email: "norvik@adrack.com"
      }
    } else {
      tempArr[0] = {...evaluatorObjInfo, id: uuidv4(), header: `Evaluator ${evaluatorsList?.length + 1}`}
    }
    for (let i = 2; i <= count; i++) {
      tempArr = [...tempArr, {...evaluatorObjInfo, id: uuidv4(), header: `Evaluator ${evaluatorsList?.length + i}`}]
    }
    setEvaluatorsList([...evaluatorsList, ...tempArr])
  }

  const renderEvaluatees = (count: number) => {
    let tempArr: any[] = []
    for (let i = 1; i <= count; i++) {
      tempArr = [...tempArr, {...evaluateeObjInfo, id: uuidv4(), header: `Evaluatee ${evaluateesList?.length + i}`}]
    }
    setEvaluateesList([...evaluateesList, ...tempArr])
  }

  const handleRemoveEvaluator = (item: object) => {
    const newList = [...evaluatorsList]
    const index = evaluatorsList.indexOf(item);
    if (index > -1) {
      newList.splice(index, 1);
    }
    setEvaluatorsList(newList);
  }

  const handleRemoveEvaluatee = (item: object) => {
    const newList = [...evaluateesList]
    const index = evaluateesList.indexOf(item);
    if (index > -1) {
      newList.splice(index, 1);
    }
    setEvaluateesList(newList);
  }


  return (

    <div className={classes.rootCreateEvent}>

      <Box className={classes.eventTitleBox}>
        <Typography>Event Title:</Typography>
        <TextField
          InputLabelProps={{style: {fontSize: 14}}}
          className={classes.createEventInput}
          label="Event Title"
          variant="outlined"
          type="eventTitle"
          fullWidth
          size="small"
          value={eventTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEventTitle(e.target.value)
          }}
        />
      </Box>
      <Box className={classes.eventTitleBox}>
        <Typography>Evaluators:</Typography>
        <TextField
          InputLabelProps={{
            style: {
              fontSize: 14
            }
          }}
          className={classes.createEventInput}
          label="Evaluators"
          variant="outlined"
          type="number"
          fullWidth
          size="small"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEvaluatorsCount(e.target.value)
          }}
        /><Button type="submit" variant="contained" size="medium"
                  onClick={() => {
                    renderEvaluators(evaluatorsCount)
                  }}>
        ADD
      </Button>
      </Box>
      <Box className={classes.eventTitleBox}>
        <Checkbox {...label} checked={checked} onChange={handleChangeCheckbox}/>
        <Typography>Include Top Manager as Evaluator </Typography>
      </Box>
      <Box className={classes.evaluatorsArr}>
        <Grid container>
          {evaluatorsList.map((item: any) => {
            return (
              <Paper key={item.id} className={classes.evaluatorCard}>
                <Box className={classes.evaluatorCardHeader}>
                  <Typography className={classes.evaluatorHeaderName}
                  >
                    {item.header}
                  </Typography>
                  <IconButton className={classes.deleteIconButton} onClick={() => {
                    handleRemoveEvaluator(item)
                  }} aria-label="delete">
                    <DeleteIcon/>
                  </IconButton>
                </Box>
                <Box>
                  <TextField
                    className={`${classes.evaluateeCardInput} ${classes.mt14}`}
                    label={item.name}
                    value={item.nameValue}
                    variant="outlined"
                    size="small"
                    fullWidth
                    onChange={(e) => onChangeEvaluatorName(item.id, e.target.value)}
                  />
                  <TextField
                    className={`${classes.evaluateeCardInput} ${classes.mt20}`}
                    label={item.position}
                    value={item.positionValue}
                    variant="outlined"
                    size="small"
                    fullWidth
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      onChangeEvaluatorPosition(item.id, e.target.value)
                    }}
                  />
                  <TextField
                    className={`${classes.evaluateeCardInput} ${classes.mt20}`}
                    label={item.email}
                    value={item.emailValue}
                    variant="outlined"
                    size="small"
                    autoComplete="email"
                    fullWidth
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      onChangeEvaluatorEmail(item.id, e.target.value)
                    }}
                  />
                </Box>
              </Paper>
            )
          })}
        </Grid>
      </Box>
      <Box>
        <Box className={classes.eventTitleBox}>
          <Typography>Evaluatees:</Typography>
          <TextField
            InputLabelProps={{style: {fontSize: 14}}}
            className={classes.createEventInput}
            label="Evaluatees"
            variant="outlined"
            type="number"
            fullWidth
            size="small"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEvaluateesCount(e.target.value)
            }}
          /><Button type="submit" variant="contained" size="medium" onClick={() => {
          renderEvaluatees(evaluateesCount)
        }}>
          ADD
        </Button>
        </Box>
        <Box className={classes.evaluateesArr}>
          <Grid container>
            {evaluateesList.map((item: any) => {
              return (
                <Paper key={item.id} className={classes.evaluateeCard}>
                  <Box className={classes.evaluateeCardHeader}>
                    <Typography className={classes.evaluateeHeaderName}
                    >
                      {item.header}
                    </Typography>
                    <IconButton onClick={() => {
                      handleRemoveEvaluatee(item)
                    }} aria-label="delete">
                      <DeleteIcon/>
                    </IconButton>
                  </Box>
                  <Box>
                    <TextField
                      className={`${classes.evaluateeCardInput} ${classes.mt14}`}
                      label={item.name}
                      value={item.nameValue}
                      variant="outlined"
                      size="small"
                      fullWidth
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChangeEvaluateeName(item.id, e.target.value)
                      }}
                    />
                    <TextField
                      className={`${classes.evaluateeCardInput} ${classes.mt20}`}
                      label={item.position}
                      value={item.positionValue}
                      variant="outlined"
                      size="small"
                      fullWidth
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChangeEvaluateePosition(item.id, e.target.value)
                      }}
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        components={{
                          OpenPickerIcon: CalendarIcon
                        }}
                        label={item.date}
                        inputFormat="MM/dd/yyyy"
                        value={item.dateValue}
                        onChange={(event: any) => {
                          onChangeEvaluateeDate(item.id, event);
                        }}
                        renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) =>
                          <TextField size='small'
                                     className={`${classes.evaluateeCardInput} ${classes.mt20}`}
                                     {...params}
                          />}
                      />
                    </LocalizationProvider>
                    <TextField
                      className={`${classes.evaluateeCardInput} ${classes.mt20}`}
                      label={item.salary}
                      value={item.salaryValue}
                      variant="outlined"
                      size="small"
                      type="number"
                      fullWidth
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChangeEvaluateeSalary(item.id, e.target.value)
                      }}
                    />
                  </Box>
                </Paper>
              )
            })}
          </Grid>
        </Box>
      </Box>
      <Box>
        <Button type="submit" variant="contained" size="medium" onClick={navigateToCriteriasAndSendDataToContext}>
          NEXT
        </Button>
      </Box>
    </div>
  );
}


export default CreateEvent;


