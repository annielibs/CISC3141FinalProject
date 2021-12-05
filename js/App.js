import entryView from "./entryView.js";
const entryController = require ('./entryController') 

export default class App {
    constructor(root) {
        this.entrys = [];
        this.activeEntry = null;
        this.view = new entryView(root, this._handlers());
        this._refreshEntrys();
    }

    _refreshEntrys() {
        const entrys = entryController.getAllEntries();

        this._setEntrys(entrys);

        if (entrys.length > 0) {
            this._setActiveEntry(entrys[0]);
        }
    }

    _setEntrys(entrys) {
        this.entrys = entrys;
        this.view.updateEntryList(entrys);
        this.view.updateEntryPreviewVisibility(entrys.length > 0);
    }

    _setActiveEntry(entry) {
        this.activeEntry = entry;
        this.view.updateActiveEntry(entry);
    }

    _handlers() {
        return {
            onEntrySelect: entryId => {
                const selectedEntry = this.entrys.find(entry => entry.id == entryId);
                this._setActiveEntry(selectedEntry);
            },
            onEntryAdd: () => {
                const newEntry = {
                    title: "New Entry",
                    body: "Start Writing..."
                };

                entryController.createEntry(newEntry);
                this._refreshEntrys();
            },
            onEntryEdit: (title, body) => {
                entryController.updateEntry({
                    id: this.activeEntry.id,
                    title,
                    body
                });

                this._refreshNotes();
            },
            onEntryDelete: entryId => {
                entryController.deleteEntry(entryId);
                this._refreshEntrys();
            },
        };
    }
}