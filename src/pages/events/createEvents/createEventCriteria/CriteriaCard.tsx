import React, {useState} from 'react';
import {Box, Button, Checkbox, Grid, IconButton, TextField, Typography} from "@mui/material";
import {ICriteriaCardParams, ICriteriaPaperInfo, ISubCriteria} from "../TypesEvents";
import UnCheckedIcon from "../../../../assets/images/Icons/UnCheckedIcon";
import CheckedIcon from "../../../../assets/images/Icons/CheckedIcon";
import useCreateEventStyles from "../../../../assets/styleJs/events/createEvent";
import Popover from '@mui/material/Popover'
import PlusIconBlue from "../../../../assets/images/Icons/PlusIconBlue";



const CriteriaCard = (params: ICriteriaCardParams) => {

  const classes = useCreateEventStyles()
  const [openedSubCriterias, setOpenedSubCriterias] = useState<ISubCriteria[]>([])
  const [anchorElCriteria, setAnchorElCriteria] = React.useState<HTMLButtonElement | null>(null)
  const [openedCriteriaId, setOpenedCriteriaId] = useState<
    React.MouseEvent<HTMLButtonElement> | string
    >('')


  const openCriteria = Boolean(anchorElCriteria)
  const idCriteria = openCriteria ? 'simple-popover' : undefined

  const [newSubFilters, setNewSubFilters] = useState<ISubCriteria[]>([
    {
      id: Math.random(),
      name: '',
      result: true,
    },
  ])

  const addNewSubfilters = (
    newSubfilters: ISubCriteria[],
    openedSubfilters: ISubCriteria[],
    id: React.MouseEvent<HTMLButtonElement> | string,
    criteriaDataTemp: ICriteriaPaperInfo[],
  ) => {
    if (
      newSubfilters.every((item: ISubCriteria) => item.name.length > 0) &&
      openedSubfilters.every((item: ISubCriteria) => item.name.length > 0)
    ) {
      const newArr: ISubCriteria[] = openedSubfilters.concat(newSubfilters)
      const newArrRoot = criteriaDataTemp.map((oneCriteria) => {
        const newCriteriaObj = {...oneCriteria, subCriteria: [...newArr]}
        if (id === oneCriteria.id) {
          return newCriteriaObj
        } else {
          return oneCriteria
        }
      })
      params.setCriteriaData(newArrRoot)
      setOpenedSubCriterias([])
      setNewSubFilters([
        {
          id: Math.random(),
          name: '',
          result: true,
        },
      ])
      handleCloseCriteria()
    }
  }

  const handleClickCriteria = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: React.MouseEvent<HTMLButtonElement> | string,
  ) => {
    setAnchorElCriteria(event.currentTarget)
    const getSubcriteria = async () => {
      const foundCriteria = params.criteriaData.find((el: ICriteriaPaperInfo) => el.id === id)
      let data: ISubCriteria[] = []
      if (foundCriteria !== undefined && foundCriteria.subCriteria.length) {
        data = foundCriteria.subCriteria
        await setOpenedSubCriterias(data)
      }
    }
    setOpenedCriteriaId(id)
    getSubcriteria()
  }

  const addOneSubCriteria = (arrNew: ISubCriteria[]) => {
    if (arrNew[arrNew.length - 1].name.length) {
      const newObj = {
        id: Math.random(),
        name: '',
        result: true,
      }
      const temp = [...arrNew, newObj]
      setNewSubFilters(temp)
    }
  }

  const handleCloseCriteria = () => {
    setAnchorElCriteria(null)
    setOpenedSubCriterias([])
    setNewSubFilters([
      {
        id: Math.random(),
        name: '',
        result: true,
      },
    ])
  }


  return (
<Box>
    <Grid columnSpacing={2} rowSpacing={2} container>
      {params.criteriaData?.map((item: ICriteriaPaperInfo, index: number) => (
        <Grid key={index} columns={2} item xs={6} className={classes.criteriasPaper}>
          <Box className={classes.criteriaPaperBackground}>
            <Box className={classes.criteriasPaperHeaderBox}>
              <Box className={classes.checkboxManagerBox}>
                <Checkbox
                  checked={item.criteria}
                  onChange={(e) => {
                    const newObj = {...item, criteria: e.target.checked}
                    const newArr = params.criteriaData.map((newItem: ICriteriaPaperInfo) => {
                      if (newItem.id === newObj.id) {
                        return newObj
                      } else {
                        return newItem
                      }
                    })
                    params.setCriteriaData(newArr)
                  }}
                  className={classes.checkbox}
                  defaultChecked
                  icon={<UnCheckedIcon />}
                  checkedIcon={<CheckedIcon />}
                />
                <Typography className={classes.criteriasPaperHeaderText}>
                  {item.name}
                </Typography>
              </Box>
              <Button
                className={classes.criteriaAddButton}
                onClick={(e) => handleClickCriteria(e, item.id)}
                variant="text"
                disableRipple
              >
                <Typography className={classes.criteriasAddButtonText}>Add</Typography>
              </Button>
            </Box>
            <Box className={classes.criteriasPaperInfo}>
              {item.subCriteria.map((el: ISubCriteria, index1: number) => (
                <Box className={classes.eachCriteria} key={index1}>
                  <Checkbox
                    checked={el.result}
                    onChange={(e) => {
                      const newObj = {...el, result: e.target.checked}
                      const newArrSubcriteria = item.subCriteria.map(
                        (newItem: ISubCriteria) => {
                          if (newItem.id === newObj.id) {
                            return newObj
                          } else {
                            return newItem
                          }
                        },
                      )
                      const bigObj = {...item, subCriteria: newArrSubcriteria}
                      const newBigArr = params.criteriaData.map((a: ICriteriaPaperInfo) => {
                        if (bigObj.id === a.id) {
                          return bigObj
                        } else {
                          return a
                        }
                      })
                      params.setCriteriaData(newBigArr)
                    }}
                    className={classes.checkbox}
                    defaultChecked
                    icon={<UnCheckedIcon />}
                    checkedIcon={<CheckedIcon />}
                  />
                  <Typography className={classes.criteriasPaperEachCriteriaText}>
                    {el.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  <Popover
    id={idCriteria}
    open={openCriteria}
    anchorEl={anchorElCriteria}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
  >
    <Box className={classes.subCriteriaPaper}>
      <Box className={classes.criteriaPaperBackground}>
        <Box className={classes.subCriteriaPaperHeaderBox}>
          <Box className={classes.addRatingTextBox}>
            <Typography className={classes.textW500S14}>Add New Subfilter</Typography>
          </Box>
        </Box>
        <Box className={classes.bluePlusIconBox}>
          <IconButton
            onClick={() => {
              addOneSubCriteria(newSubFilters)
            }}
          >
            <PlusIconBlue />
          </IconButton>
        </Box>
        <Box className={classes.subfilterPaperInfo}>
          {openedSubCriterias.map((subCriteria: ISubCriteria, indexSub: number) => (
            <Box key={indexSub} className={classes.eachSubCriteria}>
              <Box className={classes.eachCriteria} key={indexSub}>
                <Checkbox
                  className={classes.checkbox}
                  defaultChecked
                  icon={<UnCheckedIcon />}
                  checkedIcon={<CheckedIcon />}
                />
                <TextField
                  onChange={(e) => {
                    const tempObj = {...subCriteria, name: e.target.value}
                    const newArr = openedSubCriterias.map((item: ISubCriteria) => {
                      if (item.id === tempObj.id) {
                        return tempObj
                      } else {
                        return item
                      }
                    })
                    setOpenedSubCriterias(newArr)
                  }}
                  InputProps={{
                    classes: {notchedOutline: classes.noBorder},
                  }}
                  value={subCriteria.name}
                  className={classes.outlinedBasic}
                  placeholder="Subfilter name"
                  variant="outlined"
                />
              </Box>
            </Box>
          ))}
          {newSubFilters.map((newSubFilter: ISubCriteria, indexSubFilter: number) => (
            <Box key={indexSubFilter} className={classes.eachSubCriteria}>
              <Box className={classes.eachCriteria} key={indexSubFilter}>
                <Checkbox
                  className={classes.checkbox}
                  defaultChecked
                  icon={<UnCheckedIcon />}
                  checkedIcon={<CheckedIcon />}
                />
                <TextField
                  onChange={(e) => {
                    const tempObj = {...newSubFilter, name: e.target.value}
                    const newArr = newSubFilters.map((item: ISubCriteria) => {
                      if (item.id === tempObj.id) {
                        return tempObj
                      } else {
                        return item
                      }
                    })
                    setNewSubFilters(newArr)
                  }}
                  InputProps={{
                    classes: {notchedOutline: classes.noBorder},
                  }}
                  value={newSubFilter.name}
                  className={classes.outlinedBasic}
                  placeholder="Subfilter name"
                  variant="outlined"
                />
              </Box>
            </Box>
          ))}
          <Box className={classes.addSubCriteriaPopUpButtonsBox}>
            <Button
              onClick={handleCloseCriteria}
              className={classes.criteriaAddButton}
              variant="text"
              disableRipple
            >
              <Typography className={classes.criteriasAddButtonText}>Cancel</Typography>
            </Button>
            <Button
              onClick={() => {
                addNewSubfilters(
                  newSubFilters,
                  openedSubCriterias,
                  openedCriteriaId,
                  params.criteriaData,
                )
              }}
              className={classes.criteriaAddButton}
              variant="text"
              disableRipple
            >
              <Typography className={classes.criteriasAddButtonText}>Apply</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  </Popover>
</Box>


  );
};

export default CriteriaCard;