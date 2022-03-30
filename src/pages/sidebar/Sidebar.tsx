import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useSliderStyle } from "../../assets/scssInJS/sidebar";
import Avatar from "@mui/material/Avatar";
import AvatarIcon from "../../assets/images/navbar/AvatarIcon";
import { Button, Typography } from "@mui/material";
import LogOutIcon from "../../assets/images/Icons/LogOutIcon";
import { Link, useNavigate } from "react-router-dom";
import { sidebarList } from "./sidebarLists";
import { signOut } from "firebase/auth";
import { auth } from "../../data/firebase";
import { useAppSelector } from "../../redux/hooks";
import { selectUserId } from "../../redux/selectors";

const Sidebar = () => {
  const classes = useSliderStyle();
  const userId = useAppSelector(selectUserId);
  const navigate = useNavigate();

  const handleLogOut = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (userId) {
      signOut(auth)
        .then((out) => {
          console.log(out);
        })
        .catch((error) => {
          console.log(error);
        });
      navigate("/");
    }
  };

  return (
    <Drawer variant="permanent" anchor="left">
      <Box>
        <Box className={classes.upBox}>
          <Avatar className={classes.avatar}>
            <AvatarIcon />
          </Avatar>
          <Typography className={classes.nameSurname}>Name Surname</Typography>
          <Link style={{ textDecoration: "none" }} to={"/events-create"}>
            <Button variant="contained">CREATE EVENT</Button>
          </Link>
        </Box>
        <Box className={classes.listBox}>
          <List>
            {sidebarList.map((item) => (
              <Link to={item.route} key={item.id}>
                <ListItem className={classes.listItem} button>
                  <Box className={classes.listItemContent}>
                    <ListItemIcon className={classes.itemIcon}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      className={classes.itemText}
                      primary={item.name}
                    />
                  </Box>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Box>
      <Box className={classes.logOutBox}>
        <List>
          <ListItem className={classes.listItem} button onClick={handleLogOut}>
            <Box className={classes.listItemContent}>
              <ListItemIcon className={classes.itemIcon}>
                <LogOutIcon />
              </ListItemIcon>
              <ListItemText className={classes.itemText} primary="Log Out" />
            </Box>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
