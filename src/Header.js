import React from 'react'
import "./header.css";
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';


function Header() {
    return (
        <div className="header">
        <IconButton>
            <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
        <img
        className="header__logo"
        src="https://www.citypng.com/public/uploads/preview/-11595270983sekxed5idc.png" 
        alt="tinder_logo"
        >

        </img>
        <IconButton>
            <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
        
        </div>
    )
}

export default Header
