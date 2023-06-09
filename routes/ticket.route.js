//defino controlador para el manejo de CRUD
const ticketCtrl = require('./../controllers/ticket.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/categoria/', ticketCtrl.getTicketsCategoria);
router.get('/', ticketCtrl.getTickets);
router.post('/', ticketCtrl.createTicket);
router.put('/:id', ticketCtrl.editTicket);
router.delete('/:id', ticketCtrl.deleteTicket);
router.get('/:id', ticketCtrl.getTicket);
//exportamos el modulo de rutas
module.exports = router;
