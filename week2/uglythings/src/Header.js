import React from "react"
import {UserContextConsumer} from "./userContext"

function Header() {
    return (
        <header>
            <UserContextConsumer>
                {({username}) => (
                    <div><p>Welcome, {username}!</p><img src = "https://images.unsplash.com/photo-1564398042875-dddb3c722039?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt =""></img></div>
                )}
            </UserContextConsumer>
        </header>
        )
    
}

export default Header



