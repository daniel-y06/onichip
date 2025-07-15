const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MascotaSchema = new Schema({
    
    nombre: { type: String, required: true },
    especie: { type: String, required: true },
    raza: { type: String },
    edad: { type: Number },
    propietario: { type: String, required: true },
    signosVitales: [{
        tipo: { type: String, required: true },
        valor: { type: Number, required: true },
        fecha: { type: Date, default: Date.now }
    }]
});

module.exports = mongoose.model('Mascota', MascotaSchema);
