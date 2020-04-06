import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import fire from '../config/fire.js';
import Home from './Home'

function NavBar() {
    return (
        <div>
            <nav class="navbar">

                <div class="container">
                    <div class="nav nav-left">
                        <ul>
                            <li> <a href="">Teams       <i class="arrow down"></i></a>

                                <ul class="sub_menu">

                                    <li> <a href="">Web Design Group</a> </li>
                                    <li> <a href="">Backend Team</a> </li>
                                

                                </ul> </li>
                        </ul>

                    </div>
                    <h1 class="logo"><a href="#">WorkNet</a></h1>
                    <ul class="nav nav-right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Home /></li>


                    </ul>
                </div>

            </nav>
        </div>

    )
}

export default NavBar;