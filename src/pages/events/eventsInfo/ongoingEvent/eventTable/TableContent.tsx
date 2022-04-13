import React, {useState} from 'react';
import {Table, TableCell, TableContainer} from "@mui/material";
import TableHeader from "./TableHeader";

interface RowsInfo {
  status: string,
  name: string,
  date: string,
  evaluators: string,
  evaluatees: string,
}

const rowInformation = [
  {
    status: 'Upcoming',
    name: 'Quarter Evoluation',
    date: 'Good Date',
    evaluators: 'Evaluators',
    evaluatees: 'Evaluatees',
  },
  {
    status: 'apcoming',
    name: 'cuarter Evoluation',
    date: 'Date',
    evaluators: 'Evaluators',
    evaluatees: 'Evaluatees',
  },
]

const TableContent = () => {
  const [orderDirection, setOrderDirection] = useState('asc');
  const [valueToOrderBy, setValueToOrderBy] = useState<string>('status');
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(1);

  const handleRequestSort = (e: any, property: any) => {
    setValueToOrderBy(property);
    const isAscending = (valueToOrderBy == property && orderDirection === 'asc')

    setOrderDirection(isAscending ? 'desc' : 'asc')
  }

  const descendingComporator = (a: any, b: any, orderBy: any) => {
    if (b[orderBy] < a[orderBy]) {
      return -1
    }
    if (b[orderBy] > a[orderBy]) {
      return 1
    }
    return 0
  }

  const getComparator = (order: any, orderBy: any) => {
    return order === 'desc'
      ? (a: any, b: any) => descendingComporator(a, b, orderBy)
      : (a: any, b: any) => -descendingComporator(a, b, orderBy)
  }

  const sortedRowInformation = (rowArray: any, comparator: any) => {
    const stabilizedRowArray = rowArray.map((el: any, index: any) => [el, index])
    stabilizedRowArray.sort((a: any, b: any) => {
      const order = comparator(a[0], b[0])
      if (order !== 0) return order
      return a[1] - b[1]
    })
    return stabilizedRowArray.map((el: any) => el[0])
  }

  return (
    <>
      <TableContainer>
        <Table>
          <TableHeader
            valueToOrderBy={valueToOrderBy}
            orderDirection={orderDirection}
            handleRequestSort={handleRequestSort}
          />
          {sortedRowInformation(rowInformation, getComparator(orderDirection, valueToOrderBy)).map((person: any, index: any) => (
            <Table key={index}>
              <TableCell>{person.status}</TableCell>
              <TableCell>{person.name}</TableCell>
            </Table>
          ))

          }
        </Table>
      </TableContainer>
    </>
  );
};

export default TableContent;