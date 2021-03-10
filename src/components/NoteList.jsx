import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({ notes }) {
  return notes.map((noteItem) => {
    return <NoteItem key={noteItem.id} noteItem={noteItem} />;
  });
}
