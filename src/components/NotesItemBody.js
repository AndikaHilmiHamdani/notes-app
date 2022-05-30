import React from "react";
import { showFormattedDate } from "../utils/index";

function NotesItemBody({title,body,createdAt}) {
    return(
        <div className="notes-item__body">
            <h3 className="notes-tem__title">
                {title}
            </h3>
            <p className="notes-item__body">{body}</p>
            <p className="notes-item__body">{showFormattedDate(createdAt)}</p>
        </div>
    )
}
export default NotesItemBody
