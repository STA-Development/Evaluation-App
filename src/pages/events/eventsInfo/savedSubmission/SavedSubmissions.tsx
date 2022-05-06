import React, {useState} from 'react'
import {Button, TextField} from '@mui/material'
import axiosInstance from '../../../../axiosInstance'

const SavedSubmissions = () => {
  //const token = useAppSelector(selectToken)
  const [name, setName] = useState('')
  //const [asd, setAsd] = useState('')

  // const add = () => {
  //   axiosInstance.post('users/create', {})
  // }
  const texChange = () => {
    axiosInstance.delete('/users/5').then((res) => {
      console.log('axios', res)
    })
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
