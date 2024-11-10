const dotenv = require('dotenv');
dotenv.config();

module.exports={
    PORT: process.env.PORT,
    EMAIL_ID : process.env.EAMIL_ID,
    EMAIL_PASS: process.env.EMAIL_PASS
} 