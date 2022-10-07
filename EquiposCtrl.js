const equipoModel = require ('../models/EquiposScheme')

const equipoListar = ()=>{
    listado = {
        "1" : "Colombia",
        "2" : "Esapaña",
        "3" : "Brazil"

    }
    return listado
}

const equipoGuardar = async (req,res) =>{

    console.log(req.body)
   const nombre = req.body.nombre
   let mensaje = {}
   if(nombre ==''){
     mensaje = { "msj" : "Equipo no Valido"}
     res.status(400).json(mensaje)
   }else{
       try{
        const equipo = new equipoModel(req.body)
        equipo.save()
        mensaje ={
            "msj" : "evento almacenado con exito"
           }
           res.status(200).json(mensaje)
       }catch(error){  
        console.log("error equipo Guardar:" + err)

       }
       
   }
    
 }  
 
 const equipoObtener = async (req,res) =>{ 
    const id = req.params.id
    console.log("id solicitado:" + id)
    let categoria
    if(id==1){
        //futbol
        categoria={
            "1" : "Ecuador"
        }
    }
    if (id==2){
        categoria={
            "2" : "Peru"
        }

    }
    res.status(200).json(equipo)

}

const equipoActualizar = async(req,res) =>{
    console.log("put")
    console.log(req.body)
    const { id, nombre } = req.body
    try{
        if(id==''){
            res.status(400).json({"msj": "error: Id vacio"})
        }
        if(nombre != ''){
            res.status(200).json({"msj": "Equipo Actualizado con Exito"})
        }else{
            res.status(400).json({"msj" : "Equipo No Valida"})
        }



 



    }catch(erro){
        console.log(error)
        res.status(400).json ({"msj" : "error" + error})
    }
}

const equipoEliminar = async (req,res) => {
    console.log("id a eliminar" + req.params.id)
    const id = req.params.id
    try{
        if(id == ''){
            res.status(400).json({"msj" : "Id No Valido"}) 
        }

         res.status(200).json({"msj" : "categoria Eliminada Con Exito"})
    }catch(eroor){
        console.log(error)
        res.status(400).json({"msj" : "Error eliminando el equipo"})
    }
}

module.exports = {
    equipoListar, 
    equipoGuardar,
    equipoObtener,
    equipoActualizar,
    equipoEliminar
}