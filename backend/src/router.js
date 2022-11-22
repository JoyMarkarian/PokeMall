const express = require("express");

const { connection } = require("./db");

const router = express.Router();

router.get("/hello", (req, res) => {
  res.send("hello you");
});

router.get("/pokemons", (req, res) => {
  connection
    .query("SELECT * from pokemons")
    .then(([response]) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/pokemons/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  connection
    .query("SELECT * FROM pokemons WHERE pokemons.index = ?", [id])
    .then(([response]) => {
      if (response[0] != null) {
        res.json(response[0]);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from pokemall");
    });
});

router.get("/rand", (req, res) => {
  connection
    .query("SELECT * FROM pokemons ORDER BY RAND() LIMIT 5")
    .then(([response]) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/rand1", (req, res) => {
  connection
    .query("SELECT pokemons.index FROM pokemons ORDER BY RAND() LIMIT 1")
    .then(([response]) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = router;
