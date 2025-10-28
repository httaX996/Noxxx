const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "nZkUwTra#zIp5xyjyTdoZRSPkYicYGzzEF5IlpRBUPxWr0v3fOA0",
MONGODB : process.env.MONGODB || "mongodb+srv://shiva:shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",
}"
