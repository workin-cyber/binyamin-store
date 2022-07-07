import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AllItems from "../pages/AllItems";
import Categories from "../pages/Categories";
import Item from "../pages/Item";
import Items from "../pages/Items";
import Login from "../pages/Login";
import Login2 from "../pages/Login2";
import Login3 from "../pages/Login3";

export default function Main(props) {

    return <div>

        <Routes>
            <Route path='/login' element={<Login3 />} />
            <Route path='/home' element={<Categories />} />
            <Route path='/items/:cat' element={<Items />} />
            <Route path='/item/:id' element={<Item/>} />
            <Route path='/items' element={<AllItems/>} />
        </Routes>
    </div>;
}