const User = require('./users');
const Entries = require('./entries');
const Diaries = require('./diaries');

User.hasMany(Diaries);
Diaries.belongsTo(User);
Diaries.hasMany(Entries);
Entries.belongsTo(Diaries);

module.exports = {User, Entries, Diaries};