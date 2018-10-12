import React, { Component } from 'react';
import Menu from './Menu';
import NavLinks from '../../../constants/NavLinks';

class Navbar extends Component {
    render() {
        let menuItems = this.props.loggedIn ? NavLinks.MAIN_PRIVATE : NavLinks.MAIN_PUBLIC;

        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <Menu menuItems={menuItems} />
                </div>
            </nav>
        );
    }
}

export default Navbar;