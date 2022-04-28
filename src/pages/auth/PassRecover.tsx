import React, {useState} from 'react'
import {sendPasswordResetEmail} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import {Box, Button, FormGroup, Grid, Paper, TextField, Typography} from '@mui/material'
import {auth} from '../../data/firebase'
import PasswordRecovery from '../../assets/images/auth/PasswordRecovery'
import useStyles from '../../assets/styleJs/auth/signUp'
import {useGlobalTheme} from '../../assets/style/globalVariables'

const PassRecover = () => {
  const classes = useStyles()
  const globalClass = useGlobalTheme()
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const handleRecoverPass = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    auth.useDeviceLanguage()

    await sendPasswordResetEmail(auth, email)
      .then(() => {
        if (auth.config.authDomain) {
          navigate('/password-recover-resend')
          setEmail('')
        }
      })
      .catch(() => {
        setError(true)
      })
  }

  return (
    <Box>
      <Grid className="auth auth__grid" container>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <Paper className="auth__title ">
            <Box className="auth__pass_rec-cheng">
              <Typography variant="h2" className={classes.authHeader}>
                Password Recovery
              </Typography>
              <Box>
                <Typography className={classes.authText}>
                  Write your email , we will send you recovery link{' '}
                </Typography>
              </Box>
            </Box>
            <FormGroup>
              <Box component="form" className="auth__input-box" onSubmit={handleRecoverPass}>
                <TextField
                  className={classes.authInput}
                  label="Email"
                  variant="outlined"
                  type="email"
                  fullWidth
                  size="small"
                  value={email}
                  error={error}
                  autoComplete="email"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />

                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  className={globalClass.button}
                >
                  SEND ME LINK
                </Button>
              </Box>
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item lg={4} md={5} sm={12} xs={12}>
          <Box className="auth__box-right ">
            <PasswordRecovery />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default PassRecover
