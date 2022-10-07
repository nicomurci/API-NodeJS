const mongoose = require ('mongoose')

const EquipoSchema = mongoose.Schema(
    {
        nombre:{
            type : String,
            required : true,
            trim : true
        },
        creado : {
            type : Date,
            default : Date.now()
        }

    }

)
module.exports = mongoose.model ("equipo",EquipoSchema)