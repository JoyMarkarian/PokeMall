const express = require("express");
const pokemons = require("./data/pokemons");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

router.get("/hello", (req, res) => {
  res.send("hello you");
});

router.get("/pokemons", (req, res) => {
  res.send(pokemons);
});

module.exports = router;

module.exports = router;
