import React, { useContext, useEffect, useState } from 'react'
import './Header.css'
import user from '../assets/user.png'
import search from '../assets/search.png'
import { DataContext } from '../context/DataContext'
export default function Header() {
    const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const { setLocationData, LocationData, setfavorite, favorite } = useContext(DataContext)
    const [SearchData, setSearchData] = useState('')
    let Today = new Date()
    let Dat = Today.getDate()
    let Month = parseInt(Today.getMonth()) + 1
    let Year = Today.getFullYear()
    let Day = Days[parseInt(Today.getDay())]

    const handleSearch = () => {
        setfavorite([...JSON.parse(localStorage.getItem('location')), SearchData])
        setLocationData(SearchData)
    }
    useEffect(() => {
        if (favorite.length !== 1) {
            localStorage.setItem('location', JSON.stringify(favorite))
        }
    }, [LocationData])
    return (
        <div className="header-wrap">
            <div>
                <div className='user'>
                    <div>
                        <img src={user} alt="user" />
                    </div>

                    <p>Hello, <br />John</p>
                </div>
            </div>
            <div className='search-cont'>
                <div className='search-wrap'>
                    <input type="search" name="search" placeholder='Location' id="search" onChange={(e) => { setSearchData(e.target.value) }} />
                    <button className='searchIcon'><img src={search} alt="searchicon" onClick={handleSearch} /></button>

                </div>
                <div className="date">
                    <p>{Day}</p>
                    <p>{Dat}/{Month}/{Year}</p>
                </div>

            </div>

        </div>
    )
}
