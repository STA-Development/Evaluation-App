import React, {useState} from 'react'
import {Box, Grid, Typography} from '@mui/material'
import ProgressBar from 'react-customizable-progressbar'
import useViewForm from '../../../../../assets/styleJs/viewForm/viewForm'

const QuarterlyDevelopmentTeam = () => {
  const classes = useViewForm()
  const [progress] = useState<number>(100)
  return (
    <Grid container>
      <Grid item md={7} sm={12}>
        <Box className="display-flex__align-center">
          <Typography className={classes.progressTitle} variant="h6">
            Quarterly Development Team Evoluation
          </Typography>
          <Box className="display-flex__align-center">
            <ProgressBar
              radius={20}
              progress={progress}
              strokeWidth={5}
              strokeColor="#1eb892"
              strokeLinecap="square"
              trackStrokeWidth={5}
              className="progress-bar"
            />
            <Typography className={classes.progressPercentText}>{progress} % done</Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item md={5} sm={12}>
        <Box>
          <Box className="eval-box display-flex__align-center">
            <Typography className={classes.evalName}>Evaluator : Jenny Cooper</Typography>
            <Typography className={classes.evalPosition}>UI UX Designer</Typography>
          </Box>
          <Box className="display-flex__align-center">
            <Typography className={classes.evalName} variant="h6">
              Evaluatee : Anna Adams
            </Typography>
            <Typography className={classes.evalPosition}>Project Manager</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default QuarterlyDevelopmentTeam
