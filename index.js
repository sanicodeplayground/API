//Import necessary modules
import express from "express";
import axios from "axios";

//Initalise express app
const app = express();

//Set specified port
const port = 3000;

//API base URL
const API_URL = "https://api.open-meteo.com/v1/forecast";

//Set EJS as the view engine
app.set("view engine", "ejs");

//Serve static files from the "public" directory
app.use(express.static("public"));

//Set middleware to access users inputs
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  // try {
  //   const response = await axios.get(API_URL + "");
  //   const result = response.data;
  //   console.log(result);
  //   res.render("index.ejs", { data: result });
  // } catch (error) {
  //   console.error("Failed to make request:", error.message);
  //   res.render("index.ejs", {
  //     error: error.message,
  //   });
  // }
  res.render("index.ejs");
});

app.post("/getEather", async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const response = await axios.get(API_URL, {
      params: {
        latitude,
        longitude,
        hourly: ["temperature_2m", "windspeed_10m", "precipitation"],
      },
    });
    res.render("index.ejs", { weatherData: response.data });
  } catch (error) {
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

//Start server and listen to the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
