import React, {useState} from 'react'
import {confirmPasswordReset} from 'firebase/auth'
import {useLocation, useNavigate} from 'react-router-dom'
import {Box, Button, FormGroup, Grid, Paper, TextField, Typography} from '@mui/material'
import {auth} from '../../data/firebase'
import useStyles from '../../assets/styleJs/auth/signUp'
import ChangePassword from '../../assets/images/auth/ChangePassword'

import {useGlobalTheme} from '../../assets/style/globalVariables'

const PassRecoverNewPas = () => {
  const classes = useStyles()
  const globalClasses = useGlobalTheme()
  const navigate = useNavigate()
  const [resetPass, setResetPass] = useState<string>('')
  const [confirmPass, setConfirmPass] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const location = useLocation()

  const getParameterByName = (name: string) => {
    // eslint-disable-next-line no-param-reassign
    name = name.replace(/[\\[]/, '\\[').replace(/[\]]/, '\\]')
    const regexS = `[\\?&]${name}=([^&#]*)`
    const regex = new RegExp(regexS)
    const results = regex.exec(location.search)
    if (results == null) return ''
    return decodeURIComponent(results[1].replace(/\+/g, ' '))
  }
  const actionCode = getParameterByName('oobCode')

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (resetPass === confirmPass) {
      confirmPasswordReset(auth, actionCode, resetPass)
        .then((resp) => {
          console.log(resp)
        })
        // eslint-disable-next-line @typescript-eslint/no-shadow
        .catch((error) => {
          console.log(error)
        })
      setResetPass('')
      setConfirmPass('')
      navigate('/password-changed')
    } else {
      setError(true)
    }
  }

  return (
    <Box>
      <Grid className="auth auth__Grid" container>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <Paper className="auth__title ">
            <Box className="auth__pass_rec_cheng">
              <Typography variant="h2" className={classes.authHeader}>
                Password Recovery
              </Typography>
              <Box>
                <Typography className={classes.authText}>Write your new password</Typography>
              </Box>
            </Box>
            <FormGroup>
              <Box component="form" className="auth__input_box" onSubmit={handleResetPassword}>
                <TextField
                  className={classes.authInput}
                  label="New Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  error={error}
                  size="small"
                  helperText="Password shall be 6+ charachter , 1 capital letter, 1 number"
                  FormHelperTextProps={{
                    classes: {
                      root: classes.recPassLabel,
                    },
                  }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setResetPass(e.target.value)
                  }}
                />

                <TextField
                  className={classes.authInput}
                  label="Confirm password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  error={error}
                  size="small"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setConfirmPass(e.target.value)
                  }}
                />
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  className={globalClasses.button}
                >
                  Save
                </Button>
              </Box>
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item lg={4} md={5} sm={12} xs={12}>
          <Box className="auth__box_right ">
            <ChangePassword />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default PassRecoverNewPas
