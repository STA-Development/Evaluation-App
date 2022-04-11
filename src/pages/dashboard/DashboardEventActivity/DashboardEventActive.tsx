import React from "react";
import {Box, Typography} from "@mui/material";
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from "chart.js";
import {useDashboardStyles} from "../../../assets/styleJs/dashboard/dashboard";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardEventActive = () => {
  const classes = useDashboardStyles();

  const dataStyles = [
    {
      id: Math.random(),
      percent: 13,
      color: "rgba(178, 228, 213, 1)",
      name: "Rock Stars",
    },
    {
      id: Math.random(),
      percent: 10,
      color: "rgba(177, 142, 166, 1)",
      name: "Good Potential",
    },
    {
      id: Math.random(),
      percent: 4,
      color: "rgba(231, 243, 238, 1)",
      name: "Need Help",
    },
    {
      id: Math.random(),
      percent: 7,
      color: "rgba(242, 166, 166, 1)",
      name: "Waitng For The Evoluation",
    },
  ];

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      spacingRight: 100,
      height: 280
    },
    legend: {
      align: "right",
      verticalAlign: "middle",
      layout: "vertical",
      x: 0,
      y: 0,
      padding: 0,
      itemMarginTop: 20,
      itemMarginRight: 50,
      itemMarginBottom: 0,
      itemStyle: {
        lineHeight: "14px",
      },
      ColorString: {
        backgroundColor: '#000',
      },
    },
    title: {
      text: "",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        center: ['50%', '50%'],
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Job",
        colorByPoint: true,
        data: dataStyles.map((item) => {
          return {
            name: item.name,
            y: item.percent,
            color: item.color,
          };
        }),
      },
    ],
  };

  return (
    <Box className={classes.overview}>
      <Typography
        variant="h4"
        component="h4"
        className={classes.overviewHeader}
      >
        Overview
      </Typography>

      <Box className="canvasStyle">
        <HighchartsReact highcharts={Highcharts} options={options}/>
      </Box>

    </Box>
  );
};

export default DashboardEventActive;