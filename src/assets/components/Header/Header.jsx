import React from 'react';
import profile from '../../../images/profile.png'
import './Header.css'

const Header = () => {
    return (
        <nav >
            <h2>Knowledge Cafe</h2>
            <img src={profile} alt="" />
        </nav>
    );
};

export default Header;