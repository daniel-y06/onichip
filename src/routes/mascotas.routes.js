const express = require('express');
const router = express.Router();

const mascotasController = require('../controllers/mascotas.controllers');

// Mascotas CRUD
router.get('/mascotas', mascotasController.getMascotas);
router.get('/mascotas/:id', mascotasController.getMascota);
router.post('/mascotas', mascotasController.addMascota);
router.put('/mascotas/:id', mascotasController.editMascota);
router.delete('/mascotas/:id', mascotasController.deleteMascota);

// Ruta de prueba
router.get('/', (req, res) => {
  res.send('Bienvenido al rastreo de mascotas y signos vitales');
});

module.exports = router;
