import React, { useContext } from 'react'
import '../WeatherCard/WeatherCard.css'
import location from '../../assets/location.png'
import { DataContext } from '../../context/DataContext'
export default function Location() {
    const { WeatherData } = useContext(DataContext)
    return (
        <div className="weather-card-wrap location-bg">
            <div className='weather-sec-1'>
                <div>
                    <img src={location} alt="cloud" />
                </div>

                <div className='weather-head' >
                    <p className='marign-0'>Location</p>
                    <p className='marign-0 '>Feeling awesome</p></div>
            </div>
            <div className='weather-sec-2'>
                <div className='temp-wrap'>
                    <p>{WeatherData?.name}</p>
                    <p>{WeatherData?.sys?.country}</p>
                </div>
            </div>
            <div className='weather-sec-3'>
                <div className='sub-card'>
                    <p>LATTITUDE</p>
                    <p>{WeatherData?.coord?.lat}</p>
                </div>
                <div className='sub-card'>
                    <p>LONGITUDE</p>
                    <p>{WeatherData?.coord?.lon}</p>
                </div>
            </div>
        </div>
    )
}
