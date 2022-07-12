import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloudRain,
  faThunderstorm,
  faSnowflake,
  faCloudShowersHeavy,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
const Stats = ({ response, i }) => {
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
    <div className="stats">
      <div className="content">
        <img id="cards-img" src={src} alt="" />
        <div className="date">
          <h2 className="text">{response.location.city}</h2>
          <h2 className="text">{response.forecasts[i].day}</h2>
        </div>

        <FontAwesomeIcon className="icon" icon={icon}></FontAwesomeIcon>
        <h3 className="text">{response.forecasts[i].text}</h3>
        <hr />
        <div className="high-low">
          <div className="low">
            <h3>LOW</h3>
            <h4>{Math.floor((response.forecasts[i].low - 32) * (5 / 9))} °C</h4>
          </div>
          <div className="high">
            <h3>High</h3>
            <h4>
              {Math.floor((response.forecasts[i].high - 32) * (5 / 9))} °C
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
