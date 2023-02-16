import React, { useContext, useState } from 'react'
import './Header.css'
import user from '../assets/user.png'
import search from '../assets/search.png'
import { DataContext } from '../context/DataContext'
export default function Header() {
    const { setLocationData, LocationData, setfavorite, favorite } = useContext(DataContext)
    const [SearchData, setSearchData] = useState('')
    const handleSearch = () => {
        setfavorite([...favorite, SearchData])
        setLocationData(SearchData)
    }
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
                    <input type="search" name="search" placeholder='Location' id="search" onChange={(e) => { setSearchData(e.target.value) }} />
                    <button className='searchIcon'><img src={search} alt="searchicon" onClick={handleSearch} /></button>

                </div>
                <div className="date">
                    <p>Sunday</p>
                    <p>26/2023</p>
                </div>

            </div>

        </div>
    )
}
