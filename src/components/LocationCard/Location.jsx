import React from 'react'
import '../WeatherCard/WeatherCard.css'
import location from '../../assets/location.png'
export default function Location() {
    return (
        <div className="weather-card-wrap">
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
                    <p>London</p>
                    <p>GB</p>
                </div>
            </div>
            <div className='weather-sec-3'>
                <div className='sub-card'>
                    <p>LATTITUDE</p>
                    <p>51.5085</p>
                </div>
                <div className='sub-card'>
                    <p>LONGITUDE</p>
                    <p>-0.2157</p>
                </div>
            </div>
        </div>
    )
}
