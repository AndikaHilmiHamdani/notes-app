import React from "react";
import NotesList from "./NotesList";
import { getData } from "../utils/index";
import NotesInput from "./NotesInput";
import '../style/style.css';

class NoteApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          notes: getData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddContactHandler = this.onAddContactHandler.bind(this);
    }
      
      onDeleteHandler(id) {
        const notes = this.state.notes.filter(notes => notes.id !== id);
        this.setState({ notes });
      }
      
      onAddContactHandler({ title, body }) {
        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              {
                id: +new Date(),
                title,
                body,
                createdAt: +new Date(),
              }
            ]
          }
        });
      }
    
    render() {
      
      return (
        <div className="notes-app">
          <h1>Notes App</h1>
          <h2>Tambah Notes</h2>
          <NotesInput addContact={this.onAddContactHandler} />
          <h2>Daftar Notes</h2>
          <NotesList note={this.state.notes} onDelete={this.onDeleteHandler} />
        </div>
        );      
    }
      
     
}

export default NoteApp