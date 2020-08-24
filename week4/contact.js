const redux = require("redux")

function addContact(contact){
    return {
        type: "ADD_CONTACT",
        payload: contact
    }
}

function removeContact(contact){
    return {
        type: "REMOVE_CONTACT",
        payload: contact 
    }
}

const initialState = {
    contacts: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_CONTACT":
            // console.log(action.payload, "action")
            return {
                ...state,
                contacts:[...state.contacts, action.payload], 
                // type: "ADD_CONTACT",
                // payload: action.payload   
            }
            case "REMOVE_CONTACT":
                const filter = state.contacts.filter(contact => {
                    console.log(contact, "filter contact")
                    return(contact.id !== action.payload ? contact : console.log("deleted"))
                })
                console.log(filter, "filter")
// console.log(state)
                return {
                    ...state, contacts:filter
                }   
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addContact({name: "Bruno Mars", phone: 456, id: 1, email: "marsb@gmail.com"}))
store.dispatch(addContact({name: "Katy Perry", phone: 852, id: 2, email: "perryk@gmail.com"}))

store.dispatch(addContact({name: "Machu Pichu", phone: 456, id: 3, email: "marsb@gmail.com"}))
store.dispatch(addContact({name: "Hello Kity", phone: 852, id: 4, email: "perryk@gmail.com"}))

store.dispatch(addContact({name: "Male Pu", phone: 456, id: 5, email: "marsb@gmail.com"}))
store.dispatch(addContact({name: "Blue Ring", phone: 852, id: 6, email: "perryk@gmail.com"}))

store.dispatch(removeContact( 1))