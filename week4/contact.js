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
            return {
                type: "ADD_CONTACT",
                payload: contact   
            }
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addContact({name: "Bruno Mars", phone: 456, id: 1}))
store.dispatch(addContact({name: "Katy Perry", phone: 852, id: 2}))

store.dispatch(removeContact( 1))