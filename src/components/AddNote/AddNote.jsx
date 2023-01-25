import { Component } from "react";
import { AddButton } from "../AddButton/AddButton";
import { AppField } from "../AppField/AppField";
import { NoteItem } from "./NoteItem";

export class AddNote extends Component {

    state = { notesArray: [{ id: 0, tittle: 'first note', isCecked: false }], inputValue: 'initial', notesLastId: 0 };

    onInputChange(e) {
        this.setState({ inputValue: e.target.value })
    }

    onButtonClick = () => {
        this.setState({
            notesLastId: ++this.state.notesLastId,
            notesArray: [...this.state.notesArray, { id: this.state.notesLastId, tittle: this.state.inputValue, isCecked: false }]
        });
    }

    onNoteCheckClick = (elId) => this.setState({
        notesArray: this.state.notesArray.map((note) => {
            if (note.id === elId) {
                return { ...note, isCecked: !note.isCecked }
            } else {
                return note
            }
        })
    });

    onNoteDeleteClick = (elId) => this.setState({
        notesArray: this.state.notesArray.filter((note) => note.id !== elId)
    });

    render() {

        console.log(this.state.notesArray)

        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    <AppField value={this.state.inputValue} onInputChange={this.onInputChange.bind(this)} />
                    <AddButton onClick={this.onButtonClick} tittle='Add note' width='150px' />
                </div>
                <div style={{ width: '655px' }}>
                    {this.state.notesArray.map((note) => {
                        return (
                            <NoteItem onNoteDeleteClick={this.onNoteDeleteClick} onNoteCheckClick={this.onNoteCheckClick} el={note} key={note.id} />
                        )
                    })}
                </div>
            </div>
        )
    }
}