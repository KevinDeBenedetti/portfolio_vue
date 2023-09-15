require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

// Configuration de Morgan pour enregistrer les logs dans un fichier
const fs = require('fs');
const path = require('path');
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const formValidation = require('./backend/middlewares/formValidation');
const formController = require('./backend/controllers/form');
const axios = require("axios");
const {response} = require("express");
const reCaptchaMiddleware = require("./backend/middlewares/reCaptcha");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Allow cors
app.use(cors());

// Link frontend
app.use(express.static(path.join(__dirname, 'frontend/dist')));

// Utilisation de Morgan pour enregistrer les logs d'accès HTTP
app.use(morgan('combined', { stream: accessLogStream }));

// Endpoint to manage form submission
app.post('/send-email', reCaptchaMiddleware, formValidation, formController.sendForm);

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
})