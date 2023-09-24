require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const history = require('connect-history-api-fallback');
const cors = require("cors");

const formRoutes = require('./backend/routes/formRoutes');
const morganConfig = require("./backend/morganConfig");
const bodyParser = require('body-parser');

const path = require("path");
const app = express();
const logger = require("./backend/winstonConfig");

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Allow cors
app.use(cors());

// Use history
app.use(history());

// Link frontend
app.use(express.static(path.join(__dirname, 'frontend/dist')));

// Utilisation de Morgan pour enregistrer les logs d'accès HTTP
app.use(morgan(morganConfig.morganFormat, { stream: morganConfig.accessLogStream }));

// Endpoint to manage form submission
app.use('/api', formRoutes);

// Verify environment
const apiUrl = process.env.NODE_ENV === 'production'
    ? 'https://portfolio.kevindb.dev'
    : 'http://localhost:3000';
app.get('/api/environment', (req, res) => {
    res.json({ apiUrl });
})

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
})