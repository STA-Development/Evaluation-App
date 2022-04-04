import React from "react";
import { Box, ListItem, ListItemButton, Typography } from "@mui/material";
// @ts-ignore
import Carousel, { consts } from "react-elastic-carousel";
import { useDashboardStyles } from "../../assets/styleJs/dashboard/dashboard";
import RightArrowIcon from "../../assets/images/Icons/RightArrowIcon";
import LeftArrowIcon from "../../assets/images/Icons/LeftArrowIcon";

const SliderPerformers = () => {
  const classes = useDashboardStyles();
  console.log(consts);
  const myArrow = ({ type, onClick, isEdge }: any): any => {
    const pointer =
      type === consts.PREV ? <LeftArrowIcon /> : <RightArrowIcon />;
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  };

  const sliderItems = [
    {
      id: Math.random(),
      headerName: "Jenny Cooper",
      position: "UI UX Designer",
      currency: 10,
    },
    {
      id: Math.random(),
      headerName: "Sam Jhonson",
      position: "UI UX Designer",
      currency: 10,
    },
    {
      id: Math.random(),
      headerName: "Anna Smith",
      position: "UI UX Designer",
      currency: 9,
    },
    {
      id: Math.random(),
      headerName: "Jenny Cooper",
      position: "UI UX Designer",
      currency: 9,
    },
    {
      id: Math.random(),
      headerName: "Jenny Cooper",
      position: "UI UX Designer",
      currency: 9,
    },
    {
      id: Math.random(),
      headerName: "Jenny Cooper",
      position: "UI UX Designer",
      currency: 8,
    },
    {
      id: Math.random(),
      headerName: "Jenny Cooper",
      position: "UI UX Designer",
      currency: 10,
    },
    {
      id: Math.random(),
      headerName: "Sam Jhonson",
      position: "UI UX Designer",
      currency: 9,
    },
    {
      id: Math.random(),
      headerName: "Jenny Cooper",
      position: "UI UX Designer",
      currency: 10,
    },
  ];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 6 },
  ];

  return (
    <Box>
      <Typography className={classes.sliderRockStars}>6 Rock Stars</Typography>

      <Carousel
        isRTL={false}
        itemsToShow={6}
        itemsToScroll={1}
        pagination={false}
        breakPoints={breakPoints}
        renderArrow={myArrow}
        itemPosition={consts.START}
        // outerSpacing={0}
      >
        {sliderItems.map((item) => (
          <Box className="sliderBox" key={item.id}>
            <ListItemButton className={classes.sliderBoxListButton}>
              <ListItem className={classes.sliderBoxListItem}>
                <Typography className={classes.sidebarBoxHeader}>
                  {item.headerName}
                </Typography>
                <Typography className={classes.sidebarBoxText}>
                  {item.position}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.sliderBoxCurrency}>
                  {item.currency}
                </Typography>
              </ListItem>
            </ListItemButton>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default SliderPerformers;
