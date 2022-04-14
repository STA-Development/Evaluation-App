import React from "react";
import {TableCell, TableRow, TableSortLabel} from "@mui/material";
import {useEventsStyle} from "../../../../../assets/styleJs/events/events";

const headCells = [
  {
    id: "status",
    label: "Status",
  },
  {
    id: "name",
    label: "Name",
  },
  {
    id: "date",
    label: "Date",
  },
  {
    id: "evaluators",
    label: "Evaluators",
  },
  {
    id: "evaluatees",
    label: "Evaluatees",
  },
  {
    id: "evaluatees",
    label: "",
  },
];

const TableHeader = ({
                       valueToOrderBy,
                       orderDirection,
                       handleRequestSort,
                     }: any) => {

  const classes = useEventsStyle();
  const createSortHandler = (property: any) => (e: any) => {
    handleRequestSort(e, property);
  };


  return (
    <TableHead-asd>
      <TableRow className='table__paper_header_cell'>
        {headCells.map((cell) => (
          <TableCell
            key={cell.id}
            className={classes.tableHeader}

          >
            <TableSortLabel
              active={valueToOrderBy === cell.label}
              direction={valueToOrderBy === cell.label ? orderDirection : "asc"}
              onClick={createSortHandler(cell.id)}
            >
              {cell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead-asd>
  );
};

export default TableHeader;
