import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>OMDB API</h1>
    <p>Simple OMDB API for search &amp; view detail of movie based on keyword</p>
    <br>
    <h2>Usage</h2>
    <code>/search?keyword=(keywords)</code>
    <br>
    <code>/detail/(titleId)</code>
  `);
});

export default app;
