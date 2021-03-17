import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      desc: '',
      age: ''
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event) {
    const { target } = event
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    return this.setState({
      [name]: value // Pegando os valores que a tag está utilizando a função
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>

          <div>
            <input type="text" name="name" onChange={this.handleInput}></input>
            <input type="text" name="desc" onChange={this.handleInput}></input>
            <input type="number" name="age" onChange={this.handleInput}></input>
          </div>

          <div>
            <p>{this.state.name}</p>
            <p>{this.state.desc}</p>
            <p>{this.state.age}</p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
