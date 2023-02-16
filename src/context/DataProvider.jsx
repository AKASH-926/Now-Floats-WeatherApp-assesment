import axios from 'axios'
import React, { Children, useEffect, useState } from 'react'
import { DataContext } from './DataContext'

export default function DataProvider({ children }) {
    const [WeatherData, setWeatherData] = useState()
    const [favorite, setfavorite] = useState(['Hyderabad'])
    const [LocationData, setLocationData] = useState('hyderabad')


    useEffect(() => {
        GetCurrentWeather()
    }, [LocationData])

    async function GetCurrentWeather() {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${LocationData}&appid=ae92741d3386ebba207f32c28f1c9291`).then((data) => {
            console.log(data.data)
            setWeatherData(data.data)
        }).catch((e) => console.log(e))
    }
    return (
        <DataContext.Provider value={{ WeatherData, setLocationData, LocationData, favorite, setfavorite }}>
            {children}
        </DataContext.Provider>
    )
}
