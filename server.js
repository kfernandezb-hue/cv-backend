const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/experiencias', require('./routes/experienceRoutes'));

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/hoja_de_vida')
  .then(() => {
    console.log('✅ Conectado exitosamente a MongoDB');
    app.listen(PORT, () => console.log(`🚀 Servidor ejecutándose en el puerto ${PORT}`));
  })
  .catch(err => console.error('❌ Error al conectar a MongoDB:', err));