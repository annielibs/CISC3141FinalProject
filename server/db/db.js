const Sequelize = require("sequelize");
require("dotenv").config(); // requries dotenv
// for process.env.DATABASE_PASS either out password here it make an .env file and place password there/

const db = new Sequelize(
    "postgres://rnbkflhwmjywyg:800fdaf427eb957861fb10bdcca65f205530e216d3a2dc48578e50f5153bfce8@ec2-3-214-136-47.compute-1.amazonaws.com:5432/d8jbh2eethe4io",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    }
);

// const db = new Sequelize(
//     process.env.DATABASE_NAME,
//     process.env.DATABASE_USER,
//     process.env.DATABASE_PASS,
//     {
//         host: "localhost",
//         dialect: "postgres",
//     }
// );

module.exports = db;
