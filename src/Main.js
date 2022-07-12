import { useState } from "react";
import Stats from "./Stats";
import Today from "./Today";

const Main = () => {
  const [location, setLocation] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6c813d40eemsh4b85bd226d7efc3p13fc54jsn57726975d5dd",
      "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
    },
  };
  const handleClick = () => {
    fetch(
      `https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=f`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setResponse(response);
        console.log(response);
      })
      .catch((err) => {
        setError("Location Not Found Please Try again later");
        console.error(err);
      });
  };
  return (
    <div className="main">
      <div>
        <label htmlFor="location">Location/City:</label>
        <input
          name="location"
          placeholder="Location"
          className="location-input"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      {error && <h3>{error}</h3>}
      <button className="btn" onClick={handleClick}>
        Check Weather
      </button>
      <div className="td-card">
        {response && <Today response={response} i={0}></Today>}
      </div>
      <div id="multi-days">
        {response && <Stats response={response} i={1} />}
        {response && <Stats response={response} i={2} />}
        {response && <Stats response={response} i={3} />}
      </div>
    </div>
  );
};

export default Main;
