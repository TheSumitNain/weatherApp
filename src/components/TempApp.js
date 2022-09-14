import React from "react";
import ThermostatIcon from '@mui/icons-material/Thermostat';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOffIcon from '@mui/icons-material/LocationOff';

const TempApp = (props) => {
    return (
        <>
              <div>
                    <h2> <span> <ThermostatIcon className="icons" /> </span>  Max-temp:<span> {props.temp.temp_max} °C </span> </h2> <hr />
                    <h2> <span> <ThermostatIcon className="icons" /> </span> Min-temp:<span> {props.temp.temp_min} °C </span> </h2>
                  </div>
                  <div>
                    <h2> <span> <LocationOnIcon className="icons" /> </span> Longitude: <span> {props.location.lat} </span> </h2> <hr />
                    <h2> <span> <LocationOffIcon className="icons" /> </span> Longitude: <span> {props.location.lon} </span></h2>
                  </div>
        </>
    )
}

export default TempApp;