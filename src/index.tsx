import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/style/main.scss";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./assets/style/theme/theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Events from "./pages/events/Events";
import Reports from "./pages/reports/Reports";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="events" element={<Events/>}/>
            <Route path="reports" element={<Reports/>}/>
          </Route>


        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
