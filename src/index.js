const express = require('express');
const mongoose = require('mongoose');
const { config } = require('dotenv');
const bodyParser = require('body-parser');

config(); // Cargar variables de entorno

const bookRoutes = require('./routes/book.routs');

const app = express();
app.use(bodyParser.json()); // Middleware para parsear JSON

// Conectar a la base de datos
mongoose.connect(process.env.MONGO_URL, {
    dbName: process.env.MONGO_DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(' Conectado a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB:', err));

const db = mongoose.connection;

// Manejar eventos de error en la conexión
db.on('error', err => console.error('Error de conexión a MongoDB:', err));

app.use('/books', bookRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});
