import React, {useState} from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
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
import {auth} from '../../data/firebase'

import useStyles from '../../assets/styleJs/auth/signUp'
import SignInImg from '../../assets/images/auth/SignInImg'

import {useGlobalTheme} from '../../assets/style/globalVariables'

const SignIn = () => {
  const classes = useStyles()
  const globalClasses = useGlobalTheme()
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [, setIsFetching] = useState<boolean>(false)

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsFetching(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      if (auth.currentUser) {
        navigate('/dashboard')
      }
      setIsFetching(false)
    } catch (err) {
      setPassword('')
      setEmail('')
      setError(true)
      setIsFetching(false)
    }
  }

  return (
    <Box>
      <Grid className="auth auth__grid" container>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <Paper className="auth__title ">
            <Box className="auth__title_text">
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
              <Box component="form" className="auth__input_box" onSubmit={handleSignIn}>
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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
            <Link to="/password-recover-email" className="auth__forgot_pass">
              Forgot Password?
            </Link>
          </Paper>
        </Grid>
        <Grid item lg={4} md={5} sm={12} xs={12}>
          <Box className="auth__box_right ">
            <SignInImg />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SignIn
