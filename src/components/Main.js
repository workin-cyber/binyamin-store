import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Categories from "../pages/Categories";
import Item from "../pages/Item";
import Items from "../pages/Items";

export default function Main(props) {

    return <div>

        <Routes>
            <Route path='/home' element={<Categories />} />
            <Route path='/items/:cat' element={<Items />} />
            <Route path='/item/:id' element={<Item/>} />
        </Routes>
    </div>;
}