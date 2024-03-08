import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "155f28a38460478aebe77fb7934b3230";

  let getWeatherInfo = async () => {
    try {
      let res = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonRes = await res.json();
      let result = {
        city: city,
        temp: jsonRes.main.temp,
        min_temp: jsonRes.main.temp_min,
        max_temp: jsonRes.main.temp_max,
        humidity: jsonRes.main.humidity,
        feels_like: jsonRes.main.feels_like,
        weater: jsonRes.weather[0].description,
      };
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      let info = await getWeatherInfo();
      updateInfo(info);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="SearchBox">
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error ? <p style={{ color: "red" }}>* No Such Place Exist</p> : null}
      </form>
    </div>
  );
}
