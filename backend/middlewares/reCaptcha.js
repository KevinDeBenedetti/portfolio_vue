const axios = require('axios');
const { response } = require('express');
const logger = require('../../app');
require('dotenv').config();

const reCaptchaMiddleware = async (req, res, next) => {

    logger.info("reCaptcha, log test");

    const recaptchaToken = req.body.recaptchaToken;

    try {
        const recaptchaResponse = await axios.post(
            'https://www.google.com/recaptcha/api/siteverify',
            null,
            {
                params: {
                    secret: process.env.SECRET_KEY,
                    response: recaptchaToken
                }
            }
        );

        const { success, score } = recaptchaResponse.data;
        logger.info(recaptchaResponse.data);
        console.log('Success: ' + success);
        logger.info('Success: ' + success);
        console.log('Score: ' + score);
        logger.info('Score: ' + score);

        if (success && score >= 0.5) {
            logger.info('reCaptcha validé avec succès.');
            res.json({ success: true, message: 'reCaptcha validé avec succès.' });
            next();
        } else {
            logger.info('Échec de la validation reCaptcha.');
            res.json({ success: false, message: 'Échec de la validation reCaptcha.' });
        }

    } catch (error) {
        console.error('Erreur lors de la vérification de reCaptcha :', error);

        logger.error('Erreur lors de la vérification de reCaptcha :', error);

        res.status(500).json({ success: false, message: 'Erreur serveur.' });
    }
}

module.exports = reCaptchaMiddleware;