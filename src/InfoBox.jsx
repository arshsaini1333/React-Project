import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox() {
  const INIT_URL =
    "https://media.istockphoto.com/id/1895084513/photo/fisherman-and-the-sun.webp?b=1&s=170667a&w=0&k=20&c=A5bN8xlYLNfhG3-6QQ4F9FvjvYTV7zv_R3WNUsnz31g=";
  let info = {
    city: "Delhi",
    feels_like: 22.17,
    humidity: 38,
    max_temp: 23.05,
    min_temp: 22.84,
    temp: 22.84,
    weather: "haze",
  };
  return (
    <div className="InfoBox">
      <h1>WeatherInfo - {info.weather}</h1>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={INIT_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temprature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Maximum Temprature = {info.max_temp}</p>
              <p>Minimum Temprature = {info.min_temp}</p>
              <p>
                The Weather can be describe as <i>{info.weather}</i> and Feels
                likes &nbsp;{info.feels_like}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
