const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "ce411bf1",
  apiSecret: "ClqbTDxRZ6lx85VE"
})

const from = "NodeJS SMS";
const to = "00000000000"; //num de telefone
const text = 'Mensagem para ser enviada';

async function sendSMS() {
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}

module.exports = {sendSMS};