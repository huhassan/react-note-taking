import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            title: '',
            note: ''
        }

        this.state = this.initialState
    }

    changeHandler = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    submitForm = () => {
        this.props.submitHandler(this.state)
        this.setState(this.initialState)
    }

  render() {
      const { title, note } = this.state;

    return (
        <form className="container col-md-4 my-5">
            <div className="form-group">
                <input
                    type="text"
                    name="title"
                    value={title}
                    className="form-control"
                    placeholder="Title"
                    onChange={this.changeHandler} />
            </div>
            <div className="form-group">
                <textarea
                    type="text"
                    name="note"
                    value={note}
                    className="form-control"  
                    placeholder="Write your note here..."              
                    onChange={this.changeHandler} >
                </textarea>
            </div>
            <button onClick={this.submitForm} type="button" value="submit" className="btn btn-sm btn-primary btn-block">Submit</button>
        </form>
    )
  }
}
