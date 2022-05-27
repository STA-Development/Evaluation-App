import {Data, EnhancedTableProps, HeadCell} from '../../../types/performeTypes'
import * as React from 'react'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Checkbox from '@mui/material/Checkbox'
import TableSortLabel from '@mui/material/TableSortLabel'
import Box from '@mui/material/Box'
import {visuallyHidden} from '@mui/utils'

const headCells: readonly HeadCell[] = [
  {
    id: 'eventTitle',
    label: 'Title',
  },
  {
    id: 'eventStartsAt',
    label: 'Date',
  },
  {
    id: 'criteriaScore',
    label: 'Evoluation Criteria Score',
  },

  {
    id: 'performerType',
    label: 'Performer Type',
  },
  {
    id: 'evaluatorFirstName',
    label: 'Evaluatee/s',
  },
  {
    id: 'evaluateePosition',
    label: 'Evaluatee/sPosition',
  },
  {
    id: 'evaluatorLastName',
    label: 'Evaluator/s',
  },
  {
    id: 'evaluatorPosition',
    label: 'Evaluator/s Position',
  },
]

const EnhancedTableHead = (props: EnhancedTableProps) => {
  const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} = props
  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default EnhancedTableHead
