import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Tiago',
            age: 21
        };

        console.log(this.state);
    }
    
    
    render() {
        const { name, age } = this.state
        return(
            <div>
                <p>{name}</p>
                <p>{age}</p>
            </div>
        )
    }
}