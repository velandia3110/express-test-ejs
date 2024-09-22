const express = require('express')
const router = express.Router()

const Pet = require('../models/pet')

router.get('/', async (req, res) =>{
    try{
        const petsArray = await Pet.find()
        console.log(petsArray)

        res.render("pets", {
            petArray: petsArray
        })
    }catch(err){
        console.error(err)
    }
    
    
})

router.get('/create', (req, res) => {
    res.render("create")
})

router.post('/', async (req, res) => {
    const body = req.body
    try{
        await Pet.create(body)
        res.redirect('/pets')
    }catch(err){
        console.error(err)  
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try{
        const petDB = await Pet.findOne({_id: id})
        res.render("detail", {
            pet: petDB,
            error: false
        })

    } catch(err){
        console.error(err)
        res.render("detail", {
            error: true,
            message: "No se encuentra el id deseado"
        })
    } 
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try{
        petDB = await Pet.findByIdAndDelete({_id: id})
        if(petDB){
            res.json({
                state: true,
                message: 'Eliminado'
            })
        }else{
            res.json({
                state: false,
                message: 'Fallo al eliminar'
            })
        }
    }catch(err){
        console.error(err)
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const body = req.body
    try{
        const petDB = await Pet.findByIdAndUpdate(
            id,
            body,
            {userFindAnnModify:false}
        )
        res.json({
            state: true,
            message: 'Actualizado'
        })
    }catch(err){
        console.error(err)
        res.json({
            state: false,
            message: 'Falla al actualizar'
        })
    }
})

module.exports = router