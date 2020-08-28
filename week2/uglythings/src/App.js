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
            {({title, submit, handleChange, description, imgurl, purple, edit, deleteb}) => (
              <main style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <p className = "main"> No new notifications, {title}!</p>
                <div style = {{display: "flex", flexDirection:"column", width:"32.5%", height:"8vw", justifyContent:"space-evenly"}}>
                <input 
                    type = "text"
                    name = "title"
                    placeholder = "Title"
                    value = {title}
                    onChange = {handleChange}
                />
                 <input 
                    type = "text"
                    name = "description"
                    placeholder = "Description"
                    value = {description}
                    onChange = {handleChange}
                />
                 <input 
                    type = "text"
                    name = "imgurl"
                    placeholder = "Image"
                    value = {imgurl}
                    onChange = {handleChange}
                />
                <button onClick = {() => submit()}
                >Change title</button>
                </div>
                <div style={{display: "flex"}}>
                  {purple.map(thing => {
                    console.log(thing)
                    return (
                      <div style={{border: "red solid 5px"}}>
                        <div style={{display: "flex", justifyContent:"space-between"}}>
                          <div>
                            <h1>{thing.title}</h1>
                            <p>{thing.description},</p>
                          </div>
                          <div style={{display: "flex", flexDirection:"column", justifyContent:"space-evenly"}}>
                            <button id={thing.id} onClick = {(e) => edit(e)}>Edit</button>
                            <button id={thing.id} onClick = {(e) => deleteb(e)}>Delete</button>
                          </div>
                        </div>
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
