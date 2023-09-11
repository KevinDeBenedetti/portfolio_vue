const nodemailer = require('nodemailer');

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    host: process.env.HOST_EMAIL,
    port: process.env.PORT_EMAIL,
    secure: 'true',
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASS_EMAIL
    }
});

exports.sendForm = (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    // Email configuration
    const mailOptions = {
        from: process.env.USER_EMAIL,
        to: process.env.RECIPIENT,
        subject: 'Nouveau message du formulaire portfolio kevin.dev',
        /*text: `Nom: ${lastName}, Prénom: ${firstName}, Email: ${email}, Message: ${message}`,*/
        html:`
            <h1>Nouveau message de ${firstName} ${lastName}</h1>
            <p>Pour contacter ${firstName} ${lastName} :</p>
            <ul>
                <li>Email : ${email}</li>
                <li>Téléphone : INPUT téléphone à ajouter</li>
            </ul>
            
            <p>Voici le message reçu : ${message}</p>
        `
    }

    // Send Email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Erreur lors de l\'envoi du message.')
        } else {
            console.log('Message envoyé : ' + info.response);
            res.status(200).send('Message envoyé avec succès.')
        }
    })
}