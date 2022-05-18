import React, {useContext, useEffect, useState} from 'react'
import useCreateEventStyles from '../../../assets/styleJs/events/createEvent'
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Grid,
  IconButton,
  InputBase,
  Paper,
  RadioProps,
  TextField,
  Typography,
} from '@mui/material'
import {
  ICriteriaPaperInfo,
  IEvaluatee,
  IratingScoreObj,
  ISubCriteria,
  RatingValues,
} from './TypesEvents'
import {v4 as uuidv4} from 'uuid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import RadioIconChecked from '../../../assets/images/Icons/RadioIconChecked'
import RadioIcon from '../../../assets/images/Icons/RadioIcon'
import UnCheckedIcon from '../../../assets/images/Icons/UnCheckedIcon'
import CheckedIcon from '../../../assets/images/Icons/CheckedIcon'
import PercentIcon from '../../../assets/images/Icons/PercentIcon'
import {createEventReducerTypes} from '../../../types/createEventTypes'
import {EventContext} from './EventsContext'
import Popover from '@mui/material/Popover'
import PlusIconBlue from '../../../assets/images/Icons/PlusIconBlue'
import axiosData from '../../../axiosData'
import {AxiosError, AxiosResponse} from 'axios'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import axiosError from '../../../utils/axiosError'
import EditIconCalculationCard from '../../../assets/images/Icons/EditIconCalculationCard'
import DollarIcon from '../../../assets/images/Icons/DollarIcon'

