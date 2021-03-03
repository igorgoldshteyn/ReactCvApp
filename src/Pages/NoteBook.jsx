import React, { useState, useRef, useEffect } from "react";
import {Link } from "react-router-dom";
import NoteList from "../NoteList";
import { v4 as uuidv4 } from "uuid";
import '../css/styles.css'
import  MainHeader from '../components/MainHeader'


const LOCAL_STORAGE_KEY = "noteApp.notes";
export default function NoteBook() {
    const [notes, setNotes] = useState([]);
    const noteNameRef = useRef();

    //Here we get saving our data into local storage. So we can reload our page without loosing the data

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedNotes) setNotes(storedNotes);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
    }, [notes]);


    // function toggleNote()
    // function removeNote()

    function handleAddNote(e) {
        const text = noteNameRef.current.value;
        if (text === "") return;

        setNotes((prevNotes) => {
            return [...prevNotes, { id: uuidv4(), text: text, complete: false }];
        });
    }

    return (
        <div className='noteBook'>
            <MainHeader />

            <Link to='/'>Main Page </Link>
            <br/>
            <input ref={noteNameRef} type="text" name="note" id="note" />
            <button onClick={handleAddNote}>Add Note</button>
            <button>Remove Note</button>
            <NoteList notes={notes} />
            <br />
            <br />
            <span>Note quiantity: {notes.length}</span>
        </div>
    )
}
