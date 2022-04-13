import React from 'react';
import {TableCell, TableHead, TableRow, TableSortLabel} from "@mui/material";

const headCells = [
  {
    id: 'status',

    label: 'Status',
  },
  {
    id: 'name',

    label: 'Name',
  },
  {
    id: 'date',

    label: 'Date',
  },
  {
    id: 'evaluators',

    label: 'Evaluators',
  },
  {
    id: 'evaluatees',

    label: 'Evaluatees',
  },
];


const TableHeader = ({valueToOrderBy, orderDirection, handleRequestSort}: any) => {

  const createSortHandler = (property: any) => (e: any) => {
    handleRequestSort(e, property)

  }

  return (
    <TableHead>
      <TableRow>
        <TableCell key='name'>
          <TableSortLabel
            active={valueToOrderBy === 'status'}
            direction={valueToOrderBy === 'status' ? orderDirection : 'asc'}
            onClick={createSortHandler('status')}
          >
            Status
          </TableSortLabel>
        </TableCell>

        <TableCell key='age'>
          <TableSortLabel
            active={valueToOrderBy === 'name'}
            direction={valueToOrderBy === 'name' ? orderDirection : 'asc'}
            onClick={createSortHandler('name')}
          >
            Name
          </TableSortLabel>
        </TableCell>


      </TableRow>
    </TableHead>
  );
};

export default TableHeader;