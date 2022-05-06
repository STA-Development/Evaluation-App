import React, {useState} from 'react'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import {Button, DialogActions} from '@mui/material'
import axiosInstance from '../axiosInstance'

interface Iopen {
  open: boolean
  handleClose: () => void
  info: any
}

const UserChange = ({open, handleClose, info}: Iopen) => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const changedInfo = {
    firstName,
    lastName,
    email,

    salary: 10,
    position: 'string',
  }
  const handleSave = () => {
    axiosInstance.put(`/users/${info.id}`, changedInfo)
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="name"
          value={firstName}
          label="First Name"
          type="text"
          variant="outlined"
          fullWidth
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFirstName(e.target.value)
          }}
        />
        <TextField
          margin="dense"
          id="name"
          value={info.lastName}
          label="Lasst Name"
          type=" text"
          variant="outlined"
          fullWidth
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setLastName(e.target.value)
          }}
        />
        <TextField
          margin="dense"
          id="name"
          value={info.email}
          label="Email Address"
          type="email"
          variant="outlined"
          fullWidth
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value)
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  )
}

export default UserChange
