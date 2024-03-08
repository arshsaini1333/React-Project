import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeaterInfo] = useState({
    city: "Mohali",
    feels_like: 22.17,
    humidity: 38,
    max_temp: 23.05,
    min_temp: 22.84,
    temp: 22.84,
    weather: "haze",
  });

  let updateInfo = (result) => {
    setWeaterInfo(result);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
