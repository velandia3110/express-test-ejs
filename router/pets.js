const express = require('express')
const router = express.Router()

const Pet = require('../models/pet')

router.get('/', async (req, res) =>{
    try{
        const petsArray = await Pet.find({})
        console.log(petsArray)

        res.render("pets", {
            petArray: petsArray
        })
    }catch(err){
        console.error(err)
    }
    
    
})

module.exports = router