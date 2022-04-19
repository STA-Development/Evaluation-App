import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import SubmissionQuarterly from "./SubmissionQuarterly";
import { SelectChangeEvent } from "@mui/material/Select";
import { v4 as uuidv4 } from "uuid";
import Carousel from "react-elastic-carousel";
import submissionNewData from "./submissionQuarterlyData/submissionNew";
import LeftArrowIcon from "../../../../assets/images/Icons/LeftArrowIcon";
import RightArrowIcon from "../../../../assets/images/Icons/RightArrowIcon";
import submissionReadData from "./submissionQuarterlyData/submissionRead";
import submissionNotFinished from "./submissionQuarterlyData/submissionNotFinished";
import useSubmissionsStyle from "../../../../assets/styleJs/submissions/submissions";

interface SubmissionItems {
  id: string;
  item: string;
  value: number;
}

interface Arrow {
  type?: string;
  onClick?: () => void;
  isEdge?: boolean;
}

const Submissions = () => {
  const classes = useSubmissionsStyle();
  const [title, setTitle] = useState<string>("");

  const myArrow = ({ type, onClick, isEdge }: Arrow) => {
    const pointer = type === "PREV" ? <LeftArrowIcon /> : <RightArrowIcon />;
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
    { width: 1440, itemsToShow: 5 },
  ];
  const [items, setitems] = useState<SubmissionItems[]>([
    {
      id: uuidv4(),
      item: "Some Name",
      value: 10,
    },
    {
      id: uuidv4(),
      item: "Some Name",
      value: 20,
    },
    {
      id: uuidv4(),
      item: "Some Name",
      value: 30,
    },
  ]);
  const handleChange = (event: SelectChangeEvent) => {
    setTitle(event.target.value as string);
  };

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
          {items.map((item: SubmissionItems) => {
            return (
              <MenuItem key={item.id} value={item.value}>
                {item.item}
              </MenuItem>
            );
          })}
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
            color={data.color}
            status={data.status}
            employeesName={data.employeesName}
            employeesPosition={data.employeesPosition}
            employerName={data.employerName}
            employerPosition={data.employerPosition}
            date={data.date}
            savedSubmission={true}
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
  );
};

export default Submissions;
