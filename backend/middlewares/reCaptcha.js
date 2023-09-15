const axios = require('axios');
const { response } = require('express');
require('dotenv').config();

const reCaptchaMiddleware = async (req, res, next) => {
    const recaptchaToken = req.body.recaptchaToken;

    console.log('recaptchaToken: ' + recaptchaToken);
    /*    console.log('Secret key: ' + process.env.SECRET_KEY);*/

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

        /*        console.log(recaptchaResponse.data);*/
        console.log('Success: ' + success);
        console.log('Score: ' + score);

        if (success && score >= 0.5) {
            res.json({ success: true, message: 'reCaptcha validé avec succès.' });
            next();
        } else {
            res.json({ success: false, message: 'Échec de la validation reCaptcha.' });
        }

    } catch (error) {
        console.error('Erreur lors de la vérification de reCaptcha :', error);
        res.status(500).json({ success: false, message: 'Erreur serveur.' });
    }
}

module.exports = reCaptchaMiddleware;