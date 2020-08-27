import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from "./Header";
import {UserContextConsumer} from "./userContext"

class App extends React.Component {
 
  render () {
    return (
      <div>
        <Header />
          <UserContextConsumer>
            {({title, submit, handleChange, description, imgurl, purple}) => (
              <main>
                <p className = "main"> No new notifications, {title}!</p>
                <input 
                    type = "text"
                    name = "title"
                    value = {title}
                    onChange = {handleChange}
                />
                 <input 
                    type = "text"
                    name = "description"
                    value = {description}
                    onChange = {handleChange}
                />
                 <input 
                    type = "text"
                    name = "imgurl"
                    value = {imgurl}
                    onChange = {handleChange}
                />
                <button onClick = {() => submit()}
                >Change title</button>
                <div style={{display: "flex"}}>
                  {purple.map(thing => {
                    console.log(thing)
                    return (
                      <div style={{border: "red solid 5px"}}>
                      <h1>{thing.title}</h1>
                      <p>{thing.description},</p>
                      <img src = {thing.imgurl}  alt =""></img>
                      <section>
                        comments:
                        {thing.commentsArray.map(comment => {

                        return(<div>{comment.text}</div>)
                        })}
                      </section>
                      </div>
                    )
                  })}
                </div>
              </main>
            )}
          </UserContextConsumer>
      </div>
    )
  }
}
export default App
