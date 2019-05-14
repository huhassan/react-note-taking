import React, { Component } from 'react'
import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default class Table extends Component {
  render() {
    const {notesData, removeNote} = this.props
    return (
        <div className="px-5 mx-5">
            <table className="table text-center">
                <TableHeader/>
                <TableBody notesData={notesData} removeNote={removeNote} />
            </table>            
        </div>
    )
  }
}
