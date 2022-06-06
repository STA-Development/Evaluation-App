import React, {useState} from 'react'
import {IRowsInfo, IRowsInfoSavedSubmissionsTable, Order} from '../../../../types/ongoingEventsType'
import TableHeaderSavedSubmissions from "./TableHeaderSavedSubmissions";
import {getComparator, sortedRowInformation} from '../../../../utils/utils'
import {Checkbox, Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material'
import EyeIcon from "../../../../assets/images/Icons/EyeIcon";
import useSubmissionsStyle from "../../../../assets/styleJs/submissions/submissions";
import PlusIconInSquare from "../../../../assets/images/Icons/PlusIconInSquare";
import MinusIconInSquare from "../../../../assets/images/Icons/MinusIconInSquare";

const rows: IRowsInfoSavedSubmissionsTable[] = [
  {
    event: 'Q4 2020',
    evaluators: 'Anna Adams',
    criteria: 'Work Performance, Personal Skills ',
    evaluatees: 'John Black',
    hireDate: '01/01/2020',
    bonusPercentage: '30%',
  },
  {
    event: 'Q4 2020',
    evaluators: 'Anna Adams',
    criteria: 'Work Performance, Personal Skills ',
    evaluatees: 'John Black',
    hireDate: '01/01/2020',
    bonusPercentage: '30%',
  },
  {
    event: 'Q4 2020',
    evaluators: 'Anna Adams',
    criteria: 'Work Performance, Personal Skills ',
    evaluatees: 'John Black',
    hireDate: '01/01/2020',
    bonusPercentage: '30%',
  },
  {
    event: 'Q4 2020',
    evaluators: 'Anna Adams',
    criteria: 'Work Performance, Personal Skills ',
    evaluatees: 'John Black',
    hireDate: '01/01/2020',
    bonusPercentage: '30%',
  },
  {
    event: 'Q4 2020',
    evaluators: 'Anna Adams',
    criteria: 'Work Performance, Personal Skills ',
    evaluatees: 'John Black',
    hireDate: '01/01/2020',
    bonusPercentage: '30%',
  },
  {
    event: 'Q4 2020',
    evaluators: 'Anna Adams',
    criteria: 'Work Performance, Personal Skills ',
    evaluatees: 'John Black',
    hireDate: '01/01/2020',
    bonusPercentage: '30%',
  },
  {
    event: 'Q4 2020',
    evaluators: 'Anna Adams',
    criteria: 'Work Performance, Personal Skills ',
    evaluatees: 'John Black',
    hireDate: '01/01/2020',
    bonusPercentage: '30%',
  },
  {
    event: 'Q4 2020',
    evaluators: 'Anna Adams',
    criteria: 'Work Performance, Personal Skills ',
    evaluatees: 'John Black',
    hireDate: '01/01/2020',
    bonusPercentage: '30%',
  },
  {
    event: 'Q4 2020',
    evaluators: 'Anna Adams',
    criteria: 'Work Performance, Personal Skills ',
    evaluatees: 'John Black',
    hireDate: '01/01/2020',
    bonusPercentage: '30%',
  },
  {
    event: 'Q4 2020',
    evaluators: 'Anna Adams',
    criteria: 'Work Performance, Personal Skills ',
    evaluatees: 'John Black',
    hireDate: '01/01/2020',
    bonusPercentage: '30%',
  },
  {
    event: 'Q4 2020',
    evaluators: 'Anna Adams',
    criteria: 'Work Performance, Personal Skills ',
    evaluatees: 'John Black',
    hireDate: '01/01/2020',
    bonusPercentage: '30%',
  },
  {
    event: 'Q4 2020',
    evaluators: 'Anna Adams',
    criteria: 'Work Performance, Personal Skills ',
    evaluatees: 'John Black',
    hireDate: '01/01/2020',
    bonusPercentage: '30%',
  },
  {
    event: 'Q4 2020',
    evaluators: 'Anna Adams',
    criteria: 'Work Performance, Personal Skills ',
    evaluatees: 'John Black',
    hireDate: '01/01/2020',
    bonusPercentage: '30%',
  },
  {
    event: 'Q4 2020',
    evaluators: 'Anna Adams',
    criteria: 'Work Performance, Personal Skills ',
    evaluatees: 'John Black',
    hireDate: '01/01/2020',
    bonusPercentage: '30%',
  },
]

const TableContentSavedSubmissions = () => {

  const classes = useSubmissionsStyle()
  const [orderDirection, setOrderDirection] = useState<Order>('asc')
  const [valueToOrderBy, setValueToOrderBy] = useState<keyof IRowsInfo>('status')
  const [openCriteria, setOpenCriteria] = useState(false);


  const handleRequestSort = (event: React.MouseEvent, property: keyof IRowsInfo) => {
    const isAsc = valueToOrderBy === property && orderDirection === 'asc'
    setOrderDirection(isAsc ? 'desc' : 'asc')
    setValueToOrderBy(property)
  }

  return (
    <Paper className="table-paper">
      <TableContainer>
        <Table>
          <TableHeaderSavedSubmissions
            valueToOrderBy={valueToOrderBy}
            orderDirection={orderDirection}
            handleRequestSort={handleRequestSort}
          />
          <TableBody>
            {sortedRowInformation(rows, getComparator(orderDirection, valueToOrderBy)).map(
              (event, index) => (
                <TableRow key={index} hover className="table-paper__row-saved-submissions">
                  <TableCell>
                    <Checkbox
                    color="primary"
                    // indeterminate={}
                    // checked={}
                    // onChange={}
                    // inputProps={{
                    //   'aria-label': 'select all events',
                    // }}
                  />
                    </TableCell>
                  <TableCell >{event.event}</TableCell>
                  <TableCell >{event.evaluators}</TableCell>
                  <TableCell>
                    <Box className={classes.savedSubmissionCriteriaField}>
                      <Box>
                        <IconButton
                          disableRipple={true}
                          aria-label="expand row"
                          size="small"
                          onClick={() => setOpenCriteria(!open)}
                        >
                          {openCriteria ? <MinusIconInSquare /> : <PlusIconInSquare />}
                        </IconButton>
                      </Box>
                      <Box className={classes.textAlignLeft}>
                        {event.criteria}
                      </Box>
                    </Box>
                    </TableCell>
                  <TableCell >
                    <Box className={classes.textAlignLeft}>
                      {event.evaluatees}
                    </Box>
                  </TableCell>
                  <TableCell >{event.hireDate}</TableCell>
                  <TableCell className={classes.textAlignLeft}>
                    <Box className={classes.textAlignLeft}>
                      {event.bonusPercentage}
                    </Box>
                  </TableCell>
                  <TableCell ><EyeIcon/></TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default TableContentSavedSubmissions
