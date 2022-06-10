import * as React from 'react'
import {useEffect, useState} from 'react'
import {Data} from '../../../types/performeTypes'
import {Order} from '../../../types/ongoingEventsType'
import {v4 as uuidv4} from 'uuid'
import moment from 'moment'
import EnhancedTableHead from './EnhancedTableHead'
import TableCell from '@mui/material/TableCell'
import Checkbox from '@mui/material/Checkbox'
import {sortedRowInformation} from '../../../utils/utils'
import {getComparator} from '../../../utils/performUtils'
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  TableRow,
} from '@mui/material'

const mockData = [
  {
    id: uuidv4(),
    eventTitle: '1',
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
    id: uuidv4(),
    eventTitle: '2',
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
    id: uuidv4(),
    eventTitle: '3',
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
    id: uuidv4(),
    eventTitle: '4',
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
    id: uuidv4(),
    eventTitle: '5',
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
    id: uuidv4(),
    eventTitle: '6',
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
    eventTitle: '7',
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
  {
    id: uuidv4(),
    eventTitle: '7',
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
  {
    id: uuidv4(),
    eventTitle: '7',
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
  {
    id: uuidv4(),
    eventTitle: '7',
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
  {
    id: uuidv4(),
    eventTitle: '7',
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
  {
    id: uuidv4(),
    eventTitle: '7',
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
  {
    id: uuidv4(),
    eventTitle: '7',
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
  const [reportData, setReportData] = useState<Data[]>([])

  function createData(
    id: string,
    eventTitle: string,
    eventStartsAt: string,
    criteria: string,
    criteriaScore: number,
    performerType: string,
    evaluatorFirstName: string,
    evaluatorLastName: string,
    evaluatorPosition: string,
    evaluateeFirstName: string,
    evaluateeLastName: string,
    evaluateePosition: string,
  ): Data {
    return {
      id,
      eventTitle,
      eventStartsAt,
      criteria,
      criteriaScore,
      performerType,
      evaluatorFirstName,
      evaluatorLastName,
      evaluatorPosition,
      evaluateeFirstName,
      evaluateeLastName,
      evaluateePosition,
    }
  }

  useEffect(() => {
    setReportData(
      mockData.map((item: Data) =>
        createData(
          item.id,
          item.eventTitle,
          item.eventStartsAt,
          item.criteria,
          item.criteriaScore,
          item.performerType,
          item.evaluatorFirstName,
          item.evaluatorLastName,
          item.evaluatorPosition,
          item.evaluateeFirstName,
          item.evaluateeLastName,
          item.evaluateePosition,
        ),
      ),
    )
  }, [])

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = reportData.map((n) => n.eventTitle)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (event: React.MouseEvent, name: string) => {
    const selectedIndex = selected.indexOf(name)
    if (selectedIndex === -1) {
      setSelected([...selected, name])
    } else if (selectedIndex === 0) {
      setSelected(selected.filter((item) => item !== name))
    } else if (selectedIndex > 0) {
      setSelected(selected.filter((el, ind) => selectedIndex !== ind))
    }
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
                rowCount={reportData.length}
              />
              <TableBody>
                {sortedRowInformation(reportData, getComparator(order, orderBy))
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
                        key={row.id}
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
          count={reportData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage={'Results per page'}
        />
      </Box>
    </Box>
  )
}

export default PerformanceReportTable
