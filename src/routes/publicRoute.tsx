import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const PublicRoute = () => (1 > 2 ? <Outlet/> : <Navigate to="/dashboard"/>)

export default PublicRoute;