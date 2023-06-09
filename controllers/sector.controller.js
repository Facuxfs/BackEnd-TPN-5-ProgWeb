const Sector = require('../models/sector');
const sectorCtrl = {}

sectorCtrl.getSectores = async (req, res) => {
    var sectores = await Sector.find().populate("responsable");
    res.json(sectores);
    }

sectorCtrl.createSector = async (req, res) => {
        var sector = new Sector(req.body);
        try {
        await sector.save();
        res.json({
        'status': '1',
        'msg': 'Sector guardado.'})
        } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando operacion.'})
        }
        }

module.exports = sectorCtrl ;