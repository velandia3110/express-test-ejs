const express = require('express')
const app = express()

const port = 3000


//motor de plantillas
app.set('view engine', 'ejs')
app.set('views',__dirname+'/views')


//middleware - funcion antes de petición (get,post,put,delete)
app.use(express.static(__dirname + "/public"))


app.get("/", (req,res) => {
    res.render("index",{titulo:"mi titulo dinámico"})
})

app.get("/services", (req, res) => {
    res.render("services",{tituloServicios:"Este es un mensaje de service"})
})

app.use((req, res, next) =>{
    res.status(404).render("404")
})


app.listen(port, () =>{
    console.log(`Server is running on port http://localhost:${port}`)
})