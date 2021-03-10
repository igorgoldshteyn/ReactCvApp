import React from "react";

export default function NoteItem({ noteItem }) {
  return (
    <div>
      <label>
        {noteItem.text}
        <span> &#10006;</span>
      </label>
    </div>
  );
}
