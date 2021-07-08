import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import SearchDate from '../SearchDate/SearchDate';
import './Banner.css';


function Banner() {

    const [showSearch, setShowSearch] = useState(false);

    const handleClick = () => {
        setShowSearch(!showSearch)
    }
    
    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <SearchDate />}
                <Button onClick={handleClick}
                className="banner__searchButton"
                variant='outlined'>Search Dates</Button>
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you with Oliver Rebuild LLC.
                </h5>
                <Button variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
