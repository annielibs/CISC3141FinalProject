const { getAllEntries } = require("../../../server/api/controllers/entryController");
const api = require("../api/index.js");

class EntryService {
  createEntry() {
    return api.post("/create_entry");
  }

  getAllEntries() {
    return api.get("/");
  }

  getEntriesForDiary(diaryId) {
    return api.get(`/:${diaryId}`);
  }

  updateEntry(entryId) {
    return api.patch(`/update-entry/:${entryId}`);
  }

  deleteEntry(entryId) {
    return api.delete(`/delete-entry/${entryId}`);
  }
}

export default new EntryService();
