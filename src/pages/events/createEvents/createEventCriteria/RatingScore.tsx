import React, {useContext, useState} from 'react';
import {Box, Button, IconButton, InputBase, Paper, RadioProps, TextField, Typography} from "@mui/material";
import Popover from "@mui/material/Popover";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import {IratingScoreObj, IRatingScoreParams} from "../TypesEvents";
import FormControlLabel from "@mui/material/FormControlLabel";
import PercentIcon from "../../../../assets/images/Icons/PercentIcon";
import useCreateEventStyles from "../../../../assets/styleJs/events/createEvent";
import Radio from "@mui/material/Radio";
import RadioIconChecked from "../../../../assets/images/Icons/RadioIconChecked";
import RadioIcon from "../../../../assets/images/Icons/RadioIcon";
import {createEventReducerTypes} from "../../../../types/createEventTypes";
import {EventContext} from "../EventsContext";

const RatingScore = (params: IRatingScoreParams) => {

  const UseEventContext = () => useContext(EventContext)
  const classes = useCreateEventStyles()
  const {dispatchContext} = UseEventContext()

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [bonusPercentage, setBonusPercentage] = useState<number | string>('')
  const [ratingFirstValue, setRatingFirstValue] = useState<number>(1)
  const [ratingLastValue, setRatingLastValue] = useState<number>(25)


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const addRatingFunc = (firstValue: number, lastValue: number) => {
    if (
      params.ratingScoreArr.some(
        (item: IratingScoreObj) => item.to === lastValue && item.from === firstValue,
      )
    ) {
      return
    } else if (firstValue && lastValue && lastValue > firstValue) {
      const newObj = {
        id: Math.random(),
        from: firstValue,
        to: lastValue,
        isSelected: false
      }
      const tempArr = [...params.ratingScoreArr, newObj]
      params.setRatingScoreArr(tempArr.sort((a, b) => a.to - b.from))
      setRatingFirstValue(1)
      setRatingLastValue(0)
      handleClose()
    }
  }

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

  const renderCalculationCards = () => {
    if (params.evaluateesList.length) {
      params.setPercentageIsSet(true)
    }
  }
  const passBonusPercentage = (percentage: number) => {
    setBonusPercentage(percentage)
    dispatchContext({
      type: createEventReducerTypes.bonusPercentage,
      bonusPercentage: percentage,
    })
  }
  const open = Boolean(anchorEl)

  const id = open ? 'simple-popover' : undefined

  return (
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
                    const idRating = parseInt(value, 10)
                    const option = params.ratingScoreArr.find((item: IratingScoreObj) => item.id === idRating)
                    if (option !== undefined) {
                      const tempObj = {
                        from: option.from,
                        to: option.to,
                        id: Math.random(),
                        isSelected: option.isSelected
                      }
                      params.setRatingFinalValue(tempObj)
                    }
                  }}
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  {params.ratingScoreArr.map((item: IratingScoreObj, index: number) => (
                    <FormControlLabel
                      onChange={() => {
                        const newArr = params.ratingScoreArr.map((newItem: IratingScoreObj) => {
                          if (newItem.id === item.id) {
                            return {...newItem, isSelected: true}
                          } else {
                            return {...newItem, isSelected: false}
                          }
                        })
                        params.setRatingScoreArr(newArr)
                      }
                      }
                      key={index}
                      className={classes.ratingScoreLabel}
                      value={item.id}
                      control={<BpRadio />}
                      label={`From ${item.from} point - to ${item.to} points`}
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

  );
};

export default RatingScore;