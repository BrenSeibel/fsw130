import React, {Component} from "react"
import UserContext from "./userContext"

class Navbar extends Component {
    static contextType = UserContext

    render() {
        const username = "username"//this.context
        return (
            <header>
                <p>Welcome, {username}!</p>
            </header>
        )
    }
}
export default Navbar 