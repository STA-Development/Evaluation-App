import React, {useState} from 'react'
import {useGlobalTheme} from '../../assets/style/globalVariables'
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
import axiosInstance from '../../axiosInstance'
import {afterSelf} from '../../utils/authUtils'
import {setUser} from '../../redux/user/userSlice'
import {useAppDispatch} from '../../redux/hooks'
import SignInImg from '../../assets/images/auth/SignInImg'
import axiosError from '../../utils/axiosError'
import {AxiosError} from 'axios'

const SignIn = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false)
  const classes = useStyles()
  const globalClasses = useGlobalTheme()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      setIsAuthLoading(true)
      const auth = await axiosInstance.post('/users/signIn', {
        email,
        password,
      })
      localStorage.setItem('token', auth.data.accessToken)
      const user = await afterSelf(auth.data.accessToken)
      dispatch(
        setUser({
          firstName: user.firstName,
          lastName: user.lastName,
          authUid: user.authUid,
          email: user.email,
          salary: user.salary,
          userId: user.id,
        }),
      )
      if (auth.data) {
        navigate('/')
      }
      setIsAuthLoading(false)
    } catch (err) {
      setIsAuthLoading(false)
      setPassword('')
      setEmail('')
      setError(true)
      axiosError(err as AxiosError)
    }
  }

  return (
    <Box>
      <Grid className="auth auth__grid" container>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <Paper className="auth__title ">
            {!isAuthLoading ? (
              <>
                <Box className="auth__title-text">
                  <Typography variant="h2" className={classes.authHeader}>
                    Sign In
                  </Typography>
                  <Box>
                    <Typography className={classes.authText}>Already have an account?</Typography>
                    <Link to="/" className={classes.link}>
                      Sign up now
                    </Link>
                  </Box>
                </Box>
                <FormGroup>
                  <Box component="form" className="auth__input-box" onSubmit={handleSignIn}>
                    <TextField
                      className={classes.authInput}
                      label="Email"
                      variant="outlined"
                      type="email"
                      fullWidth
                      size="small"
                      error={error}
                      value={email}
                      autoComplete="email"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                      }
                    />
                    <TextField
                      className={classes.authInput}
                      label="Password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      size="small"
                      error={error}
                      value={password}
                      autoComplete="current-password"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                      }
                    />

                    <FormControlLabel
                      control={<Checkbox />}
                      label="Keep me signed in"
                      value="checkbox"
                      className={classes.authCheck}
                    />

                    <Button
                      variant="contained"
                      size="large"
                      type="submit"
                      className={globalClasses.button}
                    >
                      Sign In
                    </Button>
                  </Box>
                </FormGroup>
                <Link to="/password-recover-email" className="auth__forgot-pass">
                  Forgot Password?
                </Link>
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
            <SignInImg />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SignIn
