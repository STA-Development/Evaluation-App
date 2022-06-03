import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {
  Box,
  Button,
  CircularProgress,
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
import {useGlobalTheme} from '../../assets/style/globalVariables'
import axiosInstance from '../../axiosInstance'
import {afterSelf} from '../../utils/authUtils'
import {useAppDispatch} from '../../redux/hooks'
import {setUser} from '../../redux/user/userSlice'

const SignUp = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const classes = useStyles()
  const globalClasses = useGlobalTheme()
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [nameError, setNameError] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<boolean>(false)
  const [paswordError, setPasswordError] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setNameError(false)
    setEmailError(false)
    setPasswordError(false)

    if (firstName && lastName && email && password) {
      setNameError(false)
      setEmailError(false)
      setPasswordError(false)

      try {
        setIsAuth(true)
        const auth = await axiosInstance.post('/users/create', {
          firstName,
          password,
          lastName,
          email,
        })
        localStorage.setItem('token', auth.data.accessToken)
        const {data} = await afterSelf(auth.data.accessToken)
        dispatch(
          setUser({
            firstName: data.firstName,
            lastName: data.lastName,
            authUid: data.authUid,
            email: data.email,
            salary: data.salary,
            userId: data.id,
          }),
        )
        if (auth.data.accessToken) {
          navigate('/')
        }
        setIsAuth(false)
      } catch (err) {
        setIsAuth(false)
      }

      setEmail('')
      setFirstName('')
      setLastName('')
      setPassword('')
    } else if (!firstName) {
      setNameError(true)
    } else if (!lastName) {
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
            {!isAuth ? (
              <>
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
                  <Box
                    component="form"
                    noValidate
                    className="auth__input-box"
                    onSubmit={handleSubmit}
                  >
                    <TextField
                      className={classes.authInput}
                      label="Name"
                      variant="outlined"
                      size="small"
                      fullWidth
                      required
                      autoComplete="family-name"
                      value={firstName}
                      error={nameError}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setFirstName(e.target.value)
                      }}
                    />
                    <TextField
                      className={classes.authInput}
                      label="Surname"
                      variant="outlined"
                      size="small"
                      fullWidth
                      required
                      autoComplete="family-name"
                      value={lastName}
                      error={nameError}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setLastName(e.target.value)
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
              </>
            ) : (
              <Box className="circle">
                <CircularProgress />
              </Box>
            )}
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
