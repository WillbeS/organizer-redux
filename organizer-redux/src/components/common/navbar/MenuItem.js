import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => (
    <li className="nav-item">
        <NavLink exact className='nav-link' activeClassName='active' to={props.to}>{props.label}</NavLink>
    </li>
);

export default MenuItem;