import React from "react"
// import Navbar from "./navbar"
//import UserContext from "./userContext"
// import Main from "./main"

class Main extends React.Component {
    constructor (props) {
        super (props)
        this.state = {

        }
    } render() {
        return (
            <main>
            <p className = "main">No new notifications, {this.props.username}! </p>
            </main>
        )
    
    }
}
export default Main