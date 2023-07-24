import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';
// import { useSelector } from 'react-redux';

export default function DefaultRoutes(){
    // const isLoggedIn = useSelector((state) => state.users.isLoggedIn) || false;
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='*' element={<Page404/> }/>
        </Routes>
    );
}