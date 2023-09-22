require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

// Configuration de Morgan pour enregistrer les logs dans un fichier
const fs = require('fs');
const path = require('path');
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

// Exportez le logger pour qu'il soit accessible dans d'autres fichiers
module.exports = logger;

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