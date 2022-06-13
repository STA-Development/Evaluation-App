import React, {useEffect, useState} from 'react'
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  Popover,
  TextField,
  Typography,
} from '@mui/material'
import AddEmployee from './AddEmployee'
import useReportsStyle from '../../../assets/styleJs/report/report'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import drilldown from 'highcharts/modules/drilldown'
import {color} from '../../../assets/style/globalVariables'
import CalendarIcon from '../../../assets/images/Icons/CalendarIcon'
import {Calendar} from 'react-date-range'
import {formatWithMonthName} from '../../../utils/dateUtils'
import {IEmployee} from '../../../types/eployeeTypes'
import {v4 as uuidv4} from 'uuid'

drilldown(Highcharts)
const ComparativeReport = () => {
  const classes = useReportsStyle()
  const [value, setValue] = useState<string>('')
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [chart, setChart] = useState<HighchartsReact.Props>()
  const [getEmployee, setGetEmployee] = useState<IEmployee[]>([])
  const [isUpdatingChart, setIsUpdatingChart] = useState<boolean>(true)
  const [getColor, setGetColor] = useState<string[]>([])
  const [getEmployeeSeries, setGetEmployeeSeries] = useState<IEmployee[]>([])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const calendarPopoverId = open ? 'simple-popover' : undefined

  useEffect(() => {
    setGetColor(getEmployee.map((item: IEmployee) => item.bgColor))
  }, [getEmployee])

  useEffect(() => {
    setGetEmployeeSeries(
      getEmployee.map((item: IEmployee) => {
        if (item.name) {
          return {
            id: uuidv4(),
            name: item.name,
            bgColor: item.bgColor,
            data: [item.performanceData, item.skillsData, item.cultureData],
            pointWidth: 50,
          }
        }
        return item
      }),
    )
  }, [getEmployee])

  useEffect(() => {
    setIsUpdatingChart(true)
    setChart({
      chart: {
        type: 'column',
        height: '600px',
        marginRight: 75,
        marginLeft: 75,
      },

      credits: {
        enabled: false,
      },

      title: {
        text: '',
      },

      subtitle: {
        text: '',
      },

      legend: {
        alignColumns: true,
        align: 'left',
        layout: 'horizontal',
        verticalAlign: 'top',
        x: 50,
        useHTML: 'Score',
        title: {
          text: 'Score',
          style: {fontWeight: 'bold', color: color.employeeColor},
        },
      },

      xAxis: {
        categories: ['Work Performance', 'Personal Skills ', 'Company Culture'],
        labels: {
          style: {
            color: '#756F86',
            fontSize: '14px',
          },
        },
        margin: 0,
        gridLineColor: '#DBE2EA',
        gridLineWidth: 2,
        lineColor: 'transparent',
        max: 2,
      },

      yAxis: {
        min: 0,
        max: 10,

        title: {
          text: '',
        },
        gridLineDashStyle: 'LongDash',
        lineColor: '#fff',
        lineWidth: 20,
      },
      colors: getColor,
      series: getEmployeeSeries,
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key} </span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}:  </td>' +
          '<td style="padding:0"><b> {point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: false,
        useHTML: false,
      },

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
              padding: 50,
            },
            chartOptions: {
              legend: {
                align: 'center',
                verticalAlign: 'top',
                layout: 'horizontal',
              },
              yAxis: {
                labels: {
                  align: 'left',
                  x: 0,
                  y: -5,
                },
                title: {
                  text: null,
                },
              },
              subtitle: {
                text: null,
              },
              credits: {
                enabled: false,
              },
            },
          },
        ],
      },
    })
  }, [getColor])

  useEffect(() => {
    setIsUpdatingChart(false)
  }, [chart])

  return (
    <Box>
      <AddEmployee getApply={(item: IEmployee[]) => setGetEmployee(item)} />
      <Box className="export-btn">
        <Button variant="outlined" className={classes.exportBtn}>
          EXPORT REPORT
        </Button>
      </Box>
      <Box className="chart-search">
        <Typography>Employee average score comparison</Typography>
        <Box>
          <FormControl variant="outlined" className={classes.formControl}>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Search by Event title and/or date"
              value={value}
              className={classes.reportSelect}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClick}
                      edge="end"
                    >
                      <CalendarIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onFocus={(e) => e.target.select()}
            />
            <Popover
              id={calendarPopoverId}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Box>
                <Calendar onChange={(item) => setValue(formatWithMonthName(item))} />
              </Box>
            </Popover>
          </FormControl>
        </Box>
      </Box>
      <Box>
        {isUpdatingChart ? (
          <CircularProgress />
        ) : (
          <HighchartsReact highcharts={Highcharts} options={chart} />
        )}
      </Box>
    </Box>
  )
}

export default ComparativeReport
