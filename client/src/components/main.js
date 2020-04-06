import React from "react";
import {Route,Link} from "react-router-dom";
import Profile from './profile';
import Group from './group';
import './main.css';
import NavBar from './navbar';


function Main(){
    return(
        <div className="mainMenu">
            <NavBar/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/" component={Group}/>
            
        </div>
    );
}

export default Main;