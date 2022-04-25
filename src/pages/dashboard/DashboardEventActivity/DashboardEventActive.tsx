import React from 'react'
import {Box, Typography} from '@mui/material'
import {v4 as uuidv4} from 'uuid'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import useDashboardStyles from '../../../assets/styleJs/dashboard/dashboard'


const DashboardEventActive = () => {
  const classes = useDashboardStyles()

  const dataStyles = [
    {
      id: uuidv4(),
      percent: 13,
      color: 'rgba(178, 228, 213, 1)',
      name: 'Rock Stars',
    },
    {
      id: uuidv4(),
      percent: 10,
      color: 'rgba(177, 142, 166, 1)',
      name: 'Good Potential',
    },
    {
      id: uuidv4(),
      percent: 4,
      color: 'rgba(231, 243, 238, 1)',
      name: 'Need Help',
    },
    {
      id: uuidv4(),
      percent: 7,
      color: 'rgba(242, 166, 166, 1)',
      name: 'Waitng For The Evoluation',
    },
  ]

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      spacingRight: 100,
      height: 280,
    },
    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
      x: 0,
      y: 0,
      padding: 0,
      itemMarginTop: 20,
      itemMarginRight: 50,
      itemMarginBottom: 0,
      itemStyle: {
        lineHeight: '14px',
      },
      ColorString: {
        backgroundColor: '#000',
      },
    },
    title: {
      text: '',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        center: ['50%', '50%'],
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: 'Job',
        colorByPoint: true,
        data: dataStyles.map((item) => ({
          name: item.name,
          y: item.percent,
          color: item.color,
        })),
      },
    ],
  }

  return (
    <Box className={classes.overview}>
      <Typography variant="h4" component="h4" className={classes.overviewHeader}>
        Overview
      </Typography>

      <Box className="canvasStyle">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Box>
    </Box>
  )
}

export default DashboardEventActive;