const CriteriasPapers = () => {
  const UseEventContext = () => useContext(EventContext)
  const {state, dispatch} = UseEventContext()
  const classes = useCreateEventStyles()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [criteriaData, setCriteriaData] = useState<ICriteriaPaperInfo[]>([])
  const [evaluateesList, setEvaluateesList] = useState<IEvaluatee[]>([])
  const [bonusPercentage, setBonusPercentage] = useState<number | string>('')
  const [ratingFirstValue, setRatingFirstValue] = useState<number>(1)
  const [ratingLastValue, setRatingLastValue] = useState<number>(25)
  const [openedCriteriaId, setOpenedCriteriaId] = useState<
    React.MouseEvent<HTMLButtonElement> | string
  >('')
  const [ratingFinalValue, setRatingFinalValue] = useState<RatingValues>({
    firstValue: 1,
    lastValue: 10,
  })
  const [newSubFilters, setNewSubFilters] = useState<ISubCriteria[]>([
    {
      id: Math.random(),
      name: '',
      result: true,
    },
  ])
  const [percentageIsSet, setPercentageIsSet] = useState<boolean>(false)
  const [ratingScoreArr, setRatingScoreArr] = useState<IratingScoreObj[]>([
    {
      values: {
        firstValue: 1,
        lastValue: 5,
      },
      text: 'From 1 point - to 5 points',
      id: uuidv4(),
    },
    {
      values: {
        firstValue: 1,
        lastValue: 10,
      },
      text: 'From 1 point - to 10 points',
      id: uuidv4(),
    },
    {
      values: {
        firstValue: 1,
        lastValue: 20,
      },
      text: 'From 1 point - to 20 points',
      id: uuidv4(),
    },
  ])
  const [openedSubCriterias, setOpenedSubCriterias] = useState<ISubCriteria[]>([])

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
    getCriterias()
  }, [])

  const onBackButtonClick = () => {
    dispatch({
      type: createEventReducerTypes.updateActivePageToCriterias,
      activePage: 'firstPage',
    })
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleCloseCriteria = () => {
    setAnchorElCriteria(null)
    setOpenedSubCriterias([])
    setNewSubFilters([
      {
        id: Math.random(),
        name: '',
        result: true,
      },
    ])
  }

  const renderCalculationCards = () => {
    if (evaluateesList.length) {
      setPercentageIsSet(true)
    }
  }

  const addRatingFunc = (firstValue: number, lastValue: number) => {
    if (
      ratingScoreArr.some(
        (item) => item.values.lastValue === lastValue && item.values.firstValue === firstValue,
      )
    ) {
      return
    } else if (firstValue && lastValue && lastValue > firstValue) {
      const newObj = {
        values: {
          firstValue,
          lastValue,
        },
        text: `From ${firstValue} point - to ${lastValue} points`,
        id: uuidv4(),
      }
      const tempArr = [...ratingScoreArr, newObj]
      setRatingScoreArr(tempArr.sort((a, b) => a.values.lastValue - b.values.lastValue))
      setRatingFirstValue(1)
      setRatingLastValue(0)
      handleClose()
    }
  }
  const passBonusPercentage = (percentage: number) => {
    setBonusPercentage(percentage)
    dispatch({
      type: createEventReducerTypes.bonusPercentage,
      bonusPercentage: percentage,
    })
  }
  const saveCriteraDataInGlobal = () => {
    dispatch({type: createEventReducerTypes.ratingRange, ratingRange: ratingFinalValue})
    dispatch({type: createEventReducerTypes.criterias, criterias: criteriaData})
    dispatch({type: createEventReducerTypes.evaluatees, evaluatees: evaluateesList})
  }
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [anchorElCriteria, setAnchorElCriteria] = React.useState<HTMLButtonElement | null>(null)

  const handleClickCriteria = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: React.MouseEvent<HTMLButtonElement> | string,
  ) => {
    setAnchorElCriteria(event.currentTarget)
    const getSubcriteria = async () => {
      const foundCriteria = criteriaData.find((el) => el.id === id)
      let data: ISubCriteria[] = []
      if (foundCriteria !== undefined && foundCriteria.subCriteria.length) {
        data = foundCriteria.subCriteria
        await setOpenedSubCriterias(data)
      }
    }
    setOpenedCriteriaId(id)
    getSubcriteria()
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
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

  const addOneSubCriteria = (arrNew: ISubCriteria[]) => {
    if (arrNew[arrNew.length - 1].name.length) {
      const newObj = {
        id: Math.random(),
        name: '',
        result: true,
      }
      const temp = [...arrNew, newObj]
      setNewSubFilters(temp)
    }
  }

  const addNewSubfilters = (
    newSubfilters: ISubCriteria[],
    openedSubfilters: ISubCriteria[],
    id: React.MouseEvent<HTMLButtonElement> | string,
    criteriaDataTemp: ICriteriaPaperInfo[],
  ) => {
    if (
      newSubfilters.every((item: ISubCriteria) => item.name.length > 0) &&
      openedSubfilters.every((item: ISubCriteria) => item.name.length > 0)
    ) {
      const newArr: ISubCriteria[] = openedSubfilters.concat(newSubfilters)
      const newArrRoot = criteriaDataTemp.map((oneCriteria) => {
        const newCriteriaObj = {...oneCriteria, subCriteria: [...newArr]}
        if (id === oneCriteria.id) {
          return newCriteriaObj
        } else {
          return oneCriteria
        }
      })
      setCriteriaData(newArrRoot)
      setOpenedSubCriterias([])
      setNewSubFilters([
        {
          id: Math.random(),
          name: '',
          result: true,
        },
      ])
      handleCloseCriteria()
    }
  }

  const handleClickOpen = () => {
    setOpenDialog(true)
  }

  const handleDialogClose = () => {
    setOpenDialog(false)
  }

  const changeEditable = (id: string) => {
    const newArray = evaluateesList.map((item: IEvaluatee) => {
      if (item.id === id) {
        return {...item, isEditable: true}
      }
      return item
    })
    setEvaluateesList(newArray)
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

  const open = Boolean(anchorEl)
  const openCriteria = Boolean(anchorElCriteria)

  const id = open ? 'simple-popover' : undefined
  const idCriteria = openCriteria ? 'simple-popover' : undefined

  const BpRadio = (props: RadioProps) => {
    return (
      <Radio
        disableRipple
        color="default"
        checkedIcon={<RadioIconChecked />}
        icon={<RadioIcon />}
        {...props}
      />
    )
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
          <Grid columnSpacing={2} rowSpacing={2} container>
            {criteriaData?.map((item: ICriteriaPaperInfo, index: number) => (
              <Grid key={index} columns={2} item xs={6} className={classes.criteriasPaper}>
                <Box className={classes.criteriaPaperBackground}>
                  <Box className={classes.criteriasPaperHeaderBox}>
                    <Box className={classes.checkboxManagerBox}>
                      <Checkbox
                        checked={item.criteria}
                        onChange={(e) => {
                          const newObj = {...item, criteria: e.target.checked}
                          const newArr = criteriaData.map((newItem: ICriteriaPaperInfo) => {
                            if (newItem.id === newObj.id) {
                              return newObj
                            } else {
                              return newItem
                            }
                          })
                          setCriteriaData(newArr)
                        }}
                        className={classes.checkbox}
                        defaultChecked
                        icon={<UnCheckedIcon />}
                        checkedIcon={<CheckedIcon />}
                      />
                      <Typography className={classes.criteriasPaperHeaderText}>
                        {item.name}
                      </Typography>
                    </Box>
                    <Button
                      className={classes.criteriaAddButton}
                      onClick={(e) => handleClickCriteria(e, item.id)}
                      variant="text"
                      disableRipple
                    >
                      <Typography className={classes.criteriasAddButtonText}>Add</Typography>
                    </Button>
                  </Box>
                  <Box className={classes.criteriasPaperInfo}>
                    {item.subCriteria.map((el: ISubCriteria, index1: number) => (
                      <Box className={classes.eachCriteria} key={index1}>
                        <Checkbox
                          checked={el.result}
                          onChange={(e) => {
                            const newObj = {...el, result: e.target.checked}
                            const newArrSubcriteria = item.subCriteria.map(
                              (newItem: ISubCriteria) => {
                                if (newItem.id === newObj.id) {
                                  return newObj
                                } else {
                                  return newItem
                                }
                              },
                            )
                            const bigObj = {...item, subCriteria: newArrSubcriteria}
                            const newBigArr = criteriaData.map((a) => {
                              if (bigObj.id === a.id) {
                                return bigObj
                              } else {
                                return a
                              }
                            })
                            setCriteriaData(newBigArr)
                          }}
                          className={classes.checkbox}
                          defaultChecked
                          icon={<UnCheckedIcon />}
                          checkedIcon={<CheckedIcon />}
                        />
                        <Typography className={classes.criteriasPaperEachCriteriaText}>
                          {el.name}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box className={classes.criteriaPaperBottomBox}>
            <Box className={classes.criteriaPaperRatingRoot}>
              <Box className={classes.criteriaRatingTexts}>
                <Typography className={classes.criteriaHeaderText}>
                  Select The Rating Range
                </Typography>
                <Typography className={classes.criteriaItalicText}>
                  The rating is from lowest score to the highest
                </Typography>
              </Box>
              <Box className={classes.criteriasRatingPaper}>
                <Box className={classes.criteriaPaperBackground}>
                  <Box className={classes.criteriasPaperHeaderBox}>
                    <Box className={classes.checkboxManagerBox}>
                      <Typography className={classes.criteriasPaperHeaderText}>
                        Rating Score Range
                      </Typography>
                    </Box>
                    <Button
                      className={classes.criteriaAddButton}
                      onClick={handleClick}
                      variant="text"
                      disableRipple
                    >
                      <Typography className={classes.criteriasAddButtonText}>Add</Typography>
                    </Button>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                    >
                      <Box className={classes.criteriasRatingPaper}>
                        <Box className={classes.criteriaPaperBackground}>
                          <Box className={classes.criteriasPaperHeaderBox}>
                            <Box className={classes.addRatingTextBox}>
                              <Typography className={classes.textW500S14}>
                                Add New Rating Score Range
                              </Typography>
                            </Box>
                          </Box>
                          <Box className={classes.criteriasPaperInfo}>
                            <Box className={classes.addRatingInfoBox}>
                              <BpRadio disabled={true} />
                              <Box className={classes.addRatingTextBox}>
                                <Typography className={classes.textW400S12}>From</Typography>
                                <TextField
                                  onChange={(e) => {
                                    setRatingFirstValue(parseInt(e.target.value, 10))
                                  }}
                                  value={ratingFirstValue}
                                  className={classes.textField30px}
                                  id="standard-number"
                                  type="number"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  variant="standard"
                                />
                                <Typography className={classes.textW400S12}>point - to</Typography>
                                <TextField
                                  onChange={(e) => {
                                    setRatingLastValue(parseInt(e.target.value, 10))
                                  }}
                                  value={ratingLastValue}
                                  className={classes.textField30px}
                                  id="standard-number"
                                  type="number"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  variant="standard"
                                />
                                <Typography className={classes.textW400S12}> points</Typography>
                              </Box>
                            </Box>
                            <Box className={classes.addRatingPopUpButtonsBox}>
                              <Button
                                onClick={handleClose}
                                className={classes.criteriaAddButton}
                                variant="text"
                                disableRipple
                              >
                                <Typography className={classes.criteriasAddButtonText}>
                                  Cancel
                                </Typography>
                              </Button>
                              <Button
                                onClick={() => addRatingFunc(ratingFirstValue, ratingLastValue)}
                                className={classes.criteriaAddButton}
                                variant="text"
                                disableRipple
                              >
                                <Typography className={classes.criteriasAddButtonText}>
                                  Apply
                                </Typography>
                              </Button>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Popover>
                  </Box>
                  <Box className={classes.criteriasPaperInfo}>
                    <FormControl className={classes.scoreRangeBox}>
                      <RadioGroup
                        onChange={(e, value) => {
                          const idRating = value
                          const option = ratingScoreArr.find((item) => item.id === idRating)
                          if (option !== undefined) {
                            setRatingFinalValue(option.values)
                          }
                        }}
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        {ratingScoreArr.map((item: IratingScoreObj, index) => (
                          <FormControlLabel
                            key={index}
                            className={classes.ratingScoreLabel}
                            value={item.id}
                            control={<BpRadio />}
                            label={item.text}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={classes.criteriaPaperBonusPercentage}>
              <Box className={classes.criteriaRatingTexts}>
                <Typography className={classes.criteriaHeaderText}>
                  Select Bonus Percentage
                </Typography>
                <Typography className={classes.criteriaItalicText}>
                  Percentage from monthly salary applies to the highest score
                </Typography>
              </Box>
              <Box className={classes.criteriasRatingPaper}>
                <Box className={classes.criteriaPaperBackground}>
                  <Box className={classes.criteriasPaperHeaderBox}>
                    <Box className={classes.checkboxManagerBox}>
                      <Typography className={classes.criteriasPaperHeaderText}>
                        Bonus Percentage
                      </Typography>
                    </Box>
                    <Button
                      className={classes.criteriaCalculateButton}
                      onClick={renderCalculationCards}
                      variant="text"
                      disableRipple
                    >
                      <Typography className={classes.evaluatorHeaderName}>Calculate</Typography>
                    </Button>
                  </Box>
                  <Box className={classes.criteriaPagePercentField}>
                    <Paper component="div" className={classes.inputFieldPercent}>
                      <InputBase
                        type="number"
                        className={`${classes.inputBase} ${classes.criteriaPagePercentFieldHeight}`}
                        placeholder="0"
                        value={bonusPercentage}
                        inputProps={{className: classes.inputText}}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          passBonusPercentage(parseInt(e.target.value, 10))
                        }}
                      />
                      <IconButton
                        disableRipple
                        className={classes.dollarIconButton}
                        aria-label="directions"
                      >
                        <PercentIcon />
                      </IconButton>
                    </Paper>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          {percentageIsSet && (
            <Box className={`${classes.criteriasPapersBox} ${classes.marginTop40}`}>
              <Grid columnSpacing={2} rowSpacing={2} container>
                {evaluateesList.map((item: IEvaluatee, index: number) => (
                  <Grid
                    key={index}
                    columns={3}
                    item
                    xs={4}
                    className={classes.criteriasCalculationCard}
                  >
                    <Paper
                      key={item.id}
                      className={`${classes.evaluatorCard} ${classes.evaluateeCalculationCard}`}
                    >
                      <Box className={classes.evaluatorCardHeader}>
                        <Typography className={classes.evaluatorHeaderName}>
                          {item.header}
                        </Typography>
                        <IconButton
                          onClick={() => {
                            changeEditable(item.id)
                          }}
                        >
                          <EditIconCalculationCard />
                        </IconButton>
                      </Box>
                      <Box className={classes.evaluatorCardInputBox}>
                        <Box className={classes.calculationPercentField}>
                          <Paper component="div" className={classes.inputFieldPercentWide}>
                            <InputBase
                              disabled={!item.isEditable}
                              inputProps={{className: classes.inputText}}
                              name={'nameValue'}
                              className={classes.inputBase}
                              value={item.nameValue}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                onChangeEvaluateeData(item.id, e.target.value, e.target.name)
                              }}
                            />
                          </Paper>
                        </Box>
                        <Box className={classes.calculationPercentField}>
                          <Paper component="div" className={classes.inputFieldPercentWide}>
                            <InputBase
                              disabled={!item.isEditable}
                              inputProps={{className: classes.inputText}}
                              name={'positionValue'}
                              className={classes.inputBase}
                              value={item.positionValue}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                onChangeEvaluateeData(item.id, e.target.value, e.target.name)
                              }}
                            />
                          </Paper>
                        </Box>
                        <Box className={classes.calculationPercentField}>
                          <Paper component="div" className={classes.inputFieldPercentWide}>
                            <InputBase
                              disabled={!item.isEditable}
                              inputProps={{className: classes.inputText}}
                              name={'dateValue'}
                              className={classes.inputBase}
                              value={item.dateValue}
                              type="date"
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                onChangeEvaluateeData(item.id, e.target.value, e.target.name)
                              }}
                            />
                          </Paper>
                        </Box>
                        <Box className={classes.calculationPercentField}>
                          <Paper component="div" className={classes.inputFieldPercentWide}>
                            <InputBase
                              disabled={!item.isEditable}
                              name={'salaryValue'}
                              type="number"
                              className={classes.inputBase}
                              placeholder="0"
                              inputProps={{className: classes.inputText}}
                              value={item.salaryValue}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                onChangeEvaluateeData(item.id, e.target.value, e.target.name)
                              }}
                            />
                            <IconButton
                              disableRipple
                              className={classes.dollarIconButton}
                              aria-label="directions"
                            >
                              <DollarIcon />
                            </IconButton>
                          </Paper>
                        </Box>
                        <Box className={classes.percentAndResultInputBox}>
                          <Box className={classes.percentInputBox}>
                            <Paper
                              component="div"
                              className={`${classes.inputFieldPercent} ${classes.width100}`}
                            >
                              <InputBase
                                disabled={true}
                                type="number"
                                className={classes.inputBase}
                                placeholder="0"
                                inputProps={{className: classes.inputText}}
                                value={state.bonusPercentage}
                              />
                              <IconButton
                                disableRipple
                                className={classes.dollarIconButton}
                                aria-label="directions"
                              >
                                <PercentIcon />
                              </IconButton>
                            </Paper>
                          </Box>
                          <Typography className={classes.equalText}>=</Typography>
                          <Box className={classes.calculationResultInputBox}>
                            <Paper component="div" className={classes.inputFieldPercentWide}>
                              <InputBase
                                disabled={true}
                                type="number"
                                className={classes.inputBase}
                                placeholder="0"
                                inputProps={{className: classes.inputText}}
                                value={(Number(item.salaryValue) * state.bonusPercentage) / 100}
                              />
                              <IconButton
                                disableRipple
                                className={classes.dollarIconButton}
                                aria-label="directions"
                              >
                                <DollarIcon />
                              </IconButton>
                            </Paper>
                          </Box>
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
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

      <Popover
        id={idCriteria}
        open={openCriteria}
        anchorEl={anchorElCriteria}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box className={classes.subCriteriaPaper}>
          <Box className={classes.criteriaPaperBackground}>
            <Box className={classes.subCriteriaPaperHeaderBox}>
              <Box className={classes.addRatingTextBox}>
                <Typography className={classes.textW500S14}>Add New Subfilter</Typography>
              </Box>
            </Box>
            <Box className={classes.bluePlusIconBox}>
              <IconButton
                onClick={() => {
                  addOneSubCriteria(newSubFilters)
                }}
              >
                <PlusIconBlue />
              </IconButton>
            </Box>
            <Box className={classes.subfilterPaperInfo}>
              {openedSubCriterias.map((subCriteria: ISubCriteria, indexSub: number) => (
                <Box key={indexSub} className={classes.eachSubCriteria}>
                  <Box className={classes.eachCriteria} key={indexSub}>
                    <Checkbox
                      className={classes.checkbox}
                      defaultChecked
                      icon={<UnCheckedIcon />}
                      checkedIcon={<CheckedIcon />}
                    />
                    <TextField
                      onChange={(e) => {
                        const tempObj = {...subCriteria, name: e.target.value}
                        const newArr = openedSubCriterias.map((item: ISubCriteria) => {
                          if (item.id === tempObj.id) {
                            return tempObj
                          } else {
                            return item
                          }
                        })
                        setOpenedSubCriterias(newArr)
                      }}
                      InputProps={{
                        classes: {notchedOutline: classes.noBorder},
                      }}
                      value={subCriteria.name}
                      className={classes.outlinedBasic}
                      placeholder="Subfilter name"
                      variant="outlined"
                    />
                  </Box>
                </Box>
              ))}
              {newSubFilters.map((newSubFilter: ISubCriteria, indexSubFilter: number) => (
                <Box key={indexSubFilter} className={classes.eachSubCriteria}>
                  <Box className={classes.eachCriteria} key={indexSubFilter}>
                    <Checkbox
                      className={classes.checkbox}
                      defaultChecked
                      icon={<UnCheckedIcon />}
                      checkedIcon={<CheckedIcon />}
                    />
                    <TextField
                      onChange={(e) => {
                        const tempObj = {...newSubFilter, name: e.target.value}
                        const newArr = newSubFilters.map((item: ISubCriteria) => {
                          if (item.id === tempObj.id) {
                            return tempObj
                          } else {
                            return item
                          }
                        })
                        setNewSubFilters(newArr)
                      }}
                      InputProps={{
                        classes: {notchedOutline: classes.noBorder},
                      }}
                      value={newSubFilter.name}
                      className={classes.outlinedBasic}
                      placeholder="Subfilter name"
                      variant="outlined"
                    />
                  </Box>
                </Box>
              ))}
              <Box className={classes.addSubCriteriaPopUpButtonsBox}>
                <Button
                  onClick={handleCloseCriteria}
                  className={classes.criteriaAddButton}
                  variant="text"
                  disableRipple
                >
                  <Typography className={classes.criteriasAddButtonText}>Cancel</Typography>
                </Button>
                <Button
                  onClick={() => {
                    addNewSubfilters(
                      newSubFilters,
                      openedSubCriterias,
                      openedCriteriaId,
                      criteriaData,
                    )
                  }}
                  className={classes.criteriaAddButton}
                  variant="text"
                  disableRipple
                >
                  <Typography className={classes.criteriasAddButtonText}>Apply</Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Popover>
    </Box>
  )
}

export default CriteriasPapers
