import React, { useContext } from 'react'
import './WeatherCard.css'
import cloud from '../../assets/cloud.png'
import { DataContext } from '../../context/DataContext'
export default function WeatherCard() {

    const { WeatherData } = useContext(DataContext)
    return (
        <div className="weather-card-wrap weather-bg">
            <div className='weather-sec-1'>
                <div>
                    <img src={cloud} alt="cloud" />
                </div>

                <div className='weather-head' >
                    <p className='marign-0'>Weather</p>
                    <p className='marign-0 '>What's the weather</p></div>
            </div>
            <div className='weather-sec-2'>
                <div className='temp-wrap'>
                    <p style={{ "fontSize": "1.55em" }}>{WeatherData?.weather[0]?.description}</p>
                    <p>You can see {WeatherData?.weather[0]?.main}</p>
                </div>
            </div>
            <div className='weather-sec-3'>
                <div className='sub-card'>
                    <p>Pressure</p>
                    <p>{WeatherData?.main?.pressure}mb</p>
                </div>
                <div className='sub-card'>
                    <p>Velocity</p>
                    <p>{WeatherData?.wind?.speed}km</p>
                </div>
                <div className='sub-card'>
                    <p>Humidity</p>
                    <p>{WeatherData?.main?.humidity}%</p>
                </div>
            </div>
        </div>
    )
}
