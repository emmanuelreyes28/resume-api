const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/personalInfo", (req, res) => {
  const personalInfo = require("./personalInfo.json");
  res.json(personalInfo);
});

app.get("/education", (req, res) => {
  const education = require("./education.json");
  res.json(education);
});

app.get("/experience", (req, res) => {
  const experience = require("./experience.json");
  res.json(experience);
});

app.get("/projects", (req, res) => {
  const projects = require("./projects.json");
  res.json(projects);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
