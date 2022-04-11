import React from "react";
import {Box, Typography} from "@mui/material";
import {useGlobalTheme} from "../../../../assets/style/globalVariables";
import {DataGrid, GridColDef} from '@mui/x-data-grid';


const MyEvents = () => {
  const globalClasses = useGlobalTheme();

  const columns: GridColDef[] = [
    {
      field: 'Status',
      width: 190,
      renderHeader: () => (
        <strong>
          <span role="img" aria-label="enjoy">
          🎂
        </span>
        </strong>
      ),
      editable: true
    },
    {
      field: 'Name',
      width: 190,
    },
    {
      field: 'Date',
      width: 190,
    },
    {
      field: 'Evaluators',
      width: 190,
    },
    {
      field: 'Evaluatees',
      width: 190,
    },
    {
      field: ' ',
      width: 190,
    }

  ]
  const rows = [
    {
      id: Math.random(),
      Status: 'Upcoming',
      Name: 'Quarter Evoluation',
      Date: 'Date',
      Evaluators: 'Evaluators',
      Evaluatees: 'Evaluatees',
      seeReport: 'See Report',
      restart: 'Restart',
    },
    {
      id: Math.random(),
      Status: 'Upcoming',
      Name: 'Quarter Evoluation',
      Date: 'Date',
      Evaluators: 'Evaluators',
      Evaluatees: 'Evaluatees',
      seeReport: 'See Report',
      restart: 'Restart',
    }, {
      id: Math.random(),
      Status: 'Upcoming',
      Name: 'Quarter Evoluation',
      Date: 'Date',
      Evaluators: 'Evaluators',
      Evaluatees: 'Evaluatees',
      seeReport: 'See Report',
      restart: 'Restart',
    }, {
      id: Math.random(),
      Status: 'Upcoming',
      Name: 'Quarter Evoluation',
      Date: 'Date',
      Evaluators: 'Evaluators',
      Evaluatees: 'Evaluatees',
      seeReport: 'See Report',
      restart: 'Restart',
    }, {
      id: Math.random(),
      Status: 'Upcoming',
      Name: 'Quarter Evoluation',
      Date: 'Date',
      Evaluators: 'Evaluators',
      Evaluatees: 'Evaluatees',
      seeReport: 'See Report',
      restart: 'Restart',
    },


  ]

  return (
    <Box>
      <Typography
        variant="h5"
        component="h4"
        className={globalClasses.contentHeader}
      >
        My Events
      </Typography>
      <div style={{height: 400, width: '100%'}}>
        <DataGrid
          columns={columns}
          rows={rows}
          pagination
        />
      </div>

    </Box>
  );
};

export default MyEvents;
