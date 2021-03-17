import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props)

        this.state = {
            time: new Date().toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            })
        }
    }

    componentDidMount() { //Quando o componente já foi criado
       this.timer = setInterval(() => this.updateClock(), 1000)
    }

    componentWillUnmount() { //Quando o componente está para ser demonstado
        clearInterval(this.timer) // Precaução para que o setInterval não fique na próxima página
    }

    updateClock() {
        this.setState({ // Sempre utilizar o setState para atualizar um state
            time: new Date().toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            })
        });
    }

    render() {
        const { time } = this.state;
        return (
            <h1>{time}</h1>
        );
    }
}