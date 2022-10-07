const express = require ('express')
const router = express.Router()
const EquiposCtrl = require('../controllers/EquiposCtrl')


router.get('/', function (req,res){
    res.send(EquiposCtrl.equipoListar())

})
router.get('/:id', EquiposCtrl.equipoObtener)

router.post('/', EquiposCtrl.equipoGuardar)

router.put('/', EquiposCtrl.equipoActualizar)

router.delete('/:id', EquiposCtrl.equipoEliminar)

module.exports = router