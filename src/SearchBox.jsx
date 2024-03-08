import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
  const API_URL =
    "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
  let [city, setCity] = useState("");

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
  };
  return (
    <div className="SearchBox">
      <h3>Search Box</h3>
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
      </form>
    </div>
  );
}
