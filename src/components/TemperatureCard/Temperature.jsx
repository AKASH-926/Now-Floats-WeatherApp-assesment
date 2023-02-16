import React from 'react'
import '../WeatherCard/WeatherCard.css'
import sun from '../../assets/sun.png'
export default function Temperature() {
    return (
        <div className="weather-card-wrap">
            <div className='weather-sec-1'>
                <div>
                    <img src={sun} alt="cloud" />
                </div>

                <div className='weather-head' >
                    <p className='marign-0'>Temperature</p>
                    <p className='marign-0 '>Feeling hot or cold?</p></div>
            </div>
            <div className='weather-sec-2'>
                <div className='temp-wrap'>
                    <p>22&#176;C</p>
                    <p>How you feeling?</p>
                </div>
                <div>
                    <p>AVG</p>
                </div>
            </div>
            <div className='weather-sec-3' style={{ "justify-content": "space-around" }}>
                <div className='sub-card'>
                    <p>MINTEMP</p>
                    <p style={{ "margin": "0 1% 0 1%" }}>22&#176;C</p>
                </div>

                <div className='sub-card'>
                    <p>MAXTEMP</p>
                    <p style={{ "margin": "0 1% 0 1%" }}>22&#176;C</p>
                </div>
            </div>
        </div>
    )
}
