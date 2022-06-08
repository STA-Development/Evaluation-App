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

drilldown(Highcharts)
const ComparativeReport = () => {
  const classes = useReportsStyle()
  const [value, setValue] = useState<string>('')
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [chart, setChart] = useState<any>()
  const [getEmployee, setGetEmployee] = useState<any>([])
  const [isUpdatingChart, setIsUpdatingChart] = useState(true)
  const [getColor, setGetColor] = useState<string[]>([])

  console.log(getEmployee)

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
    setIsUpdatingChart(true)
    setChart({
      colors: getColor,
      chart: {
        type: 'column',
        marginRight: 75,
        marginLeft: 75,
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
          x: -10,
          y: 30,
          style: {
            color: '#756F86',
            fontSize: '14px',
          },
        },
        margin: 0,
        gridLineColor: '#DBE2EA',
        gridLineWidth: 2,
        lineColor: 'transparent',
        min: 0,
        max: 2,
      },

      yAxis: {
        allowDecimals: false,
        title: {
          text: '',
        },
        gridLineDashStyle: 'LongDash',
        lineColor: '#fff',
        lineWidth: 2,
        min: 0,
        max: 10,
      },
      series: getEmployee.map((item: IEmployee) => {
        return {
          name: item.name,
          data: [item.data1, item.data2, item.data3],
          pointWidth: 40,
          pointPadding: 0,
        }
      }),

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
      <AddEmployee getApply={(item: IEmployee) => setGetEmployee(item)} />
      <Box className="export-btn">
        <Button variant="outlined" className={classes.exportBtn}>
          EXPORT REPORT
        </Button>
      </Box>
      <Box className="chart-search">
        <Typography>Employee average score comparison</Typography>
        <Box>
          <FormControl variant="outlined" style={{maxWidth: '100%', width: '400px'}}>
            <TextField
              variant="outlined"
              fullWidth
              label="Search by Event title and/or date"
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
