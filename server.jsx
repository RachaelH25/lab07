const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());

const data = require("./data/weather.json");

app.get("/", (request, response) => {
    response.json("This is the root route.");
});

app.get("/weather", (request, response) => {
    const { lat, lon, searchQuery } = request.query;
    // find will stop looking with the first it finds but filter finds all of the options and gives it in an array.
    const city = data.find((item) => {
        return item.city_name === searchQuery;
    });
    const forecasts = [];
    city.data.forEach((day) => {
        const fc = { date: day.valid_date, description: day.weather.description };
        forecasts.push(fc);
    });

    response.json(forecasts);
});

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
