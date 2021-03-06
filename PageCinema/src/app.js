const express = require("express");
const path = require("path");
const app = express();
const seatAPIRouter = require("./API/SeatAPI");

let log = console.log;

// allow cors

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// public directory
const publicDirectory = express.static(path.join(__dirname, "../public"));

// middle ware
app.use(publicDirectory);
app.use(seatAPIRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/page", "index.html"));
});
app.get("/film", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/page", "worldFilm.html"));
});

app.get("/camera", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/page", "404.html"));
});

app.get("/promotion", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/page", "404.html"));
});
app.get("/member", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/page", "404.html"));
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/page", "404.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  log(`Server is start at ${port}`);
});
