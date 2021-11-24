// Code SimpleComponent Here
import React, { Component } from 'react'
import SimplerComponent from './SimplerComponent'

export default class SimpleComponent extends Component {
    state ={
        mood: 'happy'
    }

    handleClick = () => {
   
    if(this.state.mood === 'sad'){
        this.setState({
            mood: 'happy'
        })
    }

    if(this.state.mood === 'happy'){
        this.setState({
            mood: 'sad'
        })
    }
 
    }

    render() {
        return (
            <div onClick={this.handleClick} >
                {this.state.mood}
                {/* <text onClick={this.handleClick}>I am just {this.state.mood? 'happy' : 'sad'}</text> */}
            </div>
        )
    }
}
