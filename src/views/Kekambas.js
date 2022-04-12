import React, { Component } from 'react'
import Students from '../components/Students'

export default class Kekambas extends Component {
  render() {
    return (
      <>
        <h1 className='text-center'>Kekambas Students</h1>
        <table className='table'>
            <thead>
              <tr>
                
                <th>first_name</th>
                <th>last_name</th>
                <th>id</th>
              </tr>
            </thead>
            <tbody>
              {this.props.student.map((abc,idx) => <Students abc={abc} key={idx}/>)}
            </tbody>
        </table>
      </>
    )
  }
}
