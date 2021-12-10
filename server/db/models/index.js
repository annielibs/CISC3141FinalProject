const User = require('./users');
const Entries = require('./entries');
const Diaries = require('./diaries');

User.hasMany(Diaries);
Diaries.belongsTo(User);
Diaries.hasMany(Entries, { onDelete: 'cascade', hooks:true });
Entries.belongsTo(Diaries,{ onDelete: 'cascade', hooks:true });

module.exports = {User, Entries, Diaries};