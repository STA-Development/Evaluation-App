import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './assets/style/main.scss'
import {ThemeProvider} from '@mui/material/styles'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import theme from './assets/style/theme/theme'
import {store} from './redux/store'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
