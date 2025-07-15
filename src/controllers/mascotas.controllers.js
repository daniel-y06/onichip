const Mascota = require('../models/mascota');
const mascotasController = {};

// GET todas las mascotas
mascotasController.getMascotas = async (req, res) => {
    const mascotas = await Mascota.find();
    res.json(mascotas);
};

// GET mascota por ID
mascotasController.getMascota = async (req, res) => {
    const mascota = await Mascota.findById(req.params.id);
    res.json(mascota);
};

// POST nueva mascota
mascotasController.addMascota = async (req, res) => {
    const mascota = new Mascota(req.body);
    await mascota.save();
    res.json('Mascota agregada exitosamente');
};

// PUT actualizar mascota
mascotasController.editMascota = async (req, res) => {
    const { id } = req.params;
    await Mascota.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.json('Mascota actualizada exitosamente');
};

// DELETE eliminar mascota
mascotasController.deleteMascota = async (req, res) => {
    await Mascota.findByIdAndDelete(req.params.id);
    res.json('Mascota eliminada exitosamente');
};

module.exports = mascotasController;
