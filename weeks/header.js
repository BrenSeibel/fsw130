  
import React from "react"
import {UserContextConsumer} from "./userContext"

function Header() {
    return (
        <header>
            <UserContextConsumer>
                {({username}) => (
                    <div><p>Welcome, {username}!</p></div>
                )}
            </UserContextConsumer>
        </header>
        )
    
}

export default Header