import React, { Component} from 'react'

export default class Events extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: 0
        }

        // this.clickMethod = this.clickMethod.bind(this)
    }

    // Se utilizar uma arrow function não é preciso definir contexto.
    clickMethod = () => { 
        console.log('--- CLICK METHOD BEGIN ---', this.state.clicked);
        this.setState({
            clicked: this.state.clicked + 1
        })

        console.log('--- CLICK METHOD END ---', this.state.clicked)
    }

    render() {
        return(
            <div>
                <button onClick={this.clickMethod} type='button'>Click me</button>
            </div>
        )
    }
}