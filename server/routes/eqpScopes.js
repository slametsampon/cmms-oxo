const express = require('express');
const router = express.Router();
const eqpScopes = require('../services/eqpScopes');
const { Pool } = require('pg');
const config = require('../config');
const pool = new Pool(config.db);


/* GET eqpScopes listing. */
/*
router.get("/", async function(req, res, next) {
  try {
    res.json(await eqpScopes.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting eqpScopes `, err.message);
    next(err);
  }
});
*/
router.get("/", async (req, res) => {
  try {
    const { id } = req.params;
    const eqpScope = await pool.query("SELECT * FROM EqpScope");

    res.json(eqpScope.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//create a EqpScope
router.post("/", async (req, res) => {
  try {
    const { scope } = req.body;
    const newEqpScope = await pool.query(
      "INSERT INTO EqpScope (scope) VALUES($1) RETURNING *",
      [scope]
    );

    res.json(newEqpScope.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get a EqpScope
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const eqpScope = await pool.query("SELECT * FROM EqpScope WHERE id = $1", [
      id
    ]);

    res.json(eqpScope.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a EqpScope
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { scope } = req.body;
    const updateEqpCat = await pool.query(
      "UPDATE EqpScope SET scope = $1 WHERE id = $2",
      [scope, id]
    );

    res.json("EqpCat was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a EqpScope

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteEqpCat = await pool.query("DELETE FROM EqpScope WHERE id = $1", [
      id
    ]);
    res.json("EqpCat was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;