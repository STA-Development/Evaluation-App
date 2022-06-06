import React, {useState} from 'react'
import {Box, Button} from '@mui/material'
import AddEmployee from './AddEmployee'
import useReportsStyle from '../../../assets/styleJs/report/report'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import drilldown from 'highcharts/modules/drilldown'

drilldown(Highcharts)
const ComparativeReport = () => {
  const classes = useReportsStyle()
  const [randomColor, setRandomColor] = useState()

  const chart = {
    colors: randomColor,
    chart: {
      type: 'column',
    },

    title: {
      text: 'asdsa',
    },

    subtitle: {
      text: '',
    },
    legend: {
      marginTop: 50,
      alignColumns: true,
      align: 'left',
      layout: 'horizontal',
      verticalAlign: 'top',
      x: 150,
      useHTML: '<span>Score</span>',
      // title: {
      //   text: 'Score',
      //   style: {fontWeight: 'bold', color: color.employeeColor},
      // },
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
        data: [6, 4, 12],
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
      <Box>
        <p>Lorem ipsum dolor sit amet.</p>
      </Box>
      <Box className="charts">
        <HighchartsReact highcharts={Highcharts} options={chart} />
      </Box>
    </Box>
  )
}

export default ComparativeReport
