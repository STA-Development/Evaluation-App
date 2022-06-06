import React from 'react'
import {Box, Button} from '@mui/material'
import AddEmployee from './AddEmployee'
import useReportsStyle from '../../../assets/styleJs/report/report'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

const ComparativeReport = () => {
  const classes = useReportsStyle()

  const chart = {
    chart: {
      type: 'column',
    },

    title: {
      text: '',
    },

    subtitle: {
      text: '',
    },
    colors: ['red', 'blue'],

    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
    },

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
        data: [1, 4, 3],
      },
      {
        name: 'Christmas Day before dinner',
        data: [6, 4, 2],
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
              verticalAlign: 'bottom',
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
      <AddEmployee />
      <Box className="export-btn">
        <Button variant="outlined" className={classes.exportBtn}>
          EXPORT REPORT
        </Button>
      </Box>

      <Box>
        <HighchartsReact highcharts={Highcharts} options={chart} />
      </Box>
    </Box>
  )
}

export default ComparativeReport
