import React, {useState} from 'react'
import {Box, Button, FormControl, InputLabel, MenuItem, Select} from '@mui/material'
import {SelectChangeEvent} from '@mui/material/Select'
import {v4 as uuidv4} from 'uuid'
import Carousel from 'react-elastic-carousel'
import SubmissionQuarterly from './SubmissionQuarterly'
import LeftArrowIcon from '../../../../assets/images/Icons/LeftArrowIcon'
import RightArrowIcon from '../../../../assets/images/Icons/RightArrowIcon'
import useSubmissionsStyle from '../../../../assets/styleJs/submissions/submissions'
import {IArrow, ISubData, ISubmissionItems} from '../../../../types/submissionsType'

const Submissions = () => {
  const classes = useSubmissionsStyle()
  const [title, setTitle] = useState<string>('')

  const myArrow = ({type, onClick, isEdge}: IArrow) => {
    const pointer = type === 'PREV' ? <LeftArrowIcon /> : <RightArrowIcon />
    return (
      <Button onClick={onClick} disabled={isEdge}>
        {pointer}
      </Button>
    )
  }

  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 3},
    {width: 1440, itemsToShow: 4},
  ]
  const [items] = useState<ISubmissionItems[]>([
    {
      id: uuidv4(),
      item: 'Some Name',
      value: 10,
    },
    {
      id: uuidv4(),
      item: 'Some Name',
      value: 20,
    },
    {
      id: uuidv4(),
      item: 'Some Name',
      value: 30,
    },
  ])
  const handleChange = (event: SelectChangeEvent) => {
    setTitle(event.target.value as string)
  }

  const submissionNewData: ISubData[] = [
    {
      id: uuidv4(),
      status: 'new',
      employeesName: 'Jenny Cooper',
      employeesPosition: 'UI UX Desinger',
      employerName: 'Anna Adams',
      employerPosition: 'Project Manager',
      date: 'Nov 9',
      savedSubmission: false,
      color: 'red',
    },
    {
      id: uuidv4(),
      status: 'new',
      employeesName: 'Jenny Cooper',
      employeesPosition: 'UI UX Desinger',
      employerName: 'Anna Adams',
      employerPosition: 'Project Manager',
      date: 'Nov 9',
      savedSubmission: false,
      color: 'red',
    },
    {
      id: uuidv4(),
      status: 'new',
      employeesName: 'Jenny Cooper',
      employeesPosition: 'UI UX Desinger',
      employerName: 'Anna Adams',
      employerPosition: 'Project Manager',
      date: 'Nov 9',
      savedSubmission: false,
      color: 'red',
    },
    {
      id: uuidv4(),
      status: 'new',
      employeesName: 'Jenny Cooper',
      employeesPosition: 'UI UX Desinger',
      employerName: 'Anna Adams',
      employerPosition: 'Project Manager',
      date: 'Nov 9',
      savedSubmission: false,
      color: 'red',
    },
    {
      id: uuidv4(),
      status: 'new',
      employeesName: 'Jenny Cooper',
      employeesPosition: 'UI UX Desinger',
      employerName: 'Anna Adams',
      employerPosition: 'Project Manager',
      date: 'Nov 9',
      savedSubmission: false,
      color: 'red',
    },
    {
      id: uuidv4(),
      status: 'new',
      employeesName: 'Jenny Cooper',
      employeesPosition: 'UI UX Desinger',
      employerName: 'Anna Adams',
      employerPosition: 'Project Manager',
      date: 'Nov 9',
      savedSubmission: false,
      color: 'red',
    },
    {
      id: uuidv4(),
      status: 'new',
      employeesName: 'Jenny Cooper',
      employeesPosition: 'UI UX Desinger',
      employerName: 'Anna Adams',
      employerPosition: 'Project Manager',
      date: 'Nov 9',
      savedSubmission: false,
      color: 'red',
    },
    {
      id: uuidv4(),
      status: 'new',
      employeesName: 'Jenny Cooper',
      employeesPosition: 'UI UX Desinger',
      employerName: 'Anna Adams',
      employerPosition: 'Project Manager',
      date: 'Nov 9',
      savedSubmission: false,
      color: 'red',
    },
  ]
  const submissionNotFinished: ISubData[] = [
    {
      id: uuidv4(),
      status: 'not finished',
      color: 'orange',
      employeesName: 'Jenny Cooper',
      employeesPosition: 'UI UX Desinger',
      employerName: 'Anna Adams',
      employerPosition: 'Project Manager',
      date: 'Nov 9',
      savedSubmission: false,
    },
  ]
  const submissionReadData: ISubData[] = [
    {
      id: uuidv4(),
      status: 'read',
      color: 'green',
      employeesName: 'Jenny Cooper',
      employeesPosition: 'UI UX Desinger',
      employerName: 'Anna Adams',
      employerPosition: 'Project Manager',
      date: 'Nov 9',
      savedSubmission: false,
    },
    {
      id: uuidv4(),
      status: 'read',
      color: 'green',
      employeesName: 'Jenny Cooper',
      employeesPosition: 'UI UX Desinger',
      employerName: 'Anna Adams',
      employerPosition: 'Project Manager',
      date: 'Nov 9',
      savedSubmission: false,
    },
    {
      id: uuidv4(),
      status: 'read',
      color: 'green',
      employeesName: 'Jenny Cooper',
      employeesPosition: 'UI UX Desinger',
      employerName: 'Anna Adams',
      employerPosition: 'Project Manager',
      date: 'Nov 9',
      savedSubmission: false,
    },
    {
      id: uuidv4(),
      status: 'read',
      color: 'green',
      employeesName: 'Jenny Cooper',
      employeesPosition: 'UI UX Desinger',
      employerName: 'Anna Adams',
      employerPosition: 'Project Manager',
      date: 'Nov 9',
      savedSubmission: false,
    },
    {
      id: uuidv4(),
      status: 'read',
      color: 'green',
      employeesName: 'Jenny Cooper',
      employeesPosition: 'UI UX Desinger',
      employerName: 'Anna Adams',
      employerPosition: 'Project Manager',
      date: 'Nov 9',
      savedSubmission: false,
    },
    {
      id: uuidv4(),
      status: 'read',
      color: 'green',
      employeesName: 'Jenny Cooper',
      employeesPosition: 'UI UX Desinger',
      employerName: 'Anna Adams',
      employerPosition: 'Project Manager',
      date: 'Nov 9',
      savedSubmission: false,
    },
  ]

  return (
    <Box className="submission">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">
          Search by Event and/or Evaluator’s name
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={title}
          label="Search by Event and/or Evaluator’s  name"
          onChange={handleChange}
        >
          {items.map((item: ISubmissionItems) => (
            <MenuItem key={item.id} value={item.value}>
              {item.item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Carousel
        isRTL={false}
        itemsToShow={4}
        itemsToScroll={1}
        pagination={false}
        breakPoints={breakPoints}
        renderArrow={myArrow}
      >
        {submissionNewData.map((data) => (
          <SubmissionQuarterly
            key={data.id}
            color={data.color}
            status={data.status}
            employeesName={data.employeesName}
            employeesPosition={data.employeesPosition}
            employerName={data.employerName}
            employerPosition={data.employerPosition}
            date={data.date}
            savedSubmission={false}
          />
        ))}
      </Carousel>

      <Carousel
        isRTL={false}
        itemsToShow={4}
        itemsToScroll={1}
        pagination={false}
        breakPoints={breakPoints}
        renderArrow={myArrow}
      >
        {submissionReadData.map((data) => (
          <SubmissionQuarterly
            key={data.id}
            color={data.color}
            status={data.status}
            employeesName={data.employeesName}
            employeesPosition={data.employeesPosition}
            employerName={data.employerName}
            employerPosition={data.employerPosition}
            date={data.date}
            savedSubmission
          />
        ))}
      </Carousel>

      <Carousel
        isRTL={false}
        itemsToShow={4}
        itemsToScroll={1}
        pagination={false}
        breakPoints={breakPoints}
        renderArrow={myArrow}
      >
        {submissionNotFinished.map((data) => (
          <SubmissionQuarterly
            key={data.id}
            color={data.color}
            status={data.status}
            employeesName={data.employeesName}
            employeesPosition={data.employeesPosition}
            employerName={data.employerName}
            employerPosition={data.employerPosition}
            date={data.date}
            savedSubmission={false}
          />
        ))}
      </Carousel>
    </Box>
  )
}

export default Submissions
