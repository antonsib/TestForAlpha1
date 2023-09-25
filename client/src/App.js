import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import {FULL_ROUTE, HOME_ROUTE, TOP_ROUTE} from "./utils/consts";
import Home from "./pages/Home";
import Top from "./pages/Top";
import Full from "./pages/Full";

function App() {
  return (
    <div>
        <BrowserRouter>
            <NavBar/>
            <Routes>
            <Route path={HOME_ROUTE} element={<Home/>}/>
            <Route path={TOP_ROUTE} element={<Top/>}/>
            <Route path={FULL_ROUTE} element={<Full/>}/>
             <Route path={'*'} element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
