import React from 'react';
import { NavLink } from 'react-router-dom';
import {Button} from 'react-bootstrap';


const Navigation = () => {
    return (
        <div>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li> <NavLink to="/about">About</NavLink></li>
            <li> <NavLink to="/contact">Contact</NavLink></li>
      
        </div>
    );
};

Navigation.propTypes = {};

export default Navigation;
