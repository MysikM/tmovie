import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";

const NavPage = () => {
    return (
        <Routes>
            <Route path='/:category/search/:keyword' element={<Catalog />}/>
            <Route path='/:category/:id' element={<Detail />}/>
            <Route path='/:category/' element={<Catalog />}/>
            <Route path='/' element={<Home />}/>
            <Route path='/tmovie' element={<Navigate to='/' replace />}/>
        </Routes>
    );
};

export default NavPage;