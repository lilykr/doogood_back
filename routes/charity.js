const router = require("express").Router();
const connection = require("../db.js");

router.get('/', async (req, res) => {
    try {
        const results = await connection.query(
            `SELECT charity.name AS charity_name,
            charity.id AS charity_id,
            charity.image,
            charity.description,
            category.id AS category_id,
            category.name AS category_name, 
            category.logo
            FROM charity  
            JOIN charity_has_category AS charHasCat 
            ON charity.id=charHasCat.charity_id 
            JOIN category 
            ON category.id=charHasCat.category_id`);
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
            `SELECT charity.name AS charity_name,
            charity.id AS charity_id,
            charity.address,
            charity.email,
            charity.telephone,
            charity.image,
            charity.description,
            category.id AS category_id,
            charity.website,
            category.name AS category_name, 
            category.logo
            FROM charity  
            JOIN charity_has_category AS charHasCat 
            ON charity.id=charHasCat.charity_id 
            JOIN category 
            ON category.id=charHasCat.category_id
            WHERE charity.id = ?`, [id]
        )
        res.status(200).json(results)

    }
    catch (error) {
        console.log(error.message)
        res.status(400)
    }

})

module.exports = router