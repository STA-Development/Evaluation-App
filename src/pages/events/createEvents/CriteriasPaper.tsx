import React, {useState} from 'react'
import useCreateEventStyles from '../../../assets/styleJs/events/createEvent'
import {Box, Button, Checkbox, Grid, Typography} from '@mui/material'
import {ICriteriaPaperInfo} from './TypesEvents'

const CriteriasPapers = () => {
  const classes = useCreateEventStyles()
  // const navigate = useNavigate()
  // const UseEventContext = () => useContext(EventContext)

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
                  <Checkbox className={classes.checkbox} defaultChecked />
                  <Typography className={classes.criteriasPaperHeaderText}>
                    {item.header}
                  </Typography>
                </Box>
                <Button className={classes.criteriaAddButton} variant="text">
                  <Typography className={classes.criteriasAddButtonText}>Add</Typography>
                </Button>
              </Box>
              <Box className={classes.criteriasPaperInfo}>
                {item.criterias.map((el: string, index1: number) => (
                  <Box className={classes.eachCriteria} key={index1}>
                    <Checkbox className={classes.checkbox} defaultChecked />
                    <Typography className={classes.criteriasPaperEachCriteriaText}>{el}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default CriteriasPapers
