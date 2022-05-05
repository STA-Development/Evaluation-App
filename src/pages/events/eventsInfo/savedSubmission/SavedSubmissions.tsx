import React, {useState} from 'react'
import {Button, TextField} from '@mui/material'

const SavedSubmissions = () => {
  const [name, setName] = useState('')
  //const [asd, setAsd] = useState('')

  // const add = () => {
  //   axiosInstance.post('users/create', {})
  // }
  const texChange = () => {
    const asd = name.trim().split(' ')
    console.log(asd[0])
  }
  return (
    <div>
      <h4>Saved Submissons</h4>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value)
        }}
      />
      <Button onClick={texChange}>Add</Button>
    </div>
  )
}

export default SavedSubmissions
