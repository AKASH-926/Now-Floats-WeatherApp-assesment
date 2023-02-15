import React from 'react'
import './Header.css'
import user from '../assets/user.png'
import search from '../assets/search.png'
export default function Header() {
    return (
        <div className="header-wrap">
            <div>
                <div className='user'>
                    <div>
                        <img src={user} alt="user" />
                    </div>

                    <p>Hello, <br />John Doe</p>
                </div>
            </div>
            <div className='search-cont'>
                <div className='search-wrap'>
                    <input type="search" name="search" placeholder='Location' id="search" />
                    <button className='searchIcon'><img src={search} alt="searchicon" /></button>

                </div>
                <div className="date">
                    <p>Sunday</p>
                    <p>26/2023</p>
                </div>

            </div>

        </div>
    )
}
