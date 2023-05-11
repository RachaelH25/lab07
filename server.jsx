const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8081;
const app = express();
app.use(cors());
const axios = require("axios");

const data = require("./data/weather.json");

app.get("/", (request, response) => {
    response.json("This is the root route.");
});

app.get("/weather", async (request, response) => {
    // const { lat, lon, searchQuery } = request.query;
    // find will stop looking with the first it finds but filter finds all of the options and gives it in an array.
    const API = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&lat=${data.lat},${data.lon}`;
    const res = await axios.get(API);
    const forecasts = res.data.results.map((forecast) => {
        return {
            city_name: forecast.city_name,
            latitude: forecast.lat,
            longitude: forecast.lon,
        };
    });
    // const forecasts = [];
    // try {
    //     const city = data.find((item) => {
    //         return item.city_name === searchQuery;
    //     });

    //     city.data.forEach((day) => {
    //         const fc = { date: day.valid_date, description: day.weather.description };
    //         forecasts.push(fc);
    //     });
    // } catch (error) {
    //     console.log(error);
    // }

    response.json(forecasts);
    console.log(forecasts);
});

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
