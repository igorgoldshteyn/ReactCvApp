import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({ notes }) {
  return (
      notes.map(note)
    // <div>
    //   {notes[0]}
    // </div>
  );
}
