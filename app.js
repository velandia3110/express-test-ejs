const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



require('dotenv').config()

const port = process.env.PORT || 3000

//conexion a BD
const mongoose = require('mongoose')

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@veterinaria.tmhur.mongodb.net/${process.env.BDNAME}?retryWrites=true&w=majority&appName=veterinaria`

mongoose.connect(uri,
)
.then(() => console.log("BD connected"))
.catch(err => console.error(err))




//motor de plantillas
app.set('view engine', 'ejs')
app.set('views',__dirname+'/views')


//middleware - funcion antes de petición (get,post,put,delete)
app.use(express.static(__dirname + "/public"))


app.use('/',require('./router/routes'))
app.use('/pets',require('./router/pets'))


app.use((req, res, next) =>{
    res.status(404).render("404")
})


app.listen(port, () =>{
    console.log(`Server is running on port http://localhost:${port}`)
})