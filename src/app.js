const express = require("express");
const cors = require("cors");
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

function validateRepositorieId(req, res, next) {
  const { id } = req.params

  if(!isUuid(id)) {
    return res.status(400).json({ error: "Invalide repositorie ID." })
  }

  return next()
}

function repositorieExists(req, res, next) {
  const { id } = req.params;

  const repositorieIndex = repositories.findIndex(repositorie => repositorie.id === id);
  if(repositorieIndex < 0) {
    return res.status(400).json({ error: 'Repositorie not found.' });
  }

  req.repositorieIndex = repositorieIndex;

  return next();
}

app.use("/repositories/:id", validateRepositorieId, repositorieExists)

app.get("/repositories", (req, res) => {
  return res.json(repositories);
});

app.post("/repositories", (req, res) => {
  const { title, url, techs } = req.body;

  const repositorie = { id: uuid(), title, url, techs, likes: 0 };
  
  repositories.push(repositorie);

  return res.json(repositorie);
});

app.put("/repositories/:id", (req, res) => {
  const { id } = req.params;

  const { title, url, techs } = req.body;

  const { likes } = repositories[req.repositorieIndex];

  const repositorie = {
    id,
    title, 
    url, 
    techs,
    likes,
  }

  repositories[req.repositorieIndex] = repositorie;

  return res.json(repositorie);
});

app.delete("/repositories/:id", (req, res) => {
  repositories.splice(req.repositorieIndex, 1);

  return res.status(204).send();
});

app.post("/repositories/:id/like", (req, res) => {
  repositories[req.repositorieIndex].likes += 1;

  return res.json(repositories[req.repositorieIndex]);
});

module.exports = app;
