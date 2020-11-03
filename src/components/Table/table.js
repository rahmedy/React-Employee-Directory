import React from 'react'
import './table.css'

function Table(props) {
    // map through the results from the api call and make a table row for each person
    const employees = props.results.map((person, x) => {
        return (
            <tr key={x}>
                <th scope="row"><img src={person.image} alt="person" /></th>
                <td>{person.name}</td>
                <td>{person.phone}</td>
                <td>{person.email}</td>
                <td>{person.dob}</td>
            </tr>
        )
    })

    return (
        <table className="table  table-bordered table-hover">
            <thead>
                <tr>
                    <th scope="col">Picture</th>
                    <th scope="col" onClick={() => props.sortBy('name')}>Name &#x21C5;</th>
                    <th scope="col">Phone</th>
                    <th scope="col" onClick={() => props.sortBy('email')}>Email Address &#x21C5;</th>
                    <th scope="col" onClick={() => props.sortBy('age')}>Birthday &#x21C5;</th>
                </tr>
            </thead>
            <tbody>
                {/* table body renders the mapped api results of relevant info */}
                {employees}
            </tbody>
        </table>
    )
}

export default Table;