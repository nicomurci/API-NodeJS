const express = require ('express')
const app = express ()
const puerto = 3000
const db = require ('./config/db')


//rutas
app.use(express.json())
app.use('/api/Equipo', require('./routes/EquiposRoute'))

app.listen(puerto , ()=>{
    console.log("Servidor activo, puerto: " + puerto)
})
db()