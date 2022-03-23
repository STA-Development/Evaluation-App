import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Dashboard from "../pages/dashboard/Dashboard";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
        </Routes>

    );
};

export default AppRoutes;