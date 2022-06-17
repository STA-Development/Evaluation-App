import React, {useEffect, useState} from 'react'
import {Box, CircularProgress} from '@mui/material'
import AddEmployeeEvent from './AddEmployeeEvent'
import {IEmployeeReport} from '../../../types/EmpoyeeReport'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import {color} from '../../../assets/style/globalVariables'
import {randomColor, randomData} from '../../../utils/utils'

const EmployeePersonalGrowthReport = () => {
  const [employeeReport, setEmployeeReport] = useState<IEmployeeReport>()
  const [isUpdatingChart, setIsUpdatingChart] = useState<boolean>(true)
  const [chart, setChart] = useState<HighchartsReact.Props>()

  useEffect(() => {
    if (employeeReport?.employeeName && employeeReport?.eventName) {
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
          x: 30,
          useHTML: 'Score',
          title: {
            text: 'Score',
            style: {fontWeight: 'bold', color: color.employeeColor},
          },
        },

        xAxis: {
          categories: ['1st Quarter', '2st Quarter', '3st Quarter'],
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
        colors: [randomColor(), randomColor(), randomColor()],
        series: [
          {
            name: 'Work Performance',
            data: [randomData(), randomData(), randomData()],
          },
          {
            name: 'Personal Skills ',
            data: [randomData(), randomData(), randomData()],
          },
          {
            name: 'Company Culture',
            data: [randomData(), randomData(), randomData()],
          },
        ],
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
    }
  }, [employeeReport])

  useEffect(() => {
    setIsUpdatingChart(false)
  }, [chart])

  return (
    <Box>
      <AddEmployeeEvent
        getReport={(item: IEmployeeReport) => {
          setEmployeeReport(item)
        }}
      />

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
export default EmployeePersonalGrowthReport
