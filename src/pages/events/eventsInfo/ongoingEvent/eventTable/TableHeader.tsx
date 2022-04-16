import React from "react";
import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { useEventsStyle } from "../../../../../assets/styleJs/events/events";
import { v4 as uuidv4 } from "uuid";
import UpDwonArrows from "../../../../../assets/images/Icons/UpDwonArrows";

const headCells = [
  {
    id: uuidv4(),
    name: "status",
    label: "Status",
  },
  {
    id: uuidv4(),
    name: "name",
    label: "Name",
  },
  {
    id: uuidv4(),
    name: "name",
    label: "Date",
  },
  {
    id: uuidv4(),
    name: "evaluators",
    label: "Evaluators",
  },
  {
    id: "evaluatees",
    name: "evaluatees",
    label: "Evaluatees",
  },
  {
    id: uuidv4(),
    label: "",
  },
];

const TableHeader = ({
  valueToOrderBy,
  orderDirection,
  handleRequestSort,
}: any) => {
  const classes = useEventsStyle();
  const createSortHandler = (property: string | undefined) => (e: object) => {
    handleRequestSort(e, property);
  };

  return (
    <TableHead>
      <TableRow className="table__paper_header_cell">
        {headCells.map((cell) => (
          <TableCell key={cell.id} className={classes.tableHeader}>
            {cell.name && (
              <Box
                component="span"
                className="table__icon"
                onClick={createSortHandler(cell.name)}
              >
                <UpDwonArrows />
              </Box>
            )}

            <TableSortLabel
              className={classes.sortableIcon}
              active={valueToOrderBy === cell.label}
              direction={valueToOrderBy === cell.label ? orderDirection : "asc"}
              onClick={createSortHandler(cell.name)}
            >
              {cell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
