const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

// 1. Obtener todas las experiencias
router.get('/', async (req, res) => {
  try {
    const experiencias = await Experience.find();
    res.json(experiencias);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. Crear una nueva experiencia
router.post('/', async (req, res) => {
  const { empresa, cargo, periodo, descripcion } = req.body;
  const nuevaExp = new Experience({ empresa, cargo, periodo, descripcion });
  try {
    const guardado = await nuevaExp.save();
    res.status(201).json(guardado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 3. Actualizar una experiencia
router.put('/:id', async (req, res) => {
  try {
    const actualizada = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(actualizada);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 4. Eliminar una experiencia
router.delete('/:id', async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.json({ message: 'Experiencia eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;