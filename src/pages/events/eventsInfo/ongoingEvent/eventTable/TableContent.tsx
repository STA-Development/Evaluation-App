import React, {useState} from 'react'
import {Paper, Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material'
import TableHeader from './TableHeader'
import Report from './Report'

interface RowsInfo {
  status: string
  name: string
  date: string
  evaluators: string
  evaluates: string
  report: any
}

const rows: RowsInfo[] = [
  {
    status: 'Upcoming',
    name: 'Quarter Evoluation',
    date: 'Good Date',
    evaluators: 'Evaluators',
    evaluates: 'Evaluatees',
    report: <Report />,
  },
  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'Date',
    evaluators: 'Evaluators',
    evaluates: 'Evaluatees',
    report: <Report />,
  },
  {
    status: 'vpcoming',
    name: 'cuarter Evoluation',
    date: 'Date',
    evaluators: 'Evaluators',
    evaluates: 'dEvaluatees',
    report: <Report />,
  },
  {
    status: 'vpcoming',
    name: 'cuarter Evoluation',
    date: 'Date',
    evaluators: '6Evaluators',
    evaluates: 'Evaluatees',
    report: <Report />,
  },
  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'Date',
    evaluators: 'cEvaluators',
    evaluates: 'Evaluatees',
    report: <Report />,
  },
  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'Date',
    evaluators: 'Evaluators',
    evaluates: 'Evaluatees',
    report: <Report />,
  },

  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'fdDate',
    evaluators: 'asdEvaluators',
    evaluates: 'zEvaluatees',
    report: <Report />,
  },
  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'zDate',
    evaluators: 'dfgdsEvaluators',
    evaluates: 'zEvaluatees',
    report: <Report />,
  },
  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'zDate',
    evaluators: 'dfgdsEvaluators',
    evaluates: 'zEvaluatees',
    report: <Report />,
  },
  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'zDate',
    evaluators: 'dfgdsEvaluators',
    evaluates: 'zEvaluatees',
    report: <Report />,
  },
  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'zDate',
    evaluators: 'dfgdsEvaluators',
    evaluates: 'zEvaluatees',
    report: <Report />,
  },
  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'zDate',
    evaluators: 'dfgdsEvaluators',
    evaluates: 'zEvaluatees',
    report: <Report />,
  },
  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'zDate',
    evaluators: 'dfgdsEvaluators',
    evaluates: 'zEvaluatees',
    report: <Report />,
  },

  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'zDate',
    evaluators: 'dfgdsEvaluators',
    evaluates: 'zEvaluatees',
    report: <Report />,
  },
]

const TableContent = () => {
  const [orderDirection, setOrderDirection] = useState<Order>('asc')
  const [valueToOrderBy, setValueToOrderBy] = useState<keyof RowsInfo>('status')

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof RowsInfo) => {
    const isAsc = valueToOrderBy === property && orderDirection === 'asc'
    setOrderDirection(isAsc ? 'desc' : 'asc')
    setValueToOrderBy(property)
  }

  function descendingComporator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1
    }
    if (b[orderBy] > a[orderBy]) {
      return 1
    }
    return 0
  }

  type Order = 'asc' | 'desc'

  function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
  ): (a: {[key in Key]: number | string}, b: {[key in Key]: number | string}) => number {
    return order === 'desc'
      ? (a, b) => descendingComporator(a, b, orderBy)
      : (a, b) => -descendingComporator(a, b, orderBy)
  }

  function sortedRowInformation<T>(array: T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0])
      if (order !== 0) {
        return order
      }
      return a[1] - b[1]
    })
    return stabilizedThis.map((el) => el[0])
  }

  return (
    <Paper className="table__paper">
      <TableContainer className="table__paper_list">
        <Table>
          <TableHeader
            valueToOrderBy={valueToOrderBy}
            orderDirection={orderDirection}
            handleRequestSort={handleRequestSort}
          />
          <TableBody>
            {sortedRowInformation(rows, getComparator(orderDirection, valueToOrderBy)).map(
              (person, index) => (
                <TableRow key={index} hover className="table__paper_row">
                  <TableCell>{person.status}</TableCell>
                  <TableCell>{person.name}</TableCell>
                  <TableCell>{person.date}</TableCell>
                  <TableCell>{person.evaluators}</TableCell>
                  <TableCell>{person.evaluates}</TableCell>
                  <TableCell>{person.report}</TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default TableContent
