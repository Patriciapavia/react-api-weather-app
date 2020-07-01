import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const defaultWeatherCity = "London";
  const [currentCity, setCurrentCity] = useState({});
  const [searchCity, setSearchCity] = useState(defaultWeatherCity);

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&APPID=b739255c0b0dacd8806fb31e5da42c99`
      )
      .then((res) => {
        setCurrentCity(res.data);
        setSearchCity("");
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const search = (evt) => {
    if (evt.key === "Enter") {
      getWeather();
    }
  };

  return (
    <div className="container">
      <div className="col-md-6 mx-auto text-center bg-info mt-5 p-5 rounded">
        <h1 id="w-location">{currentCity.name}</h1>
        <h1>{}</h1>
        {/* <h3 className="text-dark" id="w-desc">{currentCity.main.temp}</h3> */}
        <h3 id="w-string"></h3>

        <ul className="w-details list-group mt-3">
          <li className="list-group-item" id="w-humidnity">
            {" "}
          </li>
          <li className="list-group-item" id="w-feels-like"></li>
          <li className="list-group-item" id="w-wind"></li>
        </ul>
        <hr />
        <h1></h1>
        <input
          type="text"
          placeholder="Seach for city"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          onKeyPress={search}
        ></input>
      </div>
    </div>
  );
}

export default App;
