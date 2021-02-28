import React, { useState } from "react";
import NoteList from "./NoteList";

function App() {
  const [notes, setNotes] = useState(['Note 1', 'Note 2']);
  return (
    <>
      <input type="text" name="note" id="note" />
      <button>Add Note</button>
      <button>Remove Note</button>
      <NoteList notes = {notes} />
      <br />
      <span>Note quiantity:</span>
    </>
  );
}

export default App;
