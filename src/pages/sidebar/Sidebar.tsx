import React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import {Button, Typography} from '@mui/material'
import {NavLink, useNavigate} from 'react-router-dom'
import {signOut} from 'firebase/auth'
import {auth} from '../../data/firebase'
import useSliderStyle from '../../assets/styleJs/sidebar'
import AvatarIcon from '../../assets/images/navbar/AvatarIcon'
import LogOutIcon from '../../assets/images/Icons/LogOutIcon'
import sidebarList from './sidebarLists'
import {useAppSelector} from '../../redux/hooks'
import {selectUserId} from '../../redux/selectors'
import {useGlobalTheme} from '../../assets/style/globalVariables'

const Sidebar = () => {
  const classes = useSliderStyle()
  const globalClasses = useGlobalTheme()
  const userId = useAppSelector(selectUserId)
  const navigate = useNavigate()

  const handleLogOut = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (userId) {
      signOut(auth)
      navigate('/')
    }
  }

  return (
    <Drawer variant="permanent" anchor="left" className={classes.drawer}>
      <Box className={classes.drawerBox}>
        <Box className={classes.upBox}>
          <Avatar className={classes.avatar}>
            <AvatarIcon />
          </Avatar>
          <Typography className={classes.nameSurname}>Name Surname</Typography>
          <NavLink className="text-decoration-none" to="/">
            <Button variant="contained" size="large" className={globalClasses.button}>
              CREATE EVENT
            </Button>
          </NavLink>
        </Box>
        <Box className={classes.listBox}>
          <List>
            {sidebarList.map((item) => (
              <NavLink
                to={item.route}
                key={item.id}
                className={({isActive}) => (isActive ? 'link_active' : 'nav-link')}
              >
                <ListItem className={classes.listItem} button>
                  <Box className={classes.listItemContent}>
                    <ListItemIcon className={classes.itemIcon}>{item.icon}</ListItemIcon>
                    <ListItemText className={classes.itemText} primary={item.name} />
                  </Box>
                </ListItem>
              </NavLink>
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
  )
}

export default Sidebar
