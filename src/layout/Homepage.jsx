import React from 'react'
import WeatherCard from '../components/WeatherCard/WeatherCard'
import Header from './Header'
import './Homepage.css'
export default function Homepage() {
    return (
        <div className='main-container'>
            <div className="sub-container">

                <div>
                    <Header />
                    <div className="card-cont">
                        <WeatherCard />
                        <WeatherCard />
                        <WeatherCard />
                        <WeatherCard />
                    </div>
                </div>


            </div>

        </div>
    )
}
