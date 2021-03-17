import React, { Component } from 'react'

export default class Events2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            data: []
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value // Pega o valor do alvo que acionar o evento
        })

        console.log(this.state)
    }

    insertToData = () => {
        const arr = this.state.data;
        arr.push(this.state.name)
        this.setState({
            name: '',
            data: arr
        })
        console.log(this.state)
    }

    render() {
        const { data } = this.state
        return(
            <div>
                <input type='text' onChange={this.handleChange} name='name' id='name' placeholder='Enter your name' />
                <button type="button" onClick={this.insertToData}>OK</button>
                <ul>
                    {
                        data.map(item => (
                            <li key={item}>{item}</li> //Sempre colocar o key quando estiver mexendo com arrays
                        ))
                    }
                </ul>

            </div>
        )
    }
}