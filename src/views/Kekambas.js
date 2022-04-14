import React, { Component } from 'react'
import Students from '../components/Students'

export default class Kekambas extends Component {
  render() {
    return (
      <>
        <h1 className='text-center'>Kekambas Students</h1>
        <table className='table table-bordered table-hover table-sm'>
            <thead>
              <tr className="bg-dark text-danger">               
                <th scope="col">first_name</th>
                <th scope="col">last_name</th>
                <th scope="col">id</th>
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
