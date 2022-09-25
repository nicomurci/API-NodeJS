//CONTROLADORES
const categoriaListar = ()=>{
    listado = {
        "1" : "futbol",
        "2" : "natacion",
        "3" : "baloncesto",
    }
    return listado
}

const categoriaGuardar = async (req, res) => { //Metodo asincrono
    console.log(req.body) //Imprimir lo que se esta recibiendo por una peticion en consola
    const nombre = req.body.nombre
    let mensaje = {}

    if(nombre == ''){
        mensaje = {'msj' : "Categoria No Valida"}
        res.status(400).json(mensaje)
    }else{
        mensaje = {"msj" : "Categoria Almacenada con exito"}
        res.status(200).json(mensaje) // si todo quedó bien, se da una respuesta
    }
}

const categoriaObtener = async (req, res) => {
    const id = req.params.id
    console.log("id solicitado: " + id)
    let categoria
    if(id==1){
        //Futbol
        categoria = {
            "1" : "Futbol"
        }
    }
    if(id==2){
        categoria = {
            "2" : "Baloncesto"
        }
    }
    res.status(200).json(categoria)
}

const categoriaActualizar = async (req, res) => {
    console.log("put:")
    console.log(req.body)
    const {id, nombre} = req.body
    try{
        if(id == ''){
            res.status(400).json({"msj" : "Error: Id Vacio"})
        }
        if(nombre!=''){
            res.status(200).json({"msj" : "Categoria actualizada con exito"})
        }
        else{
            res.status(400).json({"msj" : "Categoria no valida"})
        }
    }catch(error){
        console.log(error)
        res.status(400).json({"msj" : "Error" + error})
    }
}

const categoriaEliminar = async (req, res) => {
    console.log("id a eliminar" + req.params.id)
    const id = req.params.id
    try{
        if(id == 0){
            res.status(400).json({"msj" : "Id no valido"})
        }
        res.status(200).json({"msj" : "Categoria eliminado con exito"})


    }catch(error){
        console.log(error)
        res.status(400).json({"msj" : "Error eliminando la Categoria"})
    }

}

module.exports = {  //Enrutador de categorias
    categoriaListar,
    categoriaGuardar,
    categoriaObtener,
    categoriaActualizar,
    categoriaEliminar
}