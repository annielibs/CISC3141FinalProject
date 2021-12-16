const Users = require('./users');
const Entries = require('./entries');
const Diaries = require('./diaries');

Users.hasMany(Diaries);
Diaries.belongsTo(Users);
Diaries.hasMany(Entries, { onDelete: 'cascade', hooks:true });
Entries.belongsTo(Diaries,{ onDelete: 'cascade', hooks:true });

module.exports = {Users, Entries, Diaries};