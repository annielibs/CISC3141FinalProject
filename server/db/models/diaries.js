const Sequelize = require('sequelize');
const db = require('../db');

const Diaries = db.define('diaries', {
    diary_name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    diary_creation_date:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
    }
});
module.exports = Diaries;