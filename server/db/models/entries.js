const Sequelize = require('sequelize');
const db = require('../db');

const Entries = db.define('entries', {
    entry_text:{
        type: Sequelize.STRING(10000)
    },
    entry_img:{
        type: Sequelize.STRING,
        defaultValue:'.../assets/camera.png'
    }
});

module.exports = Entries;