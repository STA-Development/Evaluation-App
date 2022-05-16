import * as React from 'react'
import {useEffect, useState} from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import axiosInstance from '../axiosInstance'
import useUsersStyle from './user'
import {Box, Button} from '@mui/material'

interface IUsers {
  firstName: string
  lastName: string
  email: string
  id: number
}

const Users = () => {
  const classes = useUsersStyle()
  const [users, setUsers] = useState<IUsers[]>([])

  const headerConfig = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  }
  console.log('old', users)

  const handleDelete = async (id: number) => {
    await axiosInstance.delete(`users/${id}`, headerConfig)
  }

  useEffect(() => {
    ;(async () => {
      const dataUsers = await axiosInstance.get('/users', headerConfig)
      setUsers(dataUsers.data.userList)
      console.log(dataUsers)
    })()
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
                    <Button onClick={() => handleDelete(row.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default Users
