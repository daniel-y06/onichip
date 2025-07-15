const express = require('express')
const app = express()
const port = 3000
const morgan=require('morgan'); 
const mongoose = require('./src/database');

// Middleware para manejar el cuerpo de las solicitudes

app.use(morgan('dev'));

app.use(express.static('public')); // Servir archivos estáticos desde la carpeta 'public' 
    
// Middleware para manejar el cuerpo de las solicitudes
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Rutas de mascotas
app.use(require('./src/routes/mascotas.routes'));
// Rutas de usuarios
app.use(require('./src/routes/usuarios.routes'));

function logger(req,res,next){
 console.log('Ruta Recibida '+ req.protocol+'://'+req.get('host')+ req.originalUrl);
 next();
}

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});