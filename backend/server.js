const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./confi/db')
const errorHandler = require('./middleware/errorMiddleware');

connectDB()
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/api/tareas', require('./routes/tareasRoutes'));
app.use(errorHandler);
app.listen(port, () => console.log(`servidor en puerto ${port}`));
