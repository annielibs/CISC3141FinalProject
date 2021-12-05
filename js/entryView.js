export default class entryView {
    constructor(root, { onEntrySelect, onEntryAdd, onEntryEdit, onEntryDelete } = {}) {
        this.root = root;
        this.onEntrySelect = onEntrySelect;
        this.onEntryAdd = onEntryAdd;
        this.onEntryEdit = onEntryEdit;
        this.onEntryDelete = onEntryDelete;
        this.root.innerHTML = `
            <div class="entry__sidebar">
                <button class="entry__add" type="button">Add Entry</button>
                <div class="entry__list"></div>
            </div>
            <div class="entry__preview">
                <input class="entry__title" type="text" placeholder="New Entry...">
                <textarea class="entry__body">Take Entry...</textarea>
            </div>
        `;

        const btnAddEntry = this.root.querySelector(".entry__add");
        const inpTitle = this.root.querySelector(".entry__title");
        const inpBody = this.root.querySelector(".entry__body");

        btnAddEntry.addEventListener("click", () => {
            this.onEntryAdd();
        });

        [inpTitle, inpBody].forEach(inputField => {
            inputField.addEventListener("blur", () => {
                const updatedTitle = inpTitle.value.trim();
                const updatedBody = inpBody.value.trim();

                this.onEntryEdit(updatedTitle, updatedBody);
            });
        });

        this.updateEntryPreviewVisibility(false);
    }

    _createListItemHTML(id, title, body, updated) {
        const MAX_BODY_LENGTH = 60;

        return `
            <div class="entry__list-item" data-entry-id="${id}">
                <div class="entry__small-title">${title}</div>
                <div class="entry__small-body">
                    ${body.substring(0, MAX_BODY_LENGTH)}
                    ${body.length > MAX_BODY_LENGTH ? "..." : ""}
                </div>
                <div class="entry__small-updated">
                    ${updated.toLocaleString(undefined, { dateStyle: "full", timeStyle: "short" })}
                </div>
            </div>
        `;
    }

    updateEntryList(Entrys) {
        const EntryListContainer = this.root.querySelector(".entry__list");

        // Empty list
        EntryListContainer.innerHTML = "";

        for (const Entry of Entrys) {
            const html = this._createListItemHTML(Entry.id, Entry.title, Entry.body, new Date(Entry.updated));

            EntryListContainer.insertAdjacentHTML("beforeend", html);
        }

        // Add select/delete events for each list item
        EntryListContainer.querySelectorAll(".entry__list-item").forEach(EntryListItem => {
            EntryListItem.addEventListener("click", () => {
                this.onEntrySelect(EntryListItem.dataset.entryId);
            });

            EntryListItem.addEventListener("dblclick", () => {
                const doDelete = confirm("Are you sure you want to delete this Entry?");

                if (doDelete) {
                    this.onEntryDelete(EntryListItem.dataset.entryId);
                }
            });
        });
    }

    updateActiveEntry(Entry) {
        this.root.querySelector(".entry__title").value = Entry.title;
        this.root.querySelector(".entry__body").value = Entry.body;

        this.root.querySelectorAll(".entry__list-item").forEach(EntryListItem => {
            EntryListItem.classList.remove("entry__list-item--selected");
        });

        this.root.querySelector(`.entry__list-item[data-entry-id="${Entry.id}"]`).classList.add("entry__list-item--selected");
    }

    updateEntryPreviewVisibility(visible) {
        this.root.querySelector(".entry__preview").style.visibility = visible ? "visible" : "hidden";
    }
}