import React, {useState} from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableRow,} from "@mui/material";
import TableHeader from "./TableHeader";

interface RowsInfo {
  status: string;
  name: string;
  date: string;
  evaluators: string;
  evaluatees: string;
}

const rowInformation = [
  {
    status: "Upcoming",
    name: "Quarter Evoluation",
    date: "Good Date",
    evaluators: "Evaluators",
    evaluatees: "Evaluatees",
  },
  {
    status: "apcoming",
    name: "cuarter Evoluation",
    date: "Date",
    evaluators: "Evaluators",
    evaluatees: "Evaluatees",
  },
  {
    status: "vpcoming",
    name: "cuarter Evoluation",
    date: "Date",
    evaluators: "Evaluators",
    evaluatees: "dEvaluatees",
  },
  {
    status: "vpcoming",
    name: "cuarter Evoluation",
    date: "Date",
    evaluators: "6Evaluators",
    evaluatees: "Evaluatees",
  },
  {
    status: "apcoming",
    name: "cuarter Evoluation",
    date: "Date",
    evaluators: "cEvaluators",
    evaluatees: "Evaluatees",
  },
  {
    status: "apcoming",
    name: "cuarter Evoluation",
    date: "Date",
    evaluators: "Evaluators",
    evaluatees: "Evaluatees",
  },
  {
    status: "apcoming",
    name: "cuarter Evoluation",
    date: "zDate",
    evaluators: "Evaluators",
    evaluatees: "zEvaluatees",
  },
  {
    status: "apcoming",
    name: "cuarter Evoluation",
    date: "zDate",
    evaluators: "aaEvaluators",
    evaluatees: "zEvaluatees",
  },
  {
    status: "apcoming",
    name: "cuarter Evoluation",
    date: "zDate",
    evaluators: "Evaluators",
    evaluatees: "zEvaluatees",
  },
  {
    status: "apcoming",
    name: "cuarter Evoluation",
    date: "fdDate",
    evaluators: "asdEvaluators",
    evaluatees: "zEvaluatees",
  },
  {
    status: "apcoming",
    name: "cuarter Evoluation",
    date: "zDate",
    evaluators: "dfgdsEvaluators",
    evaluatees: "zEvaluatees",
    report: 'asd'
  },
];

const TableContent = () => {
  const [orderDirection, setOrderDirection] = useState("asc");
  const [valueToOrderBy, setValueToOrderBy] = useState<string>("status");

  const handleRequestSort = (e: any, property: any) => {
    setValueToOrderBy(property);
    const isAscending = valueToOrderBy === property && orderDirection === "asc";

    setOrderDirection(isAscending ? "desc" : "asc");
  };

  const descendingComporator = (a: any, b: any, orderBy: any) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const getComparator = (order: any, orderBy: any) => {
    return order === "desc"
      ? (a: any, b: any) => descendingComporator(a, b, orderBy)
      : (a: any, b: any) => -descendingComporator(a, b, orderBy);
  };

  const sortedRowInformation = (rowArray: any, comparator: any) => {
    const stabilizedRowArray = rowArray.map((el: any, index: any) => [
      el,
      index,
    ]);
    stabilizedRowArray.sort((a: any, b: any) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedRowArray.map((el: any) => el[0]);
  };

  return (
    <>
      <Paper className='table__paper'>
        <TableContainer className='table__paper_list'>
          <Table stickyHeader>
            <TableHeader
              valueToOrderBy={valueToOrderBy}
              orderDirection={orderDirection}
              handleRequestSort={handleRequestSort}

            />
            <TableBody>
              {sortedRowInformation(
                rowInformation,
                getComparator(orderDirection, valueToOrderBy)
              ).map((person: any, index: any) => (
                <TableRow key={index} hover className='table__paper_row'>
                  <TableCell>
                    {person.status}
                  </TableCell>
                  <TableCell>{person.name}</TableCell>
                  <TableCell>{person.date}</TableCell>
                  <TableCell>{person.evaluators}</TableCell>
                  <TableCell>{person.evaluatees}</TableCell>
                  <TableCell>{person.report}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default TableContent;
