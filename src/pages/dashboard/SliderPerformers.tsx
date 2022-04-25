import React from 'react'
import {v4 as uuidv4} from 'uuid'
import {Box, ListItem, ListItemButton, Typography} from '@mui/material'
import Carousel from 'react-elastic-carousel'
import useDashboardStyles from '../../assets/styleJs/dashboard/dashboard'
import RightArrowIcon from '../../assets/images/Icons/RightArrowIcon'
import LeftArrowIcon from '../../assets/images/Icons/LeftArrowIcon'
import {IArrow} from '../../types/types'

const SliderPerformers = () => {
  const classes = useDashboardStyles()

  const myArrow = ({type, onClick, isEdge}: IArrow) => {
    const pointer = type === 'PREV' ? <LeftArrowIcon /> : <RightArrowIcon />
    return (
      <button type="button" onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
  }

  const sliderItems = [
    {
      id: uuidv4(),
      headerName: 'Jenny Cooper',
      position: 'UI UX Designer',
      currency: 10,
    },
    {
      id: uuidv4(),
      headerName: 'Sam Jhonson',
      position: 'UI UX Designer',
      currency: 10,
    },
    {
      id: uuidv4(),
      headerName: 'Anna Smith',
      position: 'UI UX Designer',
      currency: 9,
    },
    {
      id: uuidv4(),
      headerName: 'Jenny Cooper',
      position: 'UI UX Designer',
      currency: 9,
    },
    {
      id: uuidv4(),
      headerName: 'Jenny Cooper',
      position: 'UI UX Designer',
      currency: 9,
    },
    {
      id: uuidv4(),
      headerName: 'Jenny Cooper',
      position: 'UI UX Designer',
      currency: 8,
    },
    {
      id: uuidv4(),
      headerName: 'Jenny Cooper',
      position: 'UI UX Designer',
      currency: 10,
    },
    {
      id: uuidv4(),
      headerName: 'Sam Jhonson',
      position: 'UI UX Designer',
      currency: 9,
    },
    {
      id: uuidv4(),
      headerName: 'Jenny Cooper',
      position: 'UI UX Designer',
      currency: 10,
    },
  ]
  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 4},
    {width: 1200, itemsToShow: 6},
    {width: 1440, itemsToShow: 6},
  ]

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
      >
        {sliderItems.map((item) => (
          <Box className="slider__box" key={item.id}>
            <ListItemButton className={classes.sliderBoxListButton}>
              <ListItem className={classes.sliderBoxListItem}>
                <Typography className={classes.sidebarBoxHeader}>{item.headerName}</Typography>
                <Typography className={classes.sidebarBoxText}>{item.position}</Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.sliderBoxCurrency}>{item.currency}</Typography>
              </ListItem>
            </ListItemButton>
          </Box>
        ))}
      </Carousel>
    </Box>
  )
}

export default SliderPerformers
