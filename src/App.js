import React, { useState, useEffect } from "react";
import Div1 from "./components/Div1";
import Div2 from "./components/Div2";
import Div3 from "./components/Div3";

const App = () => {
  const [city, setCity] = useState(null);
  const [inputData, setInputData] = useState("");
  const [searchData, setSearchData] = useState("chandigarh");
  const [time, settime] = useState({ rise: "", set: "" });

  useEffect(() => {
    const fetchapi = async () => {
      try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchData}&units=metric&appid=f5438d5fbd64d400f92db90c211e8a17`;
        const response = await fetch(url);
        const data = await response.json();
        setCity(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchapi();
  }, [searchData])

  useEffect(() => {
    if (city) {
      let { sunrise, sunset } = city.sys;
      let rise = (new Date(sunrise * 1000)).toLocaleTimeString();
      let set = (new Date(sunset * 1000)).toLocaleTimeString();
      settime({ rise: rise, set: set });
    }
  }, [city])

  const sendData = () => {           
    setSearchData(inputData);
    setInputData("");
  }

  return (
    <>
      <div>
        {city == null ? (<div className='error'> <p>Oops! something went wrong</p></div>) :
          (<div className='main'>
            <div className='centerdiv'>
            {/* header start ========================================================= */}
              <div className='city'>
                <h2> {city.name} ({city.sys.country}) </h2>
                <div className="inputfield">
                  <input type="text" placeholder="search city..."
                    value={inputData} onChange={(e) => setInputData(e.target.value)} />
                  <button onClick={sendData}>Search</button>
                </div>
              </div>
              {/* header end=========================================================== */}
              <div className='info'>

                <div className='div1'>
                  <Div1 city={city} />
                </div>

                <div className='div2'>
                  <Div2 temp={city.main} coord={city.coord} />
                </div>

                <div className='div3'>
                  <Div3 time={time} press={city.main} wind={city.wind} />
                </div>

              </div>
            </div>
          </div>)}
      </div>
    </>
  )
}

export default App;