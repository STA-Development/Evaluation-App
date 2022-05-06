import React, {useContext, useState} from 'react'
import useCreateEventStyles from '../../../assets/styleJs/events/createEvent'
import {
  Box,
  Button,
  Checkbox,
  Grid,
  IconButton,
  InputBase,
  Paper,
  RadioProps,
  Typography,
} from '@mui/material'
import {ICriteriaPaperInfo} from './TypesEvents'
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

const CriteriasPapers = () => {
  const UseEventContext = () => useContext(EventContext)
  const {dispatch} = UseEventContext()

  const onBackButtonClick = () => {
    dispatch({
      type: createEventReducerTypes.updateActivePageToCriterias,
      activePage: 'firstPage',
    })
  }

  const classes = useCreateEventStyles()
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

  const [criteriaPaperInfo] = useState<ICriteriaPaperInfo[]>([
    {
      header: 'Work Performance',
      criterias: [
        'Career growth',
        'Punctuality',
        'Accuracy',
        'Career growth',
        'Punctuality',
        'Accuracy',
      ],
    },
    {
      header: 'Work Performance',
      criterias: [
        'Career growth',
        'Punctuality',
        'Accuracy',
        'Career growth',
        'Punctuality',
        'Accuracy',
      ],
    },
    {
      header: 'Work Performance',
      criterias: [
        'Career growth',
        'Punctuality',
        'Accuracy',
        'Career growth',
        'Punctuality',
        'Accuracy',
      ],
    },
    {
      header: 'Custom Notes',
      criterias: ['Positive Feedback', 'Things To Improve'],
    },
  ])

  return (
    <Box className={classes.criteriasPapersBox}>
      <Grid columnSpacing={2} rowSpacing={2} container>
        {criteriaPaperInfo.map((item: ICriteriaPaperInfo, index: number) => (
          <Grid key={index} columns={2} item xs={6} className={classes.criteriasPaper}>
            <Box className={classes.criteriaPaperBackground}>
              <Box className={classes.criteriasPaperHeaderBox}>
                <Box className={classes.checkboxManagerBox}>
                  <Checkbox
                    className={classes.checkbox}
                    defaultChecked
                    icon={<UnCheckedIcon />}
                    checkedIcon={<CheckedIcon />}
                  />
                  <Typography className={classes.criteriasPaperHeaderText}>
                    {item.header}
                  </Typography>
                </Box>
                <Button className={classes.criteriaAddButton} variant="text" disableRipple>
                  <Typography className={classes.criteriasAddButtonText}>Add</Typography>
                </Button>
              </Box>
              <Box className={classes.criteriasPaperInfo}>
                {item.criterias.map((el: string, index1: number) => (
                  <Box className={classes.eachCriteria} key={index1}>
                    <Checkbox
                      className={classes.checkbox}
                      defaultChecked
                      icon={<UnCheckedIcon />}
                      checkedIcon={<CheckedIcon />}
                    />
                    <Typography className={classes.criteriasPaperEachCriteriaText}>{el}</Typography>
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
            <Typography className={classes.criteriaHeaderText}>Select The Rating Range</Typography>
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
                <Button className={classes.criteriaAddButton} variant="text" disableRipple>
                  <Typography className={classes.criteriasAddButtonText}>Add</Typography>
                </Button>
              </Box>
              <Box className={classes.criteriasPaperInfo}>
                <FormControl className={classes.scoreRangeBox}>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      className={classes.ratingScoreLabel}
                      value={5}
                      control={<BpRadio />}
                      label="From 1 point - to 5 points"
                    />
                    <FormControlLabel
                      className={classes.ratingScoreLabel}
                      value={10}
                      control={<BpRadio />}
                      label="From 1 point - to 10 points"
                    />
                    <FormControlLabel
                      className={classes.ratingScoreLabel}
                      value={20}
                      control={<BpRadio />}
                      label="From 1 point - to 20 points"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.criteriaPaperBonusPercentage}>
          <Box className={classes.criteriaRatingTexts}>
            <Typography className={classes.criteriaHeaderText}>Select Bonus Percentage</Typography>
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
                <Button className={classes.criteriaCalculateButton} variant="text" disableRipple>
                  <Typography className={classes.evaluatorHeaderName}>Calculate</Typography>
                </Button>
              </Box>
              <Box className={classes.criteriaPagePercentField}>
                <Paper component="form" className={classes.inputFieldPercent}>
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
          </Box>
        </Box>
      </Box>
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
        <Button className={classes.nextButton} type="submit" variant="contained" size="medium">
          NEXT
        </Button>
      </Box>
    </Box>
  )
}

export default CriteriasPapers
