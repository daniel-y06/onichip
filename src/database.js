const mongoose = require('mongoose');
mongoose.set('strictQuery', false); // Para evitar advertencias de Mongoose


const URI = 'mongodb+srv://danielyug:leinad2003@cluster0.mqsi2ll.mongodb.net/'
mongoose.connect(URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Error de conexión a MongoDB:', err));

module.exports = mongoose;