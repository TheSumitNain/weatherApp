import React from 'react'
import AirIcon from '@mui/icons-material/Air';
import OpacityIcon from '@mui/icons-material/Opacity';
import CompressIcon from '@mui/icons-material/Compress';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import SolarPowerIcon from '@mui/icons-material/SolarPower';

const Div3 = (props) => {
  return (
    <>
        <div className="centerdiv3">
                    <h2> <span> <WbTwilightIcon className="icons" /> </span> Sunrise: <span> {props.time.rise} </span> </h2> <hr />
                    <h2> <span> <SolarPowerIcon className="icons" /> </span> Sunset: <span> {props.time.set} </span> </h2> <hr />
                    <h2> <span> <CompressIcon className="icons" /></span> Pressure: <span> {props.press.pressure} hPa </span> </h2> <hr />
                    <h2> <span> <OpacityIcon className="icons" /> </span> Humidity: <span> {props.press.humidity} % </span> </h2> <hr />
                    <h2> <span> <AirIcon className="icons" />  </span> Wind-speed:<span> {props.wind.speed} m/s </span> </h2>
                  </div>
    </>
  )
}

export default Div3