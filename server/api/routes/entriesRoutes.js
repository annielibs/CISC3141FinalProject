const express = require('express');
const { getAllEntries,getEntriesByDiary, createEntry, updateEntry, deleteEntry} = require('../controllers/entryController');
const entryRouter = express.Router();

entryRouter.get('/', getAllEntries);
entryRouter.get('/:diaryId', getEntriesByDiary)
entryRouter.post('/create-entry', createEntry);
entryRouter.patch('/update-entry/:entryId', updateEntry);
entryRouter.delete('/delete-entry/:entryId', deleteEntry);
module.exports = entryRouter;