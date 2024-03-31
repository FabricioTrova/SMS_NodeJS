const { Router } = require('express');
const { sendSMS } = require('./services/send-sms');

const routes = Router();

routes.get("/health", (req, res) => {
    return res.status(200).json({message: "Server is on!"});
});

routes.post("/send-sms", async (req, res) => {
    try {
        await sendSMS();
        return res.status(200).json({message: "SMS enviado com sucesso!"});
    } catch(e) {
        return res.status(400).json({message: "Falha... SMS não enviado!"});
    }
})

module.exports = routes;