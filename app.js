const express = require("express");
const app = express();
const port = 3000;

app.use(require("./middlewares/errorHandler"));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/personalInfo", (req, res) => {
  try {
    const personalInfo = require("./personalInfo.json");
    res.json(personalInfo);
  } catch (error) {
    // file not found
    if (error.code === "MODULE_NOT_FOUND") {
      res.status(404).send("Personal info not found");
    } else {
      res.status(400).send("Bad Request");
    }
  }
});

app.get("/education", (req, res) => {
  try {
    const education = require("./education.json");
    res.json(education);
  } catch (error) {
    if (error.code === "MODULE_NOT_FOUND") {
      res.status(404).send("Education not found");
    } else {
      res.status(400).send("Bad Request");
    }
  }
});

app.get("/skills", (req, res) => {
  try {
    const skills = require("./skills.json");
    res.json(skills);
  } catch (error) {
    if (error.code === "MODULE_NOT_FOUND") {
      res.status(404).send("Skills not found");
    } else {
      res.status(400).send("Bad Request");
    }
  }
});

app.get("/experience", (req, res) => {
  try {
    const experience = require("./experience.json");
    res.json(experience);
  } catch (error) {
    if (error.code === "MODULE_NOT_FOUND") {
      res.status(404).send("Experience not found");
    } else {
      res.status(400).send("Bad Request");
    }
  }
});

app.get("/projects", (req, res) => {
  try {
    const projects = require("./projects.json");
    res.json(projects);
  } catch (error) {
    if (error.code === "MODULE_NOT_FOUND") {
      res.status(404).send("Projects not found");
    } else {
      res.status(400).send("Bad Request");
    }
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
