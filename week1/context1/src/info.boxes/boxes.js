import React, {component} from "react"
import './boxes.css';

const message = props => <div>{props.msg}</div>;

function App()
    return (
        <div>
        {React.createElement(message, {msg: <h1>'Info Boxes'</h1>})}
        {React.createElement(message, {
          msg: 'Creating Reusable React Components',
        })} 
        </div>
    );
    

    export default App

