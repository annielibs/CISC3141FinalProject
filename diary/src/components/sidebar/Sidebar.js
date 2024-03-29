import formattedDate from "../../utils/formattedDate.js";

const Sidebar = ({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <button className="app-sidebar-add-entry" onClick={onAddNote}>
          Add Entry
        </button>
      </div>
      <div className="app-sidebar-note">
        {sortedNotes.map(({ id, title, body, lastModified }, i) => (
          <div
            className={`app-sidebar-notes ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}>
            <div className="sidebar-note-title">
              <strong>{title}</strong>
              <button onClick={(e) => onDeleteNote(id)}>X</button>
            </div>

            <p>{body && body.substr(0, 100) + "..."}</p>
            <small className="note-meta">Last Modified {formattedDate()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
