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
      <FormControl sx={{ width: "400px", mb: "30px" }}>
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
      <Box>
        <Carousel
          isRTL={false}
          itemsToShow={4}
          itemsToScroll={1}
          pagination={false}
          breakPoints={breakPoints}
          renderArrow={myArrow}
        >
          {submissionNewData.map((data: any) => (
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
      <Box>
        <Carousel
          isRTL={false}
          itemsToShow={4}
          itemsToScroll={1}
          pagination={false}
          breakPoints={breakPoints}
          renderArrow={myArrow}
        >
          {submissionReadData.map((data: any) => (
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
      </Box>
      <Box>
        <Carousel
          isRTL={false}
          itemsToShow={4}
          itemsToScroll={1}
          pagination={false}
          breakPoints={breakPoints}
          renderArrow={myArrow}
        >
          {submissionNotFinished.map((data: any) => (
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
    </Box>
  );
};

export default Submissions;
