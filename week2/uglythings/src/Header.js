import React from "react"
import UserContext from "./userContext"

function Header() {
    return (
        <header>
            <UserContext.Consumer>
                {username => (
                    <p>Welcome, {username}!</p>
                )}
            </UserContext.Consumer>
        </header>
        )
    
}
<img src = "https://images.unsplash.com/photo-1564398042875-dddb3c722039?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>

export default Header