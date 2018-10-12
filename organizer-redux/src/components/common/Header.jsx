import React from 'react';
import Navbar from './navbar/Navbar';

const Header = (props) => {
    return (
        <header>
            <Navbar loggedIn={props.loggedIn} />
        </header>
    )
}

export default Header;