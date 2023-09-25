import React from 'react';
import {Route, useNavigate} from "react-router-dom";
import './NavBar.css'
import {Button} from "react-bootstrap";
import {FULL_ROUTE, HOME_ROUTE, TOP_ROUTE} from "../utils/consts";
import Home from "../pages/Home";

const NavBar = () => {
    const navigate=useNavigate()
    return (

        <div>
            <Button className={"NavButton"} onClick={()=>navigate(HOME_ROUTE)}> Начало </Button>
            <Button className={"NavButton"} onClick={()=>navigate(TOP_ROUTE)}> Топ 5 </Button>
            <Button className={"NavButton"} onClick={()=>navigate(FULL_ROUTE)}> Весь список </Button>
        </div>
    );
};

export default NavBar;