//ENRUTADOR

const express = require('express')
const router = express.Router()
const categoriasCtrl = require ('../controllers/categoriasCtrl')

//VERBO GET
router.get('/', function (req,res){
    res.send(categoriasCtrl.categoriaListar())
})

//VERBO OBTENER
router.get('/:id', categoriasCtrl.categoriaObtener)

//VERBO POST -> Enviar un objeto para almacenarlo
router.post('/', categoriasCtrl.categoriaGuardar)

//VERBO ACTUALIZAR
router.put('/', categoriasCtrl.categoriaActualizar)

//VERBO ELIMINAR
router.delete('/:id', categoriasCtrl.categoriaEliminar)


module.exports = router