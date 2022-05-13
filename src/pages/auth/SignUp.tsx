import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import useStyles from '../../assets/styleJs/auth/signUp'
import SignUpImg from '../../assets/images/auth/SignUpImg'

import {useAppDispatch} from '../../redux/hooks'
import {useGlobalTheme} from '../../assets/style/globalVariables'
import axiosInstance from '../../axiosInstance'
import {setUser} from '../../redux/user/userSlice'

const SignUp = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const classes = useStyles()
  const globalClasses = useGlobalTheme()
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [nameError, setNameError] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<boolean>(false)
  const [paswordError, setPasswordError] = useState<boolean>(false)

  const regName = name.trim().split(' ')
  const firstName = regName[0]
  const lastName = regName[1]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setNameError(false)
    setEmailError(false)
    setPasswordError(false)

    if (name && email && password) {
      setNameError(false)
      setEmailError(false)
      setPasswordError(false)

      await axiosInstance
        .post('/users/create', {
          firstName,
          password,
          lastName,
          email,
        })
        .then((auth) => {
          console.log('signup', auth)
          dispatch(
            setUser({
              token: auth.data,
            }),
          )
          navigate('/')
        })
        .catch((err) => {
          throw new Error(err)
        })

      setEmail('')
      setName('')
      setPassword('')
    } else if (!name) {
      setNameError(true)
    } else if (!email) {
      setEmailError(true)
    } else if (!password) {
      setPasswordError(true)
    }
  }

  return (
    <Box>
      <Grid container className="auth auth__grid">
        <Grid item lg={4} md={6} sm={12} xs={12} alignItems="center">
          <Paper className="auth__title ">
            <Box className="auth__title-text">
              <Typography variant="h2" className={classes.authHeader} gutterBottom>
                Sign up
              </Typography>
              <Box>
                <Typography className={classes.authText}>Already have an account?</Typography>

                <Link to="/sign-in" className={classes.link}>
                  Sign in
                </Link>
              </Box>
            </Box>
            <FormGroup>
              <Box component="form" noValidate className="auth__input-box" onSubmit={handleSubmit}>
                <TextField
                  className={classes.authInput}
                  label="Name / Surname"
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                  autoComplete="family-name"
                  value={name}
                  error={nameError}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setName(e.target.value)
                  }}
                />
                <TextField
                  className={classes.authInput}
                  label="Email"
                  variant="outlined"
                  type="email"
                  fullWidth
                  error={emailError}
                  value={email}
                  required
                  size="small"
                  autoComplete="email"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value)
                  }}
                />
                <TextField
                  className={classes.authInput}
                  label="Password (6+ charachter , 1 capital letter, 1 number)"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required
                  error={paswordError}
                  value={password}
                  size="small"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value)
                  }}
                  autoComplete="new-password"
                />

                <FormControlLabel
                  control={<Checkbox />}
                  label="Keep me signed in"
                  value="checkbox"
                  className={classes.authCheck}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  className={globalClasses.button}
                >
                  Sign Up
                </Button>
              </Box>
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item lg={4} md={5} sm={12} xs={12}>
          <Box className="auth__box-right ">
            <SignUpImg />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SignUp
