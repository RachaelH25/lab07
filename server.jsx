const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());

const data = require("./data/weather.json");

function findWeather() {
    // const result= data.filter((weather) => weather."" == "")
    return result;
}

app.get("/", (request, response) => {
    response.json("This is the root");
});

app.get("/weather", (request, response) => {
    let dataToReturn = data;
    if (request.query.lat) {
        dataToReturn = findWeather(request.query.lat);
    }
    response.json(dataToReturn);
});

app.listen(PORT, () => console.log(`App is runninh on PORT ${PORT}`));
