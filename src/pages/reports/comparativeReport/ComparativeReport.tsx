import React, {useState} from 'react'
import {
  Box,
  Button,
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

drilldown(Highcharts)
const ComparativeReport = () => {
  const classes = useReportsStyle()
  const [value, setValue] = useState<string>('')
  const [randomColor, setRandomColor] = useState()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const calendarPopoverId = open ? 'simple-popover' : undefined

  const chart = {
    colors: randomColor,
    chart: {
      type: 'column',
    },

    title: {
      text: '',
    },

    subtitle: {
      text: '',
    },
    legend: {
      // marginTop: 50,
      alignColumns: true,
      align: 'left',
      layout: 'horizontal',
      verticalAlign: 'top',
      x: 10,
      useHTML: '<span>Score</span>',
      title: {
        text: 'Score',
        style: {fontWeight: 'bold', color: color.employeeColor},
      },
    },

    // legend: {
    //   align: 'bottom',
    //   verticalAlign: 'middle',
    //   layout: 'horizontal',
    //   itemStyle: {
    //     color: color.employeeColor,
    //     backgroundColor: 'red',
    //   },
    //   title: {
    //     text: 'Score',
    //     style: {fontWeight: 'bold', color: color.employeeColor},
    //   },
    //
    // },

    xAxis: {
      categories: ['Work Performance', 'Personal Skills ', 'Company Culture'],
      labels: {
        x: -10,
      },
    },

    yAxis: {
      allowDecimals: false,
      title: {
        text: '',
      },
    },

    series: [
      {
        name: 'Christmas Eve',
        data: [5, 4, 3],
      },
      {
        name: 'Christmas Day before dinner',
        data: [6, 4, 10],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
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
  }
  return (
    <Box>
      <AddEmployee setColor={setRandomColor} />
      <Box className="export-btn">
        <Button variant="outlined" className={classes.exportBtn}>
          EXPORT REPORT
        </Button>
      </Box>
      <Box className="chart-search">
        <Typography>Employee average score comparison</Typography>
        <Box>
          <FormControl variant="outlined" style={{width: '100%'}}>
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
        <HighchartsReact highcharts={Highcharts} options={chart} />
      </Box>
    </Box>
  )
}

export default ComparativeReport
