import React, { Component } from 'react'

export default class Students extends Component {
    render() {
        const abc = this.props.abc
        return (
            <tr>
                <td className="bg-success">{abc.id}</td>
                <td className="bg-info text-dark">{abc.user.first_name}</td>
                <td className="bg-secondary text-warning">{abc.user.last_name}</td>
                <td className="bg-primary">{abc.user.id}</td>
                <td className="bg-secondary">{abc.title}</td>
                <td className="bg-warning">{abc.body}</td>
                <td className="bg-danger">{abc.date_created}</td>
            </tr>
        )
    }
}