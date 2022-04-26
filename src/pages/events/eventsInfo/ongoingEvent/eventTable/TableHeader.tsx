import React from 'react'
import {Box, TableCell, TableHead, TableRow, TableSortLabel} from '@mui/material'
import {useEventsStyle} from '../../../../../assets/styleJs/events/events'
import {v4 as uuidv4} from 'uuid'
import UpDwonArrows from '../../../../../assets/images/Icons/UpDwonArrows'
import {Order, RowsInfo} from './TableContent'

interface ItestInterFace {
  id: string
  name: keyof RowsInfo
  label: string
}

const headCells: ItestInterFace[] = [
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
    id: uuidv4(),
    name: 'evaluates',
    label: 'Evaluates',
  },
  {
    id: uuidv4(),
    name: '',
    label: '',
  },
]

interface ITableHeaderCell {
  valueToOrderBy: string | number
  orderDirection: Order
  handleRequestSort: (event: React.MouseEvent, property: keyof RowsInfo) => void
}

const TableHeader = ({valueToOrderBy, orderDirection, handleRequestSort}: ITableHeaderCell) => {
  const classes = useEventsStyle()
  const createSortHandler = (property: keyof RowsInfo) =>
    function (e: React.MouseEvent) {
      handleRequestSort(e, property)
    }

  return (
    <TableHead>
      <TableRow className="table__paper_header-cell">
        {headCells.map((cell) => (
          <TableCell key={cell.id} className={classes.tableHeader}>
            {cell.name && (
              <Box
                component="span"
                className="table__paper_table-icon"
                onClick={createSortHandler(cell.name)}
              >
                <UpDwonArrows />
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
