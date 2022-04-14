import React, { Component } from 'react'

export default class Students extends Component {
    render() {
        const abc = this.props.abc
        return (
            <tr>
                <td className="bg-info text-dark">{abc.first_name}</td>
                <td className="bg-secondary text-warning">{abc.last_name}</td>
                <td className="bg-success">{abc.id}</td>
            </tr>
        )
    }
}