import React from "react"
import Navbar from "./navbar"
import UserContext from "./userContext"
import Main from "./main"

class App extends React.Component {
    static contextType = UserContext

    render(){ 
        const username = this.context 
        return (
            <div>
                <Navbar />
                <Main className = "main" username = {username} />
                    
            </div>
        )
    }
}
export default App 
