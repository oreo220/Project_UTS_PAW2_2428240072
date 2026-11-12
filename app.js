require('dotenv').config();

const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
const express = require('express');
const cors = require('cors');

const logger = require('./middlewares/logger');
const { notFoundHandler, errorHandler } = require('./middlewares/errorHandler');

const app = express();

app.use(logger);

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST']
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'RESTful API Pusat Kebugaran'
    });
});

// Routes akan dipasang pada tahap berikutnya.

app.use(notFoundHandler);
app.use(errorHandler);
mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log('Terhubung ke MongoDB');
    app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('Gagal terhubung:', err.message);
    process.exit(1);
  });
module.exports = app;