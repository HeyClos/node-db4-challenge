const express = require('express');
const Recipes = require('./recipes-model')

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({error: 'error 500 getting recipes'})
        })
})

module.exports = router