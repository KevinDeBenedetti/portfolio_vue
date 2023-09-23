require('dotenv').config();

const axios = require('axios');

const logger = require('../winstonConfig');

const reCaptchaMiddleware = async (req, res, next) => {

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
        const response = JSON.stringify(recaptchaResponse.data, null, 2);

        logger.info('Response' + response);

/*        logger.info('Success: ' + success);
        logger.info('Score: ' + score);*/

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