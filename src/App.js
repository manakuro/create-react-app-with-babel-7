import React, { Component } from 'react'
import logo from 'logo.svg'
import 'App.css'

class App extends Component {
  testPipeline() {
    const fn = val => `${val} world`
    return 'hello' |> fn
  }

  testDo() {
    return do {
      const test = 'hi'
      test
    }
  }

  render() {
    this.testPipeline()
    this.testDo()

    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">
            Welcome to React
          </h1>
        </header>
        <p className="App-intro">
          To get started, edit{' '}
          <code>src/App.js</code> and save to
          reload.
        </p>
      </div>
    )
  }
}

export default App
