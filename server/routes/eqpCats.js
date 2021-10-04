const express = require('express');
const router = express.Router();
const eqpCats = require('../services/eqpCats');
const { Pool } = require('pg');
const config = require('../config');
const pool = new Pool(config.db);


/* GET eqpCats listing. */
/*
router.get("/", async function(req, res, next) {
  try {
    res.json(await eqpCats.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting eqpCats `, err.message);
    next(err);
  }
});
*/
router.get("/", async (req, res) => {
  try {
    const { id } = req.params;
    const eqpCat = await pool.query("SELECT category FROM Eqp_Cat");

    res.json(eqpCat.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//create a Eqp_Cat
router.post("/", async (req, res) => {
  try {
    const { category } = req.body;
    const newEqp_Cat = await pool.query(
      "INSERT INTO Eqp_Cat (category) VALUES($1) RETURNING *",
      [category]
    );

    res.json(newEqp_Cat.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get a Eqp_Cat
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const eqpCat = await pool.query("SELECT * FROM Eqp_Cat WHERE id = $1", [
      id
    ]);

    res.json(eqpCat.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a Eqp_Cat
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { category } = req.body;
    const updateEqpCat = await pool.query(
      "UPDATE Eqp_Cat SET category = $1 WHERE id = $2",
      [category, id]
    );

    res.json("EqpCat was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a Eqp_Cat

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteEqpCat = await pool.query("DELETE FROM Eqp_Cat WHERE id = $1", [
      id
    ]);
    res.json("EqpCat was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;