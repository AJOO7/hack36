const accountSid = 'AC51cdfd9771ee82e19018772130b27211';
// const authToken = 'a9720b54c594c9d92b87666743e8e025';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'testing twilio',
        from: '+12517583696',
        to: '+918295308183'
    })
    .then(message => console.log(message.sid));