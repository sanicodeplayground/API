//Import necessary modules
import express from "express";

//Initalise express app
const app = express();

//Set specified port
const port = 3000;

//Set EJS as the view engine
app.set("view engine", "ejs");

//Serve static files from the "public" directory
app.use(express.static("public"));

//Start server and listen to the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
