import React from 'react'

const Div1 = (props) => {
    return (
        <>
            <div className='temp'>
                <div className='temp_head'>
                    <h1> {props.city.main.temp} °C</h1>
                    <h2> {props.city.weather[0].description} </h2>
                </div>
                <div className='tempicon'>
                    <img src={`https://openweathermap.org/img/wn/${props.city.weather[0].icon}@4x.png`} alt="icon" />
                </div>
            </div>
        </>
    )
}

export default Div1