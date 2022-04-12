import React, { Component } from 'react';
import Button from './components/Button';
import Nav from "./components/Nav";


export default class App extends Component{
    constructor(props){
        super(props);
        console.log('App constructed')
        this.state = {
            count: 0,
            racers: []
        }
    }

    componentDidMount(){
        console.log('App mounted')
        fetch(' https://kekambas-bs.herokuapp.com/kekambas')
            .then(res => res.json())
            .then(data => console.log(data))
    }

    handleButtonClick = (step) => {
        let newCount = this.state.count + step;
        this.setState({
            count: newCount
        })
    }

    render(){
        const myButtonSteps = [1, 10, 100, 1000, 10000, 100000]
        console.log('App rendered')
        return (
            <>
                <Nav />
                <div className='container'>
                    <h1>Hello World!</h1>
                    <h4 className='text-center'>Current Count: {this.state.count}</h4>
                    <div className='d-flex justify-content-around'>

                    {myButtonSteps.map((step, i) => <Button key={i} step={step} handleClick={this.handleButtonClick} />)}
                    </div>
                    {this.state.racers?.map(num => <h2 key={num}>{num}</h2>)}
                </div>
            </>
        )
    }
}
