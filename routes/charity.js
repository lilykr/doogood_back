const router = require("express").Router();
const connection = require("../db.js");

router.get('/', async (req, res) => {
    try {
        const results = await connection.query(
            `SELECT charity.name,
            charity.address,
            charity.email,
            charity.telephone,
            charity.image,
            charity.description,
            charity.website,
            category.name, 
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

module.exports = router