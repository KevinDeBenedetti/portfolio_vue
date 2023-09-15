require('dotenv').config();

const express = require('express');

const cors = require("cors");
const bodyParser = require('body-parser');
const path = require("path");

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

// Endpoint to manage form submission
app.post('/send-email', reCaptchaMiddleware, formValidation, formController.sendForm);

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
})