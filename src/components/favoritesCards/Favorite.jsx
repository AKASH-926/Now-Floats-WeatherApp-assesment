import React, { useContext } from 'react'
import './Favorite.css'
import fav from '../../assets/fav.png'
import { DataContext } from '../../context/DataContext'
export default function Favorite() {
    const { favorite, setLocationData } = useContext(DataContext)
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
                    favorite.map((item, i) => {
                        return (
                            <p onClick={() => setLocationData(item)} key={i}>{item}</p>
                        )
                    })
                }

            </div>
        </div>
    )
}
