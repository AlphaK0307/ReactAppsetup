import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav";
import Home from './views/Home';
import Kekambas from './views/Kekambas';


export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            data: []
        }
    }

    componentDidMount(){
        fetch(' https://kekambas-bs.herokuapp.com/kekambas')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({data})
            })
    }

    handleButtonClick = (step) => {
        let newCount = this.state.count + step;
        this.setState({
            count: newCount
        })
    }

    render(){
        return (
            <>
                <Nav />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Home handleClick={this.handleButtonClick} count={this.state.count}/>} />
                        <Route path='student' element={<Kekambas student={this.state.data} />} />
                    </Routes>
                </div>
            </>
        )
    }
}
