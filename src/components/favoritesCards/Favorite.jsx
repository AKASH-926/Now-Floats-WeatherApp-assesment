import React, { useContext } from 'react'
import './Favorite.css'
import fav from '../../assets/fav.png'
import { DataContext } from '../../context/DataContext'
export default function Favorite() {
    let favLocations = ['Hyderabad']
    const { setLocationData } = useContext(DataContext)

    function getLocalData() {
        if (JSON.parse(localStorage.getItem('location'))) {
            favLocations = JSON.parse(localStorage.getItem('location'))
        } else {
            localStorage.setItem('location', JSON.stringify(favLocations))
        }
    }
    getLocalData()

    return (
        <div className='fav-container fav-bg'>
            <div className='fav-head'>
                <div><img src={fav} alt="" /></div>
                <div>
                    <p>Favorites</p>
                    <p>Your favorite locations</p>
                </div>

            </div>
            <div className="fav-list">
                {

                    favLocations.map((item, i) => {
                        return (
                            <p onClick={() => setLocationData(item)} key={i}>{item}</p>
                        )
                    })
                }

            </div>
        </div>
    )
}
