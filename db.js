const mongoose = require ('mongoose')
const URIDB = 'mongodb://localhost:27017/equipos'

module.exports=()=>{
    const conn = () => {
        mongoose.connect(
            URIDB,
            {
                keepAlive : true,
                useNewUrlParser : true,
                useUnifiedTopology : true

            },
            (err) =>{
                if (err){
                    console.log("error conect:" + err)
                }else{
                    console.log("Conexion Satisfactoria")
                }
            }
        
        )
        
    }
    conn()
}