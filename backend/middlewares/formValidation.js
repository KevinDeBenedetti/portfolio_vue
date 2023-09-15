const { body, validationResult } = require('express-validator');

/* Validate inputs in the contact form */

const newForm = [
    body('lastName')
        .isString().notEmpty()
        .withMessage("Il manque le nom"),
    body('firstName')
        .isString().notEmpty()
        .withMessage("Le Prénom est obligatoire"),
    body('email')
        .trim()
        .isEmail()
        .withMessage('L\'email est invalide')
        .normalizeEmail(),
    body('message')
        .notEmpty()
        .withMessage('Le message est obligatoire')
];

module.exports = [
    newForm,
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }
];

