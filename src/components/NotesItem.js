import React from "react";
import NotesItemBody from "./NotesItemBody";

function NotesItem({title,body,onDelete,id,createdAt,notes}) {
    return (
        <div className="notes-item">
            <NotesItemBody title={title} body={body} createdAt={createdAt}/>
            <button className="notes-item__delete" onClick={() => onDelete(id)}>X</button>
        </div>
    )
}

export default NotesItem;