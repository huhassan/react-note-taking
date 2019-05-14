import React from 'react'

export default function TableBody(props) {
    const rows = props.notesData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.title}</td>
                <td>{row.note}</td>
                <td>
                    <button onClick={ () => props.removeNote(index)} className="btn btn-sm btn-danger">Remove</button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>{rows}</tbody>
    )
}