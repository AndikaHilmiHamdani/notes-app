import React from "react";

class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            title: '',
            body: '',
        }

        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onNameChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                title: event.target.value,
            }
        });
    }

    onTagChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addContact(this.state);
    }

    // fungsi render disembunyikan
    render() {
        return (

          <form className='notes-input' onSubmit={this.onSubmitEventHandler}>
            <input type="text" placeholder="Title" value={this.state.title} onChange={this.onNameChangeEventHandler} required />
            <input type="text" placeholder="Body" value={this.state.body} onChange={this.onTagChangeEventHandler} required/>
            <button type="submit">Tambah</button>
          </form>
          
        )
    }
}

export default NotesInput