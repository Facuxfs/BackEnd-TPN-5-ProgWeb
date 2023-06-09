//defino controlador para el manejo de CRUD
const sectorCtrl = require('./../controllers/sector.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/', sectorCtrl.getSectores);
router.post('/', sectorCtrl.createSector);

//exportamos el modulo de rutas
module.exports = router;
