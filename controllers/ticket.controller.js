const Ticket = require('../models/ticket');
const ticketCtrl = {}
//get todos los tickets 
ticketCtrl.getTickets = async (req, res) => {
    var  tickets = ((await Ticket.find()));
    res.json(tickets);
    }

    //recuperar tickets por categoria
ticketCtrl.getTicketsCategoria = async (req, res) => {
    let criteria = {};
    if ((req.query.categoriaEspectador != null) && (req.query.categoriaEspectador != "")) {
        criteria.categoriaEspectador = req.query.categoriaEspectador;
    }
    var tickets = await Ticket.find(criteria).populate("espectador");
    res.json(tickets);
}

ticketCtrl.getTicket = async (req, res) => {
        const ticket = await Ticket.findById(req.params.id).populate("espectador");
        res.json(ticket);
        }
        
//ALTA DE TICKET
ticketCtrl.createTicket = async (req, res) => {
        var ticket = new Ticket(req.body);
        try {
        await ticket.save();
        res.json({
        'status': '1',
        'msg': 'Ticket guardado.'})
        } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando operacion.'})
        }
        }
//eliminar un ticket
ticketCtrl.deleteTicket = async (req, res) => {
    try {
        await Ticket.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Ticket removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

//modificar un ticket
ticketCtrl.editTicket = async (req, res) => {
    const vticket = new Ticket(req.body);
    try {
    await Ticket.updateOne({_id: req.body._id}, vticket);
    res.json({
    'status': '1',
    'msg': 'Ticekt Modificado'
    })
    } catch (error) {
    res.status(400).json({
    'status': '0',
    'msg': 'Error procesando la operacion'
    })
    }
}

module.exports = ticketCtrl ;