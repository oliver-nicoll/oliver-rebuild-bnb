import React from 'react'
import './Home.css'
import Banner from '../Banner/Banner'
import Cards from '../Cards/Cards'

function Home() {
    return (
        <div className="Home">
            {/* Home Component */}
            <Banner />
            {/* cards */}
            <div className="home__section">
                <Cards />
                <Cards />
                <Cards />
            </div>
            <div className="home__section">
                <Cards />
                <Cards />
                <Cards />
            </div>
        </div>
    )
}

export default Home
