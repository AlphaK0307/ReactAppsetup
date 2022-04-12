import React, { Component } from 'react'

export default class Students extends Component {
    render() {
        const abc = this.props.abc
        return (
            <tr>
                <td>{abc.first_name}</td>
                <td>{abc.last_name}</td>
                <td>{abc.id}</td>
            </tr>
        )
    }
}