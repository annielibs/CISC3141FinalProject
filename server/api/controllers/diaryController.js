const Entries = require("../../db/models/entries");
const Diaries = require("../../db/models/diaries");

/*
  Controller handles HTTP requests relating to Diaries
    - CREATE new diary
    - READ all diaries
    - READ single diary
    - UPDATE existing diary
    - DELETE existing diary
*/

// READ all diaries from database
const getAllDiaries = async (req, res) => {
  try {
    const diaries = await Diaries.findAll();
    res.status(200).send(diaries);
    console.log("Successfully retrieved diaries from database");
  } catch (err) {
    res.status(500).send("Unable to retrieve user diaries");
    console.log("Unsuccessful operation retrieving diaries from database", err);
  }
};

// READ single diary
const getDiaryByName = async (req, res) => {
  const diaryName = req.params.diaryName;
  try {
    const diary = await Diaries.findOne({
      include: Entries,
      where: { diary_name: diaryName },
    });

    res.status(200).send(diary);
    console.log(`Successfully retrieved diary with name "${diaryName}"`);
  } catch (err) {
    res.status(500).send(`Unable to find diary with name "${diaryName}"`, err);
    console.log(`Unsuccessful operation retrieving diary with name "${diaryName}"`);
  }
};

// CREATE single new diary
const createSingleDiary = async (req, res) => {
  const diaryName = req.body.diary_name;
  const diaryDescription = req.body.diary_description;
  const userId = req.body.UserId;
  try {
    await Diaries.create({
      diary_name: diaryName,
      diary_description: diaryDescription,
      UserId: userId,
    });

    res.status(200).send(`Created new diary: "${diaryName}"`);
    console.log(`Successfully saved new diary "${diaryName}" to database`);
  } catch (err) {
    res.status(500).send(`"Unable to create new diary: "${diaryName}"`);
    console.log(`Unsuccessful operation to CREATE "${diaryName}" and save to database`, err);
  }
};

// UPDATE diary information
const updateSingleDiary = async (req, res) => {
  const diaryName = req.params.diaryName;
  const newDiaryName = req.body.diary_name;
  const newDescription = req.body.diary_description;

  try {
    await Diaries.update(
      { diary_name: newDiaryName, diary_description: newDescription },
      { where: { diary_name: diaryName } }
    );

    res.status(200).send(`Updated diary: "${diaryName}" to "${newDiaryName}"`);
    console.log(`Successfully updated "${diaryName}" to "${newDiaryName}" in database`);
  } catch (err) {
    res.status(500).send(`Unable to updated diary: "${diaryName}"`);
    console.log(`Unsucessful operation to UPDATE "${diaryName}" in database`, err);
  }
};

// DELETE single diary
const deleteSingleDiary = async (req, res) => {
  const diaryName = req.params.diaryName;
  try {
    await Diaries.destroy({ where: { diary_name: diaryName } });

    res.status(200).send(`Deleted diary`);
    console.log(`Successfully deleted from database`);
  } catch (err) {
    res.status(500).send(`Unable to delete diary`);
    console.log(`Unsuccessful operation to DELETE`, err);
  }
};

module.exports = {
  getAllDiaries,
  getDiaryByName,
  createSingleDiary,
  deleteSingleDiary,
  updateSingleDiary,
};
