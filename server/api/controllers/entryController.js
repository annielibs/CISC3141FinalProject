const Entries = require('../../db/models/entries');
const Diaries = require('../../db/models/diaries');

const getAllEntries = async (req, res) =>{
    try{
        const data = await Entries.findAll();
        res.status(200).send(data);
    }catch(err){
        console.error(err);
    }
    
}
const getEntriesByDiary = async (req, res) =>{
    try{
        const diaryId = req.params.diaryId;
        const entries = await Entries.findAll({
            where: {diaryId: diaryId}
        })
        res.status(200).send(entries);
    }catch(err){
        console.error(err);
    }
}

const createEntry = async (req, res) =>{
    try{
        const entryInfo = req.body;
        await Entries.create(entryInfo);
        res.status(200).json(entryInfo);

    }catch(err){
        console.error(err);
    }
}

const updateEntry = async (req, res) =>{
    try{
        const updateId = req.params.entryId;
        const updated = req.body;
    
        const entry = await Entries.findByPk(updateId);
        if(!entry) res.status(404).send(`No entry found with ID ${updateId}`)
        await entry.update(req.body);
        
        res.status(200).send(`updated entry with 
        ${updated.entry_text} 
        ${updated.entry_img}`);
    }
    catch(err){
        console.error(err);
    }
}

const deleteEntry = async (req, res) =>{
    try{
        const entryId = req.params.entryId;
        const entry = await Entries.findByPk(entryId);
        entry.destroy();
        res.status(200).send('destroyed');
    }catch(err){

    }
}
module.exports = {getAllEntries, getEntriesByDiary,createEntry, updateEntry, deleteEntry};