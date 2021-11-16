const Sequelize = require('sequelize');
const db = require('../db');

const Entries = db.create('entries', {
    entry_creation_date:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
    },
    entry_text:{
        type: Sequelize.STRING(10000)
    },
    entry_img:{
        type: Sequelize.STRING,
        defaultValue:'.../assets/camera.png'
    }
});

module.exports = Entries;