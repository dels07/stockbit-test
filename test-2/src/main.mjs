import express from "express";
import dotenv from "dotenv";

import * as service from "./service.mjs";

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

app.get("/search", async (req, res) => {
  const { keyword } = req.query;

  const results = await service.search(keyword);

  res.json(results);
});

app.get("/detail/:titleId", async (req, res) => {
  const { titleId } = req.params;

  const result = await service.detail(titleId);

  res.json(result);
});

export default app;
