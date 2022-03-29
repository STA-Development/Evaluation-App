import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {useStyles} from "../../assets/scssInJS/sidebar";
import Avatar from '@mui/material/Avatar';
import AvatarIcon from "../../assets/images/navbar/AvatarIcon";
import {Button, Typography} from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import LogOutIcon from "../../assets/images/Icons/LogOutIcon";
import {Link} from "react-router-dom"
import {sidebarList} from "./sidebarLists";


const Sidebar = () => {
  const classes = useStyles();


  return (
    <Drawer
      className={classes.sidebar}
      variant="permanent"
      anchor="left"
    >
      <Box>
        <Toolbar sx={{height: "72px"}}/>
        <Box className={classes.upBox}>
          <Avatar className={classes.avatar}>
            <AvatarIcon/>
          </Avatar>
          <Typography sx={{margin: "20px 0px"}} className={classes.nameSurname}>
            Name Surname
          </Typography>
          <Link style={{textDecoration: "none"}} to={"/events-create"}>
            <Button variant="contained">CREATE EVENT</Button>
          </Link>

        </Box>
        <Box className={classes.listBox}>
          <List sx={{padding: "0px"}}>
            {sidebarList.map((item) => (
              <Link style={{textDecoration: "none"}} to={item.route} key={item.id}>
                <ListItem className={classes.listItem} button>
                  <Box className={classes.listItemContent}>
                    <ListItemIcon className={classes.itemIcon}>{item.icon}</ListItemIcon>
                    <ListItemText className={classes.itemText} primary={item.name}/>
                  </Box>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Box>
      <Box className={classes.logOutBox}>
        <List>
          <ListItem sx={{marginBottom: "26px"}} className={classes.listItem} button>
            <Box className={classes.listItemContent}>
              <ListItemIcon className={classes.itemIcon}><LogOutIcon/></ListItemIcon>
              <ListItemText className={classes.itemText} primary="Log Out"/>
            </Box>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
