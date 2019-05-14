import React, {Component} from 'react';
import './App.css';
import Table from './components/Table';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { notes: [] };
  }

  removeNote = index => {
    const {notes} = this.state

    this.setState({
      notes: notes.filter((note, i) => {
        return i !== index
      }),
    })
  }

  submitHandler = note => {
    this.setState({ notes: [...this.state.notes, note] })
  }

  render() {
    const { notes } = this.state
    return (
      <div>
        <Form submitHandler={this.submitHandler} />
        <Table notesData={notes} removeNote={this.removeNote} />
      </div>
    );
  }
}

export default App;