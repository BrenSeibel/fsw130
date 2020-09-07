import React, {useState} from "react"
import {connect} from "react-redux"
import { useSelector, useDispatch } from 'react-redux'
import { addContact, removeContact } from './Redux/actions/index'
import ListItems from './ListItems'
import Form from './Form'


function App(props) {
    const formType = useSelector(form => form)
    const dispatch = useDispatch()
    const state = formType
        console.log(state)

        return (
            <div>
                <h1>CONTACT LIST</h1>
                <button>-</button>
                <button>+</button>
                <Form
                        collection={addContact}
                        btnName="Add Contacts"
                    />
                <ListItems
                collection={formType}
                deleteItem={removeContact}
                type=" New Contact "
            />
            </div>
    )
}

export default App