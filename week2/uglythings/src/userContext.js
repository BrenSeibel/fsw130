import React from "react"

const {Provider, Consumer} = React.createContext()


class UserContextProvider extends React.Component {
    state = {
        title: "Brens47", username: "Brens47", description: "", imgurl: "",
        purple: [{
            title: "Bug",
            description: "description",
            imgurl: "https://images.unsplash.com/photo-1530936645058-0759135246db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            commentsArray: [{text:"I am a comment", id: 0}, ],
            id: 0,
        }, {
            title: "Ant",
            description: "this.state.description",
            imgurl: "https://images.unsplash.com/photo-1530937058026-7ab413e9ae19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            commentsArray: [{text:"I am a comment", id: 0}],
            id: 1,
        }, {
            title: "Spider",
            description: "this.state.description",
            imgurl: "https://images.unsplash.com/photo-1564398042875-dddb3c722039?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            commentsArray: [{text:"I am a comment", id: 0}],
            id: 2,
        }]
    }

    submit = () => {
        var newObject = {
            title: this.state.title,
            description: this.state.description,
            imgurl: this.state.imgurl,
            commentsArray: [],
            id: this.state.purple.length,
        }
            
        this.setState({purple:[...this.state.purple, newObject]})
    }

    edit = (event) => {
        var newObject = {
            title: this.state.title,
            description: this.state.description,
            imgurl: this.state.imgurl,
            commentsArray: [],
            id: this.state.purple.length,
        }
            
        this.setState({purple:[...this.state.purple, newObject]})
    }

    deleteb = (event) => {
        console.log(event)
        
            var array = this.state.purple

            console.log(array)

        const tweet = array.findIndex(tweet => tweet.id === event.target.id);
        console.log(tweet)
        array.splice(tweet, 1);
        
        console.log(array)
        this.setState({purple: array})
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
        console.log(e.target)
      }

    render() {
        const {title, username, description, imgurl, purple} = this.state
        return (
            <Provider value={{title, submit: this.submit, handleChange: this.handleChange, username, description, imgurl, purple, edit: this.edit, deleteb: this.deleteb}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UserContextProvider, Consumer as UserContextConsumer}