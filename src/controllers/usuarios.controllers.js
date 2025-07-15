const Usuario = require('../models/usuario');
const usuariosController = {};

// GET todos los usuarios
usuariosController.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find().populate('mascotas');
    res.json(usuarios);
};

// GET usuario por ID
usuariosController.getUsuario = async (req, res) => {
    const usuario = await Usuario.findById(req.params.id).populate('mascotas');
    res.json(usuario);
};

// POST nuevo usuario
usuariosController.addUsuario = async (req, res) => {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.json('Usuario agregado exitosamente');
};

// PUT actualizar usuario
usuariosController.editUsuario = async (req, res) => {
    const { id } = req.params;
    await Usuario.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.json('Usuario actualizado exitosamente');
};

// DELETE eliminar usuario
usuariosController.deleteUsuario = async (req, res) => {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json('Usuario eliminado exitosamente');
};

module.exports = usuariosController;
