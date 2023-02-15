import React from 'react'
import WeatherCard from '../components/WeatherCard/WeatherCard'
import './Homepage.css'
export default function Homepage() {
    return (
        <div className='main-container'>
            <div className="sub-container">
                <div className="logo">
                    w
                </div>
                <div className="card-cont">
                    <WeatherCard />
                    {/* <WeatherCard />
                    <WeatherCard /> */}
                </div>

            </div>

        </div>
    )
}
