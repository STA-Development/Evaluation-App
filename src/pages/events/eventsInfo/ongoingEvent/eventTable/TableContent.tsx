import React, {useState} from 'react'
import {IRowsInfo, Order} from '../../../../../types/ongoingEventsType'
import TableHeader from './TableHeader'
import Report from './Report'
import {getComparator, sortedRowInformation} from '../../../../../utils/utils'
import {Paper, Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material'

const rows: IRowsInfo[] = [
  {
    status: 'Upcoming',
    name: 'Quarter Evoluation',
    date: 'Good Date',
    evaluators: 'Evaluators',
    evaluates: 'Evaluatees',
  },
  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'Date',
    evaluators: 'Evaluators',
    evaluates: 'Evaluatees',
  },
  {
    status: 'vpcoming',
    name: 'cuarter Evoluation',
    date: 'Date',
    evaluators: 'Evaluators',
    evaluates: 'dEvaluatees',
  },
  {
    status: 'vpcoming',
    name: 'cuarter Evoluation',
    date: 'Date',
    evaluators: '6Evaluators',
    evaluates: 'Evaluatees',
  },
  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'Date',
    evaluators: 'cEvaluators',
    evaluates: 'Evaluatees',
  },
  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'Date',
    evaluators: 'Evaluators',
    evaluates: 'Evaluatees',
  },

  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'fdDate',
    evaluators: 'asdEvaluators',
    evaluates: 'zEvaluatees',
  },
  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'zDate',
    evaluators: 'dfgdsEvaluators',
    evaluates: 'zEvaluatees',
  },
  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'zDate',
    evaluators: 'dfgdsEvaluators',
    evaluates: 'zEvaluatees',
  },
  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'zDate',
    evaluators: 'dfgdsEvaluators',
    evaluates: 'zEvaluatees',
  },
  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'zDate',
    evaluators: 'dfgdsEvaluators',
    evaluates: 'zEvaluatees',
  },
  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'zDate',
    evaluators: 'dfgdsEvaluators',
    evaluates: 'zEvaluatees',
  },
  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'zDate',
    evaluators: 'dfgdsEvaluators',
    evaluates: 'zEvaluatees',
  },

  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'zDate',
    evaluators: 'dfgdsEvaluators',
    evaluates: 'zEvaluatees',
  },
]

const TableContent = () => {
  const [orderDirection, setOrderDirection] = useState<Order>('asc')
  const [valueToOrderBy, setValueToOrderBy] = useState<keyof IRowsInfo>('status')

  const handleRequestSort = (event: React.MouseEvent, property: keyof IRowsInfo) => {
    const isAsc = valueToOrderBy === property && orderDirection === 'asc'
    setOrderDirection(isAsc ? 'desc' : 'asc')
    setValueToOrderBy(property)
  }

  return (
    <Paper className="table-paper">
      <TableContainer>
        <Table>
          <TableHeader
            valueToOrderBy={valueToOrderBy}
            orderDirection={orderDirection}
            handleRequestSort={handleRequestSort}
          />
          <TableBody>
            {sortedRowInformation(rows, getComparator(orderDirection, valueToOrderBy)).map(
              (person, index) => (
                <TableRow key={index} hover className="table-paper__row">
                  <TableCell>{person.status}</TableCell>
                  <TableCell>{person.name}</TableCell>
                  <TableCell>{person.date}</TableCell>
                  <TableCell>{person.evaluators}</TableCell>
                  <TableCell>{person.evaluates}</TableCell>
                  <TableCell>
                    <Report />
                  </TableCell>
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
