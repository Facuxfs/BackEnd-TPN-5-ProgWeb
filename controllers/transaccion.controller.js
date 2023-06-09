const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}

//recuperar todas las transacciones registradas
transaccionCtrl.getTransacciones = async (req, res) => {
var transacciones = ((await Transaccion.find()));
res.json(transacciones);
}

//recuperar el historico de transacciones de un determinado cliente
transaccionCtrl.getTransaccionesCliente = async (req, res) => {
    let email = req.params.email;
    var transacciones = ((await Transaccion.find({emailCliente:email})));
    res.json(transacciones);
    }

//dar de alta una transaccion
transaccionCtrl.createTransaccion = async (req, res) => {
var transaccion = new Transaccion(req.body);
try {
await transaccion.save();
res.json({
'status': '1',
'msg': 'transaccion guardado.'})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando operacion.'})
}
}

//Recuperar TODAS las Transacciones origen y destino las divisas (monedas) recibidas comoparámetro 
transaccionCtrl.getTransaccionDivisas = async (req, res) => {
    let criteria = {};
    if ((req.query.monedaOrigen != null) && (req.query.monedaOrigen != "") && (req.query.monedaDestino != null) && (req.query.monedaDestino != "")) {
        criteria.monedaOrigen = req.query.monedaOrigen;
        criteria.monedaDestino = req.query.monedaDestino;
    }
    var transacciones = await Transaccion.find(criteria);
    res.json(transacciones);
}

module.exports = transaccionCtrl;
