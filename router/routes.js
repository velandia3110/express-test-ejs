const express = require('express')
const router = express.Router()


router.get("/", (req,res) => {
    res.render("index",{titulo:"mi titulo dinámico"})
})

router.get("/services", (req, res) => {
    res.render("services",{tituloServicios:"Este es un mensaje de service"})
})

module.exports = router