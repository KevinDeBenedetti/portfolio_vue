// formRoutes.js
const express = require('express');
const router = express.Router();
const reCaptchaMiddleware = require('../middlewares/reCaptcha');
const formValidation = require('../middlewares/formValidation');
const formController = require('../controllers/form');

router.post('/send-email', reCaptchaMiddleware, formValidation, formController.sendForm);

module.exports = router;
