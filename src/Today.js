import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloudRain,
  faThunderstorm,
  faSnowflake,
  faCloudShowersHeavy,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
const Today = ({ response, i }) => {
  let icon = faSun;
  let state = response.forecasts[i].text.split(" ");
  let src =
    "https://thumbs.dreamstime.com/b/landscape-flat-design-day-weather-clear-vector-illustration-146355760.jpg";
  //console.log(state);
  if (state.includes("Cloudy")) {
    src =
      "https://c8.alamy.com/comp/PB63H4/landscape-a-mountain-group-and-hills-flat-design-PB63H4.jpg";
    icon = faCloud;
  } else if (state.includes("Rain")) {
    src =
      "https://image.shutterstock.com/image-vector/colorfull-cartoon-flat-landscape-vector-260nw-441105118.jpg";
    icon = faCloudRain;
  } else if (state.includes("Thunderstorms")) {
    src =
      "https://thumbs.dreamstime.com/b/rain-lightnings-mountain-nature-landscape-rain-lightnings-mountain-nature-landscape-water-pond-snowy-peaks-243961064.jpg";
    icon = faThunderstorm;
  } else if (state.includes("Snow")) {
    src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeT85AQUkegJgpjTYeQgzUPuoBZUCb46hugw&usqp=CAU";
    icon = faSnowflake;
  } else if (state.includes("Showers")) {
    src =
      "https://image.shutterstock.com/image-vector/colorfull-cartoon-flat-landscape-vector-260nw-441105118.jpg";
    icon = faCloudShowersHeavy;
  }
  return (
    <div className="today">
      <img id="main-img" src={src} alt="sun" />
      <div className="date">
        <h2 className="text">{response.location.city}</h2>
        <div className="main-state">
          <FontAwesomeIcon className="icon" icon={icon}></FontAwesomeIcon>
          <h3 className="text">{response.forecasts[i].text}</h3>
        </div>
        <h4 className="text temp">
          {Math.floor(
            (response.current_observation.condition.temperature - 32) * (5 / 9)
          )}{" "}
          °C
        </h4>
        <h2 className="text">{response.forecasts[i].day}</h2>
      </div>
    </div>
  );
};

export default Today;
