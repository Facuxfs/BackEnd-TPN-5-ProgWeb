const mongoose = require ('mongoose');
const {Schema} = mongoose;
const TransaccionSchema = new Schema({
monedaOrigen: {type: String, required: true},
cantidadOrigen: {type: String, required: true},
monedaDestino: {type: String, required: true},
cantidadDestino: {type: String, required: true},
emailCliente: {type: String, required: true},
//tasaConversion: {type: Number, required: true},
})
module.exports = mongoose.models.Transaccion || mongoose.model('Transaccion', TransaccionSchema);