import "./Reset.css";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [location, setLocation] = useState({});
    const [mapImg, setMapImg] = useState("");
    const [apiError, setApiError] = useState("");
    const [weather, setWeather] = useState("");

    function handleChange(event) {
        console.log(event.target.value);
        setSearchQuery(event.target.value);
    }

    async function getLocation() {
        try {
            const API = `https://eu1.locationiq.com/v1/search?key=${process.env.REACT_APP_API_KEY}&q=${searchQuery}&format=json`;
            console.log(API);
            const res = await axios.get(API);
            setLocation(res.data[0]);
            handleMap(res.data[0]);
            getWeather(res.data[0]);
            setApiError("");
        } catch (error) {
            console.log(error);
            setApiError(error.message);
            setLocation({});
            setWeather([]);
            setMapImg("");
        }
    }

    async function getWeather(data) {
        try {
            // const API = `https://localhost:8081/weather?searchQuery=${searchQuery}&lat=${data.lat}&lon=${data.lon}`;
            const API = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&lat=${data.lat},${data.lon}`;
            const res = await axios.get(API);
            console.log(res.data);
            setWeather(res.data);
        } catch (error) {
            console.log(error);
            setWeather([]);
        }
    }

    function handleMap(data) {
        const API = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${data.lat},${data.lon}&zoom=12`;
        setMapImg(API);
    }

    return (
        <div className="App">
            <h1>Location IQ API</h1>
            <p></p>
            <input type="text" onChange={handleChange} placeholder="enter location" />
            <button onClick={getLocation}>Explore</button>
            <p>{apiError}</p>
            <h2>{location.display_name}</h2>
            <p>
                longitude: {location.lon}, latitude: {location.lat}
            </p>
            {mapImg && <img src="{mapImg}" alt="map" />}
            {weather.map((day) => {
                return (
                    <p>
                        {day.date} - {day.description}
                    </p>
                );
            })}
        </div>
    );
}

export default App;
