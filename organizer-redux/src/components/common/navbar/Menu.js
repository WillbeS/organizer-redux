import React from 'react';
import MenuItem from './MenuItem';

const Menu = (props) => {
    let menuItems = props.menuItems.map((item, index) => {
        return <MenuItem key={index} label={item.label} to={item.to} />
    });

    return <ul className="navbar-nav">
        {menuItems}
    </ul>
}

export default Menu;