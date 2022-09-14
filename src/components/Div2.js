import React from "react";
import ThermostatIcon from '@mui/icons-material/Thermostat';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOffIcon from '@mui/icons-material/LocationOff';

const Div2 = (props) => {
    return (
        <>
              <div>
                    <h2> <span> <ThermostatIcon className="icons" /> </span>  Max-temp:<span> {props.temp.temp_max} °C </span> </h2> <hr />
                    <h2> <span> <ThermostatIcon className="icons" /> </span> Min-temp:<span> {props.temp.temp_min} °C </span> </h2>
                  </div>
                  <div>
                    <h2> <span> <LocationOnIcon className="icons" /> </span> Longitude: <span> {props.coord.lat} </span> </h2> <hr />
                    <h2> <span> <LocationOffIcon className="icons" /> </span> Longitude: <span> {props.coord.lon} </span></h2>
                  </div>
        </>
    )
}

export default Div2;