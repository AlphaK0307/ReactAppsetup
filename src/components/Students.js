import React, { Component } from 'react'

export default class Students extends Component {
    render() {
        const abc = this.props.abc
        return (
            <tr>
                <td class="bg-info text-dark">{abc.first_name}</td>
                <td class="bg-secondary text-warning">{abc.last_name}</td>
                <td class="bg-success">{abc.id}</td>
            </tr>
        )
    }
}