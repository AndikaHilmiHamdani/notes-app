import React from "react";
import NotesItem from "./NotesItem";

function NotesList({note,onDelete}) {
    return(
        <div className="notes-list">
           {
               note.length === 0 ? 
               (<h3>Tidak ada catatan</h3>) : 
               (note.map((note)=>(
                <NotesItem key={note.id} {...note} onDelete={onDelete}/>)
                ))
               
           }
        </div>
    )
}
export default NotesList