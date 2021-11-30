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
const getAllDiaries = (req, res) => {
  Diaries.findAll() // SELECT * FROM ...
    .then((diaries) => {
      res.status(200).send(diaries);
      console.log("Successfully retrieved diaries from database");
    })
    .catch((err) => {
      res.status(500).send("Unable to retrieve user diaries");
      console.log("Unsuccessful operation retrieving diaries from database", err);
    });
};

// READ single diary
const getDiaryByName = (req, res) => {
  const diaryName = req.params.diaryName;

  Diaries.findOne({
    where: { diary_name: diaryName },
  })
    .then((diary) => {
      res.status(200).send(diary);
      console.log(`Successfully retrieved diary with name "${diaryName}"`);
    })
    .catch((err) =>
      res.status(500).send(`Unsuccessful operation retrieving diary with name "${diaryName}"`, err)
    );
};

// CREATE single new diary
const createSingleDiary = (req, res) => {
  const diaryName = req.body.diary_name; // get diary name from client request

  // create new Diary object save to database
  Diaries.create({
    diary_name: diaryName,
    diary_creation_date: new Date().toISOString().slice(0, 10),
  })
    .then(() => {
      res.status(200).send(`Created new diary: "${diaryName}"`);
      console.log(`Successfully saved new diary "${diaryName}" to database`);
    })
    .catch((err) => {
      res.status(500).send(`"Unable to create new diary: "${diaryName}"`);
      console.log(`Unsuccessful operation to CREATE "${diaryName}" and save to database`, err);
    });
};

// UPDATE diary information
const updateSingleDiary = (req, res) => {
  const diaryName = req.params.diaryName;
  const newDiaryName = req.body.newDiaryName;

  Diaries.update(
    { diary_name: newDiaryName }, // updated value
    {
      where: {
        diary_name: diaryName, // specify diaries to update
      },
    }
  )
    .then(() => {
      res.status(200).send(`Updated diary: "${diaryName}" to "${newDiaryName}"`);
      console.log(`Successfully updated "${diaryName}" to "${newDiaryName}" in database`);
    })
    .catch((err) => {
      res.status(500).send(`Unable to updated diary: "${diaryName}"`);
      console.log(`Unsucessful operation to UPDATE "${diaryName}" in database`, err);
    });
};

// DELETE single diary
const deleteSingleDiary = (req, res) => {
  const diaryName = req.params.diaryName;

  // delete based on diary name   -> should names be unique? or delete by id?
  Diaries.destroy({
    where: {
      diary_name: diaryName,
    },
  })
    .then(() => {
      res.status(200).send(`Deleted diary: "${diaryName}"`);
      console.log(`Successfully deleted "${diaryName}" from database`);
    })
    .catch((err) => {
      res.status(500).send(`Unable to delete diary: "${diaryName}"`);
      console.log(`Unsuccessful operation to DELETE "${diaryName}" from database`, err);
    });
};

module.exports = {
  getAllDiaries,
  getDiaryByName,
  createSingleDiary,
  deleteSingleDiary,
  updateSingleDiary,
};
