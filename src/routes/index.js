import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from "../pages/Home";
import Login from '../pages/Login';
import SignIn from '../pages/SignIn';
import Page404 from '../pages/Page404';
import Admin from "../pages/Admin";
// import { useSelector } from 'react-redux';

export default function DefaultRoutes(){
    // const isLoggedIn = useSelector((state) => state.users.isLoggedIn) || false;
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='*' element={<Page404/>}/>
        </Routes>
    );
}