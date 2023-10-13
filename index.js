//Import necessary modules
import express from "express";
import axios from "axios";

//Initalise express app
const app = express();

//Set specified port
const port = 3000;

//Set EJS as the view engine
app.set("view engine", "ejs");

//Serve static files from the "public" directory
app.use(express.static("public"));
app.use(bodyParser.urlcoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("");
    const result = response.data;
    console.log(result);
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

//Start server and listen to the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
