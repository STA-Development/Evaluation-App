import React, {useContext} from 'react';
import {Box, Grid, IconButton, InputBase, Paper, Typography} from "@mui/material";
import {IBonusPercentageParams, IEvaluatee} from "../TypesEvents";
import EditIconCalculationCard from "../../../../assets/images/Icons/EditIconCalculationCard";
import DollarIcon from "../../../../assets/images/Icons/DollarIcon";
import PercentIcon from "../../../../assets/images/Icons/PercentIcon";
import useCreateEventStyles from "../../../../assets/styleJs/events/createEvent";
import {EventContext} from "../EventsContext";

const BonusPercentage = (params: IBonusPercentageParams) => {

  const UseEventContext = () => useContext(EventContext)
  const classes = useCreateEventStyles()
  const {state} = UseEventContext()

  const changeEditable = (id: string) => {
    const newArray = params.evaluateesList.map((item: IEvaluatee) => {
      if (item.id === id) {
        return {...item, isEditable: true}
      }
      return item
    })
    params.setEvaluateesList(newArray)
  }

  const onChangeEvaluateeData = (id: string, value: string, changingValue: string) => {
    const newArray = params.evaluateesList.map((item: IEvaluatee) => {
      if (item.id === id) {
        return {...item, [changingValue]: value}
      }
      return item
    })
    params.setEvaluateesList(newArray)
  }

  return (
    <Box>
    {params.percentageIsSet && (
      <Box className={`${classes.criteriasPapersBox} ${classes.marginTop40}`}>
        <Grid columnSpacing={2} rowSpacing={2} container>
          {params.evaluateesList.map((item: IEvaluatee, index: number) => (
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
    </Box>
  );
};


export default BonusPercentage;