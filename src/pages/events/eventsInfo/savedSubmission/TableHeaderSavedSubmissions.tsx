import React from 'react'
import {v4 as uuidv4} from 'uuid'
import useEventsStyle from "../../../../assets/styleJs/events/events";
import {IHeadCell, IRowsInfo, ITableHeaderCell} from '../../../../types/ongoingEventsType'
import {Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel} from '@mui/material'
import UpDownArrows from '../../../../assets/images/Icons/UpDownArrows'

const headCellsSavedSubmissions: IHeadCell[] = [
  {
    id: uuidv4(),
    name: 'event',
    label: 'Event',
  },
  {
    id: uuidv4(),
    name: 'evaluator',
    label: 'Evaluator/s',
  },
  {
    id: uuidv4(),
    name: 'criteria',
    label: 'Evaluation Criteria Score',
  },
  {
    id: uuidv4(),
    name: 'evaluatees',
    label: 'Evaluatee/s',
  },
  {
    id: uuidv4(),
    name: 'hire date',
    label: 'Hire Date',
  },
  {
    id: uuidv4(),
    name: 'bonus percentage',
    label: 'Bonus Percentage',
  },
  {
    id: uuidv4(),
    name: 'feedback',
    label: 'Feedback',
  },
]

const TableHeaderSavedSubmissions = ({valueToOrderBy, orderDirection, handleRequestSort}: ITableHeaderCell) => {
  const classes = useEventsStyle()
  const createSortHandler = (property: keyof IRowsInfo) =>
    function (e: React.MouseEvent) {
      handleRequestSort(e, property)
    }

  return (
    <TableHead>
      <TableRow className='table-paper__header-cell-saved-submissions'>
        <TableCell className={`${classes.tableHeaderCheckboxBox}`}>
          <Checkbox
            color="primary"
            // indeterminate={}
            // checked={}
            // onChange={}
            // inputProps={{
            //   'aria-labelledby': labelId,
            // }}
          />
        </TableCell>
        {headCellsSavedSubmissions.map((cell) => (
          <TableCell key={cell.id} className={`${classes.tableHeader} ${classes.alignCenter}`}>
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

export default TableHeaderSavedSubmissions
