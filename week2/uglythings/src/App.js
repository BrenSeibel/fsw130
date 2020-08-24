import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from "./Header";
import {UserContextConsumer} from "./userContext"

class App extends React.Component {
  state = {
    newUsername: ""
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.ListeningStateChangedEvent({[name]: value})
  }

  render () {
    return (
      <div>
        <Header />
          <UserContextConsumer>
            {({username, changeUsername}) => (
              <main>
                <p className = "main"> No new notifications, {username}!</p>
                <input 
                    type = "text"
                    name = "newUsername"
                    value = {this.state.newUsername}
                    onChange = {this.habldeChange}
                />
                <button onClick = {() => changeUsername(this.state.newUsername)}
                >Change Username</button>
              </main>
            )}
          </UserContextConsumer>
      </div>
    )
  }
}
export default App
