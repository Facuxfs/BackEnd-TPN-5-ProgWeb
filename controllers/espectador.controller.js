const espectador = require('../models/espectador');
const Espectador = require('../models/espectador');
const espectadorCtrl = {}

espectadorCtrl.getEspectadores = async (req, res) => {
var espectadores = ((await Espectador.find()));
res.json(espectadores);
}

espectadorCtrl.getEspectador = async (req, res) => {
    const espectador = await Espectador.findById(req.params.id);
    res.json(espectador);
    }

espectadorCtrl.createEspectador = async (req, res) => {
var espectador = new Espectador(req.body);
try {
await espectador.save();
res.json({
'status': '1',
'msg': 'espectador guardado.'})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando operacion.'})
}
}

module.exports = espectadorCtrl;
