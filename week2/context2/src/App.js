import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from "./Header";
import UserContext from "./userContext";

function App(){
  return (
    <div>
      <Header />
      <main>
        <UserContext.Consumer>
          {username => (
              <p className = "main">No new notifications, {username}</p>
          )}
        </UserContext.Consumer>
      </main>
    </div>
  )
}
export default App