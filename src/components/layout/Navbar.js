// class based components

// extension shortcut formatted components 'rce' + tab

import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


const  Navbar = ({ icon, title }) => {
    return (
        <nav className="navbar bg-primary">
            {/* i tag with the class of fab */}
            <h1>
            <i className={icon} /> {title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
        // reason it looks like a nav bar is bc csf file
    )
};

Navbar.defaultProps = {
    title: 'GitHub Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar
