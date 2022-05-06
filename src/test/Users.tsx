import * as React from 'react'
import {useEffect, useState} from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import {useAppSelector} from '../redux/hooks'
import {selectToken} from '../redux/selectors'
import axiosInstance from '../axiosInstance'
import useUsersStyle from './user'
import {Box, Button} from '@mui/material'
import UserChange from './UserChange'

interface IUsers {
  firstName: string
  lastName: string
  email: string
  id: number
}

interface Info {
  firstName?: string
  lastName?: string
  email?: string
  id?: number
}

const Users = () => {
  const token = useAppSelector(selectToken)
  const classes = useUsersStyle()
  const [users, setUsers] = useState<IUsers[]>([])
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const [userChange, setUserChange] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState<Info>({})

  const headerConfig = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
  }
  const handleClose = () => setUserChange(false)

  const handleDelete = async (id: number) => {
    await axiosInstance
      .delete(`users/${id}`, {
        headers: {
          accept: '*/*',
          Authorization: 'Bearer ' + token,
        },
      })
      .then(() => {
        const del = users.filter((user) => id !== user.id)
        setUsers(del)
      })
  }
  const handleChange = async (id: number) => {
    setUserChange(true)
    await axiosInstance.get(`users/${id}`, headerConfig).then((res) => {
      setUserInfo(res.data)
    })
    console.log('asdas', userChange)
  }

  useEffect(() => {
    axiosInstance.get('/users/me', headerConfig).then((res) => {
      setIsAdmin(res.data.isAdmin)
    })
  }, [])

  useEffect(() => {
    axiosInstance.get('/users', headerConfig).then((res) => {
      setUsers(res.data.data)
      console.log(res.data.data)
    })
  }, [])
  return (
    <>
      <Box className={classes.user}>
        <TableContainer component={Paper}>
          <Table sx={{minWidth: 650}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row: IUsers) => (
                <TableRow key={row.id} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>
                    {isAdmin && <Button onClick={() => handleDelete(row.id)}>Delete</Button>}
                  </TableCell>
                  <TableCell>
                    {isAdmin && <Button onClick={() => handleChange(row.id)}>Change</Button>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {userChange && <UserChange open={userChange} handleClose={handleClose} info={userInfo} />}
    </>
  )
}

export default Users
