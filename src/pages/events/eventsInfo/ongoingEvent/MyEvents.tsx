import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import {visuallyHidden} from '@mui/utils';

interface Data {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
): Data {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Dessert (100g serving)',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Calories',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Fat (g)',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Carbs (g)',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Protein (g)',
  },
];

interface EnhancedTableProps {

  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  //onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;

}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {order, orderBy, onRequestSort} =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='left'
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function MyEvents() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('calories');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{width: '100%'}}>
      <Paper sx={{width: '100%', mb: 2}}>
        <TableContainer>
          <Table
            sx={{minWidth: 750}}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                    >

                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell>{row.calories}</TableCell>
                      <TableCell>{row.fat}</TableCell>
                      <TableCell>{row.carbs}</TableCell>
                      <TableCell>{row.protein}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6}/>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

      </Paper>

    </Box>
  );
}


// import React, {useState} from 'react';
// import {
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TableSortLabel,
//   Typography
// } from "@mui/material";
// import {useGlobalTheme} from "../../../../assets/style/globalVariables";
//
//
// interface DataCell {
//   id: number;
//   cellName: string;
// }
//
// interface DataRows {
//   id: number;
//   status: string;
//   name: string;
//   date: string;
//   evaluators: string;
//   evaluatees: string;
//   hideLink: null;
// }
//
//
// const MyEvents = () => {
//   const globalClasses = useGlobalTheme();
//   const [orderDirection, setOrderDirection] = useState<string>('asc')
//   const [valueToEvaluator, setValueToEvaluator] = useState<string>('name')
//   const [page, setpage] = useState<number>(0);
//   const [rowsPerPage, setRowsPerPage] = useState<number>(1);
//
//   const dataCell: DataCell[] = [
//     {
//       id: Math.random(),
//       cellName: "Status",
//     },
//     {
//       id: Math.random(),
//       cellName: "Name",
//     },
//     {
//       id: Math.random(),
//       cellName: "Date",
//     },
//     {
//       id: Math.random(),
//       cellName: "Evaluators",
//     },
//     {
//       id: Math.random(),
//       cellName: "Evaluatees",
//     },
//     // {
//     //   id: Math.random(),
//     //   cellName: "",
//     // },
//   ];
//
//   const dataRows = [
//     {
//       id: Math.random(),
//       status: "Upcoming",
//       name: "Quarter Evoluation",
//       date: "Date",
//       evaluators: "Evaluators",
//       evaluatees: "Evaluatees",
//       seeReport: (
//         <>
//           <a href="#!">See Report</a> <a href="#!">Restart</a>
//         </>
//       ),
//     },
//     {
//       id: Math.random(),
//       status: "Upcoming",
//       name: "Quarter Evoluation",
//       date: "Date",
//       evaluators: "Evaluators",
//       evaluatees: "Evaluatees",
//       seeReport: (
//         <>
//           <a href="#!">See Report</a> <a href="#!">Restart</a>
//         </>
//       ),
//     },
//     {
//       id: Math.random(),
//       status: "Upcoming",
//       name: "Quarter Evoluation",
//       date: "Date",
//       evaluators: "Evaluators",
//       evaluatees: "Evaluatees",
//       seeReport: (
//         <>
//           <a href="#!">See Report</a> <a href="#!">Restart</a>
//         </>
//       ),
//     },
//     {
//       id: Math.random(),
//       status: "Upcoming",
//       name: "Quarter Evoluation",
//       date: "Date",
//       evaluators: "Evaluators",
//       evaluatees: "Evaluatees",
//       seeReport: (
//         <>
//           <a href="#!">See Report</a> <a href="#!">Restart</a>
//         </>
//       ),
//     },
//     {
//       id: Math.random(),
//       status: "Upcoming",
//       name: "Quarter Evoluation",
//       date: "Date",
//       evaluators: "Evaluators",
//       evaluatees: "Evaluatees",
//       seeReport: (
//         <>
//           <a href="#!">See Report</a> <a href="#!">Restart</a>
//         </>
//       ),
//     },
//     {
//       id: Math.random(),
//       status: "Upcoming",
//       name: "Quarter Evoluation",
//       date: "Date",
//       evaluators: "Evaluators",
//       evaluatees: "Evaluatees",
//       seeReport: (
//         <>
//           <a href="#!">See Report</a> <a href="#!">Restart</a>
//         </>
//       ),
//     },
//   ];
//
//   const createSortHandler = () => {
//
//   }
//   return (
//     <Box>
//       <Typography
//         variant="h4"
//         component="h4"
//         className={globalClasses.contentHeader}
//       >
//         My Events
//       </Typography>
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               {dataCell.map((cell) => (
//
//                 <TableCell key={cell.id}>
//                   <TableSortLabel
//                     active={cell.cellName === cell.cellName}
//                     direction='asc'
//                     //onClick={createSortHandler(cell.cellName)}
//                   >
//                     {cell.cellName}
//                   </TableSortLabel>
//                 </TableCell>
//
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {dataRows.map((row) => (
//               <TableRow
//                 key={row.id}
//                 sx={{'&:last-child td, &:last-child th': {border: 0}}}
//               >
//                 <TableCell component="th" scope="row">
//                   {row.status}
//                 </TableCell>
//                 <TableCell align="right">{row.name}</TableCell>
//                 <TableCell align="right">{row.date}</TableCell>
//                 <TableCell align="right">{row.evaluators}</TableCell>
//                 <TableCell align="right">{row.evaluatees}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
// };
//
// export default MyEvents;


// // new
// import React, {useState} from "react";
// import {Box, Typography} from "@mui/material";
// import {useGlobalTheme} from "../../../../assets/style/globalVariables";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// // import TablePagination from '@mui/material/TablePagination';
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import TableSortLabel from "@mui/material/TableSortLabel";
// import Typography from "@mui/material/Typography";
// // import Checkbox from '@mui/material/Checkbox';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Switch from '@mui/material/Switch';
// import {visuallyHidden} from "@mui/utils";
//
// const MyEvents = () => {
//   const globalClasses = useGlobalTheme();
//   const [dataTable, setDataTable] = useState<object[]>([]);
//
//   interface DataCell {
//     id: number;
//     cellName: string;
//   }
//
//   interface DataRows {
//     id: number;
//     status: string;
//     name: string;
//     date: string;
//     evaluators: string;
//     evaluatees: string;
//     hideLink: null;
//   }
//
//   const dataCell: DataCell[] = [
//     {
//       id: Math.random(),
//       cellName: "Status",
//     },
//     {
//       id: Math.random(),
//       cellName: "Name",
//     },
//     {
//       id: Math.random(),
//       cellName: "Date",
//     },
//     {
//       id: Math.random(),
//       cellName: "Evaluators",
//     },
//     {
//       id: Math.random(),
//       cellName: "Evaluatees",
//     },
//     {
//       id: Math.random(),
//       cellName: "",
//     },
//   ];
//
//   const dataTabel = [
//     {
//       id: Math.random(),
//       status: "Upcoming",
//       name: "Quarter Evoluation",
//       date: "Date",
//       evaluators: "Evaluators",
//       evaluatees: "Evaluatees",
//       seeReport: (
//         <>
//           <a href="#!">See Report</a> <a href="#!">Restart</a>
//         </>
//       ),
//     },
//     {
//       id: Math.random(),
//       status: "Upcoming",
//       name: "Quarter Evoluation",
//       date: "Date",
//       evaluators: "Evaluators",
//       evaluatees: "Evaluatees",
//       seeReport: (
//         <>
//           <a href="#!">See Report</a> <a href="#!">Restart</a>
//         </>
//       ),
//     },
//     {
//       id: Math.random(),
//       status: "Upcoming",
//       name: "Quarter Evoluation",
//       date: "Date",
//       evaluators: "Evaluators",
//       evaluatees: "Evaluatees",
//       seeReport: (
//         <>
//           <a href="#!">See Report</a> <a href="#!">Restart</a>
//         </>
//       ),
//     },
//     {
//       id: Math.random(),
//       status: "Upcoming",
//       name: "Quarter Evoluation",
//       date: "Date",
//       evaluators: "Evaluators",
//       evaluatees: "Evaluatees",
//       seeReport: (
//         <>
//           <a href="#!">See Report</a> <a href="#!">Restart</a>
//         </>
//       ),
//     },
//     {
//       id: Math.random(),
//       status: "Upcoming",
//       name: "Quarter Evoluation",
//       date: "Date",
//       evaluators: "Evaluators",
//       evaluatees: "Evaluatees",
//       seeReport: (
//         <>
//           <a href="#!">See Report</a> <a href="#!">Restart</a>
//         </>
//       ),
//     },
//     {
//       id: Math.random(),
//       status: "Upcoming",
//       name: "Quarter Evoluation",
//       date: "Date",
//       evaluators: "Evaluators",
//       evaluatees: "Evaluatees",
//       seeReport: (
//         <>
//           <a href="#!">See Report</a> <a href="#!">Restart</a>
//         </>
//       ),
//     },
//   ];
//
//   function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
//     if (b[orderBy] < a[orderBy]) {
//       return -1;
//     }
//     if (b[orderBy] > a[orderBy]) {
//       return 1;
//     }
//     return 0;
//   }
//
//   type Order = "asc" | "desc";
//
//   function getComparator<Key extends keyof any>(
//     order: Order,
//     orderBy: Key
//   ): (
//     a: { [key in Key]: number | string },
//     b: { [key in Key]: number | string }
//   ) => number {
//     return order === "desc"
//       ? (a, b) => descendingComparator(a, b, orderBy)
//       : (a, b) => -descendingComparator(a, b, orderBy);
//   }
//
//   // This method is created for cross-browser compatibility, if you don't
//   // need to support IE11, you can use Array.prototype.sort() directly
//   function stableSort<T>(
//     array: readonly T[],
//     comparator: (a: T, b: T) => number
//   ) {
//     const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
//     stabilizedThis.sort((a, b) => {
//       const order = comparator(a[0], b[0]);
//       if (order !== 0) {
//         return order;
//       }
//       return a[1] - b[1];
//     });
//     return stabilizedThis.map((el) => el[0]);
//   }
//
//   interface EnhancedTableProps {
//     numSelected: number;
//     onRequestSort: (
//       event: React.MouseEvent<unknown>,
//       property: keyof DataCell
//     ) => void;
//     onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
//     order: Order;
//     orderBy: string;
//     rowCount: number;
//   }
//
//   function EnhancedTableHead(props: EnhancedTableProps) {
//     const {
//       onSelectAllClick,
//       order,
//       orderBy,
//       numSelected,
//       rowCount,
//       onRequestSort,
//     } = props;
//     const createSortHandler =
//       (property: keyof DataCell) => (event: React.MouseEvent<unknown>) => {
//         onRequestSort(event, property);
//       };
//   }
//
//   // const rows = dataTabel.map((row) =>
//   // return {row.status, row.name, row.date, row.evaluators, row.evaluatees}
//   // );
//
//   //   [
//   //
//   //   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   //   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   //   createData("Eclair", 262, 16.0, 24, 6.0),
//   //   createData("Cupcake", 305, 3.7, 67, 4.3),
//   //   createData("Gingerbread", 356, 16.0, 49, 3.9),
//   // ];
//   return (
//     <Box>
//       <Typography
//         variant="h5"
//         component="h4"
//         className={globalClasses.contentHeader}
//       >
//         My Events
//       </Typography>
//       <div style={{height: 400, width: "100%"}}>
//         <TableContainer component={Paper}>
//           <Table
//             sx={{minWidth: 1200, minHeight: 450, overflow: "auto"}}
//             aria-label="simple table"
//           >
//             <TableHead>
//               <TableRow>
//                 {dataCell.map((cell) => (
//                   <TableCell
//                     key={cell.id}
//                     padding="none"
//                     sortDirection={orderBy === headCell.id ? order : false}
//                   >
//                     <TableSortLabel
//                       active={orderBy === headCell.id}
//                       direction={orderBy === headCell.id ? order : "asc"}
//                       onClick={createSortHandler(headCell.id)}
//                     >
//                       {cell.cellName}
//                       {orderBy === headCell.id ? (
//                         <Box component="span" sx={visuallyHidden}>
//                           {order === "desc"
//                             ? "sorted descending"
//                             : "sorted ascending"}
//                         </Box>
//                       ) : null}
//                     </TableSortLabel>
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {dataTabel.map((row) => (
//                 <TableRow
//                   key={row.id}
//                   sx={{
//                     "&:last-child td, &:last-child th": {border: 0},
//                     padding: 0,
//                   }}
//                 >
//                   <TableCell component="th" scope="row" style={{width: 190}}>
//                     {row.status}
//                   </TableCell>
//                   <TableCell style={{width: 190}}>{row.name}</TableCell>
//                   <TableCell style={{width: 190}}>{row.date}</TableCell>
//                   <TableCell style={{width: 190}}>{row.evaluators}</TableCell>
//                   <TableCell style={{width: 190}}>{row.evaluatees}</TableCell>
//                   <TableCell style={{width: 190}}>{row.seeReport}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//     </Box>
//   );
// };
//
// export default MyEvents;
// //
// // interface Data {
// //   calories: number;
// //   carbs: number;
// //   fat: number;
// //   name: string;
// //   protein: number;
// // }
// //
// // function createData(
// //   name: string,
// //   calories: number,
// //   fat: number,
// //   carbs: number,
// //   protein: number
// // ): Data {
// //   return {
// //     name,
// //     calories,
// //     fat,
// //     carbs,
// //     protein,
// //   };
// // }
// //
// // const rows = [
// //   createData("Cupcake", 305, 3.7, 67, 4.3),
// //   createData("Donut", 452, 25.0, 51, 4.9),
// //   createData("Eclair", 262, 16.0, 24, 6.0),
// //   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
// //   createData("Gingerbread", 356, 16.0, 49, 3.9),
// //   createData("Honeycomb", 408, 3.2, 87, 6.5),
// //   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
// //   createData("Jelly Bean", 375, 0.0, 94, 0.0),
// //   createData("KitKat", 518, 26.0, 65, 7.0),
// //   createData("Lollipop", 392, 0.2, 98, 0.0),
// //   createData("Marshmallow", 318, 0, 81, 2.0),
// //   createData("Nougat", 360, 19.0, 9, 37.0),
// //   createData("Oreo", 437, 18.0, 63, 4.0),
// // ];
// //
// // function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
// //   if (b[orderBy] < a[orderBy]) {
// //     return -1;
// //   }
// //   if (b[orderBy] > a[orderBy]) {
// //     return 1;
// //   }
// //   return 0;
// // }
// //
// // type Order = "asc" | "desc";
// //
// // function getComparator<Key extends keyof any>(
// //   order: Order,
// //   orderBy: Key
// // ): (
// //   a: { [key in Key]: number | string },
// //   b: { [key in Key]: number | string }
// // ) => number {
// //   return order === "desc"
// //     ? (a, b) => descendingComparator(a, b, orderBy)
// //     : (a, b) => -descendingComparator(a, b, orderBy);
// // }
// //
// // // This method is created for cross-browser compatibility, if you don't
// // // need to support IE11, you can use Array.prototype.sort() directly
// // function stableSort<T>(
// //   array: readonly T[],
// //   comparator: (a: T, b: T) => number
// // ) {
// //   const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
// //   stabilizedThis.sort((a, b) => {
// //     const order = comparator(a[0], b[0]);
// //     if (order !== 0) {
// //       return order;
// //     }
// //     return a[1] - b[1];
// //   });
// //   return stabilizedThis.map((el) => el[0]);
// // }
// //
// // interface HeadCell {
// //   disablePadding: boolean;
// //   id: keyof Data;
// //   label: string;
// //   numeric: boolean;
// // }
// //
// // const headCells: readonly HeadCell[] = [
// //   {
// //     id: "name",
// //     numeric: false,
// //     disablePadding: true,
// //     label: "Dessert (100g serving)",
// //   },
// //   {
// //     id: "calories",
// //     numeric: true,
// //     disablePadding: false,
// //     label: "Calories",
// //   },
// //   {
// //     id: "fat",
// //     numeric: true,
// //     disablePadding: false,
// //     label: "Fat (g)",
// //   },
// //   {
// //     id: "carbs",
// //     numeric: true,
// //     disablePadding: false,
// //     label: "Carbs (g)",
// //   },
// //   {
// //     id: "protein",
// //     numeric: true,
// //     disablePadding: false,
// //     label: "Protein (g)",
// //   },
// // ];
// //
// // interface EnhancedTableProps {
// //   numSelected: number;
// //   onRequestSort: (
// //     event: React.MouseEvent<unknown>,
// //     property: keyof Data
// //   ) => void;
// //   onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
// //   order: Order;
// //   orderBy: string;
// //   rowCount: number;
// // }
// //
// // function EnhancedTableHead(props: EnhancedTableProps) {
// //   const {
// //     onSelectAllClick,
// //     order,
// //     orderBy,
// //     numSelected,
// //     rowCount,
// //     onRequestSort,
// //   } = props;
// //   const createSortHandler =
// //     (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
// //       onRequestSort(event, property);
// //     };
// //
// //   return (
// //     <TableHead>
// //       <TableRow>
// //         {/* <TableCell padding="checkbox">
// //           <Checkbox
// //             color="primary"
// //             indeterminate={numSelected > 0 && numSelected < rowCount}
// //             checked={rowCount > 0 && numSelected === rowCount}
// //             onChange={onSelectAllClick}
// //             inputProps={{
// //               'aria-label': 'select all desserts',
// //             }}
// //           />
// //         </TableCell> */}
// //         {headCells.map((headCell) => (
// //           <TableCell
// //             key={headCell.id}
// //             align={headCell.numeric ? "right" : "left"}
// //             padding={headCell.disablePadding ? "none" : "normal"}
// //             sortDirection={orderBy === headCell.id ? order : false}
// //           >
// //             <TableSortLabel
// //               active={orderBy === headCell.id}
// //               direction={orderBy === headCell.id ? order : "asc"}
// //               onClick={createSortHandler(headCell.id)}
// //             >
// //               {headCell.label}
// //               {orderBy === headCell.id ? (
// //                 <Box component="span" sx={visuallyHidden}>
// //                   {order === "desc" ? "sorted descending" : "sorted ascending"}
// //                 </Box>
// //               ) : null}
// //             </TableSortLabel>
// //           </TableCell>
// //         ))}
// //       </TableRow>
// //     </TableHead>
// //   );
// // }
// //
// // interface EnhancedTableToolbarProps {
// //   numSelected: number;
// // }
// //
// // // const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
// // //   const { numSelected } = props;
// //
// // //   return (
// // //     <Toolbar
// // //       sx={{
// // //         pl: { sm: 2 },
// // //         pr: { xs: 1, sm: 1 },
// // //         ...(numSelected > 0 && {
// // //           bgcolor: (theme) =>
// // //             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
// // //         }),
// // //       }}
// // //     >
// // //       {/* {numSelected > 0 ? (
// // //         <Typography
// // //           sx={{ flex: '1 1 100%' }}
// // //           color="inherit"
// // //           variant="subtitle1"
// // //           component="div"
// // //         >
// // //           {numSelected} selected
// // //         </Typography>
// // //       ) : (
// // //         <Typography
// // //           sx={{ flex: '1 1 100%' }}
// // //           variant="h6"
// // //           id="tableTitle"
// // //           component="div"
// // //         >
// // //           Nutrition
// // //         </Typography>
// // //       )} */}
// // //       {/* {numSelected > 0 ? (
// // //         <Tooltip title="Delete">
// // //           <IconButton>
// // //             <DeleteIcon />
// // //           </IconButton>
// // //         </Tooltip>
// // //       ) : (
// // //         <Tooltip title="Filter list">
// // //           <IconButton>
// // //             <FilterListIcon />
// // //           </IconButton>
// // //         </Tooltip>
// // //       )} */}
// // //     </Toolbar>
// // //   );
// // // };
// //
// // export default function EnhancedTable() {
// //   const [order, setOrder] = React.useState<Order>("asc");
// //   const [orderBy, setOrderBy] = React.useState<keyof Data>("calories");
// //   const [selected, setSelected] = React.useState<readonly string[]>([]);
// //   const [page, setPage] = React.useState(0);
// //   const [dense, setDense] = React.useState(false);
// //   const [rowsPerPage, setRowsPerPage] = React.useState(5);
// //
// //   const handleRequestSort = (
// //     event: React.MouseEvent<unknown>,
// //     property: keyof Data
// //   ) => {
// //     const isAsc = orderBy === property && order === "asc";
// //     setOrder(isAsc ? "desc" : "asc");
// //     setOrderBy(property);
// //   };
// //
// //   // const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
// //   //   if (event.target.checked) {
// //   //     const newSelecteds = rows.map((n) => n.name);
// //   //     setSelected(newSelecteds);
// //   //     return;
// //   //   }
// //   //   setSelected([]);
// //   // };
// //
// //   // const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
// //   //   const selectedIndex = selected.indexOf(name);
// //   //   let newSelected: readonly string[] = [];
// //
// //   //   if (selectedIndex === -1) {
// //   //     newSelected = newSelected.concat(selected, name);
// //   //   } else if (selectedIndex === 0) {
// //   //     newSelected = newSelected.concat(selected.slice(1));
// //   //   } else if (selectedIndex === selected.length - 1) {
// //   //     newSelected = newSelected.concat(selected.slice(0, -1));
// //   //   } else if (selectedIndex > 0) {
// //   //     newSelected = newSelected.concat(
// //   //       selected.slice(0, selectedIndex),
// //   //       selected.slice(selectedIndex + 1),
// //   //     );
// //   //   }
// //
// //   //   setSelected(newSelected);
// //   // };
// //
// //   // const handleChangePage = (event: unknown, newPage: number) => {
// //   //   setPage(newPage);
// //   // };
// //
// //   // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
// //   //   setRowsPerPage(parseInt(event.target.value, 10));
// //   //   setPage(0);
// //   // };
// //
// //   // const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
// //   //   setDense(event.target.checked);
// //   // };
// //
// //   const isSelected = (name: string) => selected.indexOf(name) !== -1;
// //
// //   // Avoid a layout jump when reaching the last page with empty rows.
// //   const emptyRows =
// //     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
// //
// //   return (
// //     <Box sx={{ width: "100%" }}>
// //       <Paper sx={{ width: "100%", mb: 2 }}>
// //         {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
// //         <TableContainer>
// //           <Table
// //             sx={{ minWidth: 750 }}
// //             aria-labelledby="tableTitle"
// //             size={dense ? "small" : "medium"}
// //           >
// //             <EnhancedTableHead
// //               // numSelected={selected.length}
// //               order={order}
// //               orderBy={orderBy}
// //               // onSelectAllClick={handleSelectAllClick}
// //               onRequestSort={handleRequestSort}
// //               // rowCount={rows.length}
// //             />
// //             <TableBody>
// //               {/* if you don't need to support IE11, you can replace the `stableSort` call with:
// //               rows.slice().sort(getComparator(order, orderBy)) */}
// //               {stableSort(rows, getComparator(order, orderBy))
// //                 //  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
// //                 .map((row, index) => {
// //                   //const isItemSelected = isSelected(row.name);
// //                   const labelId = `enhanced-table-checkbox-${index}`;
// //
// //                   return (
// //                     <TableRow
// //                       hover
// //                       // onClick={(event) => handleClick(event, row.name)}
// //                       //role="checkbox"
// //                       //aria-checked={isItemSelected}
// //                       //tabIndex={-1}
// //                       key={row.name}
// //                       //selected={isItemSelected}
// //                     >
// //                       {/* <TableCell padding="checkbox">
// //                         <Checkbox
// //                           color="primary"
// //                           checked={isItemSelected}
// //                           inputProps={{
// //                             'aria-labelledby': labelId,
// //                           }}
// //                         />
// //                       </TableCell> */}
// //                       <TableCell
// //                         component="th"
// //                         id={labelId}
// //                         scope="row"
// //                         padding="none"
// //                       >
// //                         {row.name}
// //                       </TableCell>
// //                       <TableCell align="right">{row.calories}</TableCell>
// //                       <TableCell align="right">{row.fat}</TableCell>
// //                       <TableCell align="right">{row.carbs}</TableCell>
// //                       <TableCell align="right">{row.protein}</TableCell>
// //                     </TableRow>
// //                   );
// //                 })}
// //
// //               <TableRow>
// //                 <TableCell colSpan={6} />
// //               </TableRow>
// //             </TableBody>
// //           </Table>
// //         </TableContainer>
// //         {/* <TablePagination
// //           rowsPerPageOptions={[5, 10, 25]}
// //           component="div"
// //           count={rows.length}
// //           rowsPerPage={rowsPerPage}
// //           page={page}
// //           onPageChange={handleChangePage}
// //           onRowsPerPageChange={handleChangeRowsPerPage}
// //         /> */}
// //       </Paper>
// //       {/* <FormControlLabel
// //         control={<Switch checked={dense} onChange={handleChangeDense} />}
// //         label="Dense padding"
// //       /> */}
// //     </Box>
// //   );
// // }
// // import TableContainer from "@mui/material/TableContainer";
// // import TableHead from "@mui/material/TableHead";
// //
// // import TableRow from "@mui/material/TableRow";
// // import TableSortLabel from "@mui/material/TableSortLabel";
// //
// // import Paper from "@mui/material/Paper";
// //
// // import { visuallyHidden } from "@mui/utils";
// //
// // interface Data {
// //   calories: number;
// //   carbs: number;
// //   fat: number;
// //   name: string;
// //   protein: number;
// // }
// //
// // function createData(
// //   name: string,
// //   calories: number,
// //   fat: number,
// //   carbs: number,
// //   protein: number
// // ): Data {
// //   return {
// //     name,
// //     calories,
// //     fat,
// //     carbs,
// //     protein,
// //   };
// // }
// //
// // const rows = [
// //   createData("Cupcake", 305, 3.7, 67, 4.3),
// //   createData("Donut", 452, 25.0, 51, 4.9),
// //   createData("Eclair", 262, 16.0, 24, 6.0),
// //   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
// //   createData("Gingerbread", 356, 16.0, 49, 3.9),
// //   createData("Honeycomb", 408, 3.2, 87, 6.5),
// //   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
// //   createData("Jelly Bean", 375, 0.0, 94, 0.0),
// //   createData("KitKat", 518, 26.0, 65, 7.0),
// //   createData("Lollipop", 392, 0.2, 98, 0.0),
// //   createData("Marshmallow", 318, 0, 81, 2.0),
// //   createData("Nougat", 360, 19.0, 9, 37.0),
// //   createData("Oreo", 437, 18.0, 63, 4.0),
// // ];
// //
// // function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
// //   if (b[orderBy] < a[orderBy]) {
// //     return -1;
// //   }
// //   if (b[orderBy] > a[orderBy]) {
// //     return 1;
// //   }
// //   return 0;
// // }
// //
// // type Order = "asc" | "desc";
// //
// // function getComparator<Key extends keyof any>(
// //   order: Order,
// //   orderBy: Key
// // ): (
// //   a: { [key in Key]: number | string },
// //   b: { [key in Key]: number | string }
// // ) => number {
// //   return order === "desc"
// //     ? (a, b) => descendingComparator(a, b, orderBy)
// //     : (a, b) => -descendingComparator(a, b, orderBy);
// // }
// //
// // // This method is created for cross-browser compatibility, if you don't
// // // need to support IE11, you can use Array.prototype.sort() directly
// // function stableSort<T>(
// //   array: readonly T[],
// //   comparator: (a: T, b: T) => number
// // ) {
// //   const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
// //   stabilizedThis.sort((a, b) => {
// //     const order = comparator(a[0], b[0]);
// //     if (order !== 0) {
// //       return order;
// //     }
// //     return a[1] - b[1];
// //   });
// //   return stabilizedThis.map((el) => el[0]);
// // }
// //
// // interface HeadCell {
// //   disablePadding: boolean;
// //   id: keyof Data;
// //   label: string;
// //   numeric: boolean;
// // }
// //
// // const headCells: readonly HeadCell[] = [
// //   {
// //     id: "name",
// //     numeric: false,
// //     disablePadding: true,
// //     label: "Dessert (100g serving)",
// //   },
// //   {
// //     id: "calories",
// //     numeric: true,
// //     disablePadding: false,
// //     label: "Calories",
// //   },
// //   {
// //     id: "fat",
// //     numeric: true,
// //     disablePadding: false,
// //     label: "Fat (g)",
// //   },
// //   {
// //     id: "carbs",
// //     numeric: true,
// //     disablePadding: false,
// //     label: "Carbs (g)",
// //   },
// //   {
// //     id: "protein",
// //     numeric: true,
// //     disablePadding: false,
// //     label: "Protein (g)",
// //   },
// // ];
// //
// // interface EnhancedTableProps {
// //   numSelected: number;
// //   onRequestSort: (
// //     event: React.MouseEvent<unknown>,
// //     property: keyof Data
// //   ) => void;
// //   onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
// //   order: Order;
// //   orderBy: string;
// //   rowCount: number;
// // }
// //
// // function EnhancedTableHead(props: EnhancedTableProps) {
// //   const { order, orderBy, onRequestSort } = props;
// //   const createSortHandler =
// //     (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
// //       onRequestSort(event, property);
// //     };
// //
// //   return (
// //     <TableHead>
// //       <TableRow>
// //         {headCells.map((headCell) => (
// //           <TableCell
// //             key={headCell.id}
// //             align={headCell.numeric ? "right" : "left"}
// //             padding={headCell.disablePadding ? "none" : "normal"}
// //             sortDirection={orderBy === headCell.id ? order : false}
// //           >
// //             <TableSortLabel
// //               active={orderBy === headCell.id}
// //               direction={orderBy === headCell.id ? order : "asc"}
// //               onClick={createSortHandler(headCell.id)}
// //             >
// //               {headCell.label}
// //               {orderBy === headCell.id ? (
// //                 <Box component="span" sx={visuallyHidden}>
// //                   {order === "desc" ? "sorted descending" : "sorted ascending"}
// //                 </Box>
// //               ) : null}
// //             </TableSortLabel>
// //           </TableCell>
// //         ))}
// //       </TableRow>
// //     </TableHead>
// //   );
// // }
// //
// // export default function EnhancedTable() {
// //   const [order, setOrder] = React.useState<Order>("asc");
// //   const [orderBy, setOrderBy] = React.useState<keyof Data>("calories");
// //   const [selected, setSelected] = React.useState<readonly string[]>([]);
// //   const [page, setPage] = React.useState(0);
// //   const [dense, setDense] = React.useState(false);
// //   const [rowsPerPage, setRowsPerPage] = React.useState(5);
// //
// //   const handleRequestSort = (
// //     event: React.MouseEvent<unknown>,
// //     property: keyof Data
// //   ) => {
// //     const isAsc = orderBy === property && order === "asc";
// //     setOrder(isAsc ? "desc" : "asc");
// //     setOrderBy(property);
// //   };
// //
// //   const isSelected = (name: string) => selected.indexOf(name) !== -1;
// //
// //   // Avoid a layout jump when reaching the last page with empty rows.
// //   const emptyRows =
// //     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
// //
// //   return (
// //     <Box sx={{ width: "100%" }}>
// //       <Paper sx={{ width: "100%", mb: 2 }}>
// //         <TableContainer>
// //           <Table
// //             sx={{ minWidth: 750, height: 300 }}
// //             aria-labelledby="tableTitle"
// //             size={dense ? "small" : "medium"}
// //           >
// //             <EnhancedTableHead
// //               order={order}
// //               orderBy={orderBy}
// //               onRequestSort={handleRequestSort}
// //             />
// //             <TableBody>
// //               {/* if you don't need to support IE11, you can replace the `stableSort` call with:
// //               rows.slice().sort(getComparator(order, orderBy)) */}
// //               {stableSort(rows, getComparator(order, orderBy)).map(
// //                 (row, index) => {
// //                   const labelId = `enhanced-table-checkbox-${index}`;
// //
// //                   return (
// //                     <TableRow hover key={row.name}>
// //                       <TableCell
// //                         component="th"
// //                         id={labelId}
// //                         scope="row"
// //                         padding="none"
// //                       >
// //                         {row.name}
// //                       </TableCell>
// //                       <TableCell align="right">{row.calories}</TableCell>
// //                       <TableCell align="right">{row.fat}</TableCell>
// //                       <TableCell align="right">{row.carbs}</TableCell>
// //                       <TableCell align="right">{row.protein}</TableCell>
// //                     </TableRow>
// //                   );
// //                 }
// //               )}
// //
// //               <TableRow>
// //                 <TableCell colSpan={6} />
// //               </TableRow>
// //             </TableBody>
// //           </Table>
// //         </TableContainer>
// //       </Paper>
// //     </Box>
// //   );
// // }
