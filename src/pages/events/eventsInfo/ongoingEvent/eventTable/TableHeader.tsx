import React from 'react'
import {v4 as uuidv4} from 'uuid'
import useEventsStyle from '../../../../../assets/styleJs/events/events'
import {IHeadCell, IRowsInfo, ITableHeaderCell} from '../../../../../types/types'
import {Box, TableCell, TableHead, TableRow, TableSortLabel} from '@mui/material'
import UpDownArrows from '../../../../../assets/images/Icons/UpDownArrows'

const headCells: IHeadCell[] = [
  {
    id: uuidv4(),
    name: 'status',
    label: 'Status',
  },
  {
    id: uuidv4(),
    name: 'name',
    label: 'Name',
  },
  {
    id: uuidv4(),
    name: 'name',
    label: 'Date',
  },
  {
    id: uuidv4(),
    name: 'evaluators',
    label: 'Evaluators',
  },
  {
    id: 'evaluates',
    name: 'evaluates',
    label: 'Evaluates',
  },
  {
    id: uuidv4(),
    name: '',
    label: '',
  },
]

const TableHeader = ({valueToOrderBy, orderDirection, handleRequestSort}: ITableHeaderCell) => {
  const classes = useEventsStyle()
  const createSortHandler = (property: keyof IRowsInfo) =>
    function (e: React.MouseEvent) {
      handleRequestSort(e, property)
    }

  return (
    <TableHead>
      <TableRow className="table-paper__header-cell">
        {headCells.map((cell) => (
          <TableCell key={cell.id} className={classes.tableHeader}>
            {cell.name && (
              <Box component="span" className="table__icon" onClick={createSortHandler(cell.name)}>
                <UpDownArrows />
              </Box>
            )}
            <TableSortLabel
              className={classes.sortableIcon}
              active={valueToOrderBy === cell.label}
              direction={valueToOrderBy === cell.label ? orderDirection : 'asc'}
              onClick={createSortHandler(cell.name)}
            >
              {cell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default TableHeader
