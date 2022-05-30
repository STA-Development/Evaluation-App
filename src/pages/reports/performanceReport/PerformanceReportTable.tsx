import * as React from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox'
import moment from 'moment'
import {sortedRowInformation} from '../../../utils/utils'
import {Data} from '../../../types/performeTypes'
import {Order} from '../../../types/ongoingEventsType'
import {getComparator} from '../../../utils/performUtils'
import EnhancedTableHead from './EnhancedTableHead'
import {Button} from '@mui/material'

const rows = [
  {
    eventTitle: 'aastring',
    eventStartsAt: '2022-05-27T16:42:45.838Z',
    criteria: 'string',
    criteriaScore: 67,
    performerType: 'Rock Stasdasdar',
    evaluatorFirstName: 'string',
    evaluatorLastName: 'string',
    evaluatorPosition: 'string',
    evaluateeFirstName: 'string',
    evaluateeLastName: 'werwer',
    evaluateePosition: 'string',
  },
  {
    eventTitle: 'strasding',
    eventStartsAt: '2021-05-27T16:42:45.838Z',
    criteria: 'string',
    criteriaScore: 21,
    performerType: 'Rock Star',
    evaluatorFirstName: 'string',
    evaluatorLastName: 'string',
    evaluatorPosition: 'stridsfsdfng',
    evaluateeFirstName: 'string',
    evaluateeLastName: 'string',
    evaluateePosition: 'string',
  },
  {
    eventTitle: 'bbs456tring',
    eventStartsAt: '2012-05-27T16:42:45.838Z',
    criteria: 'string',
    criteriaScore: 19,
    performerType: 'Rock Star',
    evaluatorFirstName: 'string',
    evaluatorLastName: 'string',
    evaluatorPosition: 'string',
    evaluateeFirstName: 'string',
    evaluateeLastName: 'string',
    evaluateePosition: 'sdfsdfsdf ',
  },
  {
    eventTitle: 'bbstrhgjghing',
    eventStartsAt: '2012-05-27T16:42:45.838Z',
    criteria: 'string',
    criteriaScore: 17,
    performerType: 'Rock Star',
    evaluatorFirstName: 'string',
    evaluatorLastName: 'string',
    evaluatorPosition: 'string',
    evaluateeFirstName: 'string',
    evaluateeLastName: 'string',
    evaluateePosition: 'sdfsdfsdf ',
  },
  {
    eventTitle: 'bbsasdtring',
    eventStartsAt: '2012-05-27T16:42:45.838Z',
    criteria: 'string',
    criteriaScore: 67,
    performerType: 'Rock Star',
    evaluatorFirstName: 'string',
    evaluatorLastName: 'string',
    evaluatorPosition: 'string',
    evaluateeFirstName: 'string',
    evaluateeLastName: 'string',
    evaluateePosition: 'sdfsdfsdf ',
  },
]

const PerformanceReportTable = () => {
  const [order, setOrder] = React.useState<Order>('asc')
  const [orderBy, setOrderBy] = React.useState<keyof Data>('eventTitle')
  const [selected, setSelected] = React.useState<readonly string[]>([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.evaluatorLastName)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected: readonly string[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      )
    }

    setSelected(newSelected)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const isSelected = (name: string) => selected.indexOf(name) !== -1

  return (
    <Box>
      <Box className="report-export-btn">
        <Button variant="outlined" color="primary">
          GET CERTIFICATE
        </Button>
        <Button variant="outlined" color="primary">
          EXPORT REPORT
        </Button>
      </Box>
      <Box className="report-table">
        <Paper className="report-paper">
          <TableContainer>
            <Table aria-labelledby="tableTitle">
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {sortedRowInformation(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.eventTitle)
                    const labelId = `enhanced-table-checkbox-${index}`

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.eventTitle)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.eventTitle}
                        selected={isItemSelected}
                        className="report-table-head__rows"
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell component="th" id={labelId} scope="row" padding="none">
                          {row.eventTitle}
                        </TableCell>
                        <TableCell>{moment(row.eventStartsAt).format('MMM DD yyyy')}</TableCell>
                        <TableCell>Work Performance - {row.criteriaScore}</TableCell>
                        <TableCell>{row.performerType}</TableCell>
                        <TableCell>
                          {row.evaluatorFirstName} {row.evaluatorLastName}
                        </TableCell>
                        <TableCell>{row.evaluatorPosition}</TableCell>
                        <TableCell>
                          {row.evaluateeFirstName} {row.evaluateeLastName}
                        </TableCell>
                        <TableCell>{row.evaluateePosition}</TableCell>
                      </TableRow>
                    )
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Box>
  )
}

export default PerformanceReportTable
