import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from "../pages/Home";
import Login from '../pages/Login';
import SignIn from '../pages/SignIn';
import Page404 from '../pages/Page404';
import Employees from "../pages/Admin/Employees";
import Users from "../pages/Admin/Users";
import Requests from "../pages/Admin/Requests";
import Products from "../pages/Admin/Products";
// import { useSelector } from 'react-redux';

export default function DefaultRoutes(){
    // const isLoggedIn = useSelector((state) => state.users.isLoggedIn) || false;
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/admin/employees' element={<Employees/>}/>
            <Route path='/admin/products' element={<Products/>}/>
            <Route path='/admin/requests' element={<Requests/>}/>
            <Route path='/admin/users' element={<Users/>}/>
            <Route path='*' element={<Page404/>}/>
        </Routes>
    );
}