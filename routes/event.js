const router = require("express").Router();
const connection = require("../db.js");

router.get('/', async (req, res) => {
    try {
        const results = await connection.query(
            `SELECT event.*,
            charity.id AS charity_id,
            charity.name AS charity_name 
            FROM event
            JOIN charity ON event.charity_id=charity.id`);
        res.status(200).json(results);
    }
    catch (error) {
        console.log(error.message)
        res.status(400)
    }

})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const results = await connection.query(
            `SELECT event.*,
            charity.id AS charity_id,
            charity.name AS charity_name 
            FROM event
            JOIN charity ON event.charity_id=charity.id
            WHERE charity_id=?
            `, [id]
        )
        res.status(200).json(results)

    }
    catch (error) {
        console.log(error.message)
        res.status(400)
    }

})

module.exports = router