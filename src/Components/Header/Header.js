import React from 'react';
import Logo from './Logo.png'

import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Header.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
              <Link to='/'>
                <img
                    className="header__icon"
                    src={Logo}
                    alt=""
                />
            </Link>
            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <AccountCircleIcon />
            </div>
        </div>
    )
}

export default Header
