// // const express = require("express");
// // const cors = require("cors");
// // const axios = require("axios");
// // require("dotenv").config();
// // const PORT = process.env.PORT || 8081;
// // const app = express();
// // app.use(cors());

// // const data = require("./data/weather.json");

// // app.get("/", (request, response) => {
// //     response.status(200).json("This is the root route.");
// // });

// app.get("/weather", async (request, response) => {
//     const { lat, lon, searchQuery } = request.query;
//     // find will stop looking with the first it finds but filter finds all of the options and gives it in an array.
//     const forecasts = [];
//     try {
//         const API = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&city=${searchQuery}`;
//         const res = await axios.get(API);

//         res.data.data.forEach((day) => {
//             const fc = { date: day.valid_date, description: day.weather.description };
//             forecasts.push(fc);
//         });
//         response.status(200).json(forecasts);
//     } catch (error) {
//         console.log(error);
//         response.status(404).json("Location not found.");
//     }
// });
// // const forecasts = res.data.results.map((forecast) => {
// //     return {
// //         city_name: forecast.city_name,
// //         latitude: forecast.lat,
// //         longitude: forecast.lon,
// //     };
// // });
// // const forecasts = [];
// // try {
// //     const city = data.find((item) => {
// //         return item.city_name === searchQuery;
// //     });

// //     city.data.forEach((day) => {
// //         const fc = { date: day.valid_date, description: day.weather.description };
// //         forecasts.push(fc);
// //     });
// // } catch (error) {
// //     console.log(error);
// // }

// app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
