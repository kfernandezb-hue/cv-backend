const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  empresa: { type: String, required: true },
  cargo: { type: String, required: true },
  periodo: { type: String, required: true },
  descripcion: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Experience', ExperienceSchema);