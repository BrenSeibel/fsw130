import React from "react"
import Navbar from "./navbar"
import UserContext from "./userContext"

class App extends React.Component {
    static contextType = UserContext

    render(){
        const username = this.context 
        return (
            <div>
                <Navbar />
                <Main>
                    <p className = "main">No new notifications, {username}! </p>
                </Main>
            </div>
        )
    }
}
export default App 