import React, { useState } from 'react'
// import { selectForm } from '../actions/index'
import { useDispatch } from 'react-redux'


const Form = ({ collection, btnName, clearCollection }) => {



    const dispatch = useDispatch();

    const intiInputs = {
        name: "",
        address: "",
        phone: "",
        genre: ""
    }

    const [inputs, setInputs] = useState(intiInputs)
    const [toggle, setToggle] = useState("tvShows")

    const handleToggle = () => {
        toggle === "movies" ? setToggle("tvShows") : setToggle("movies")
    }


    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    const submit = (event) => {
        event.preventDefault()
        dispatch(collection(inputs))
        setInputs(intiInputs)
    }

    return (
        <div className="main">
            <h1>add new {btnName} here :</h1>
            <form name="form" onSubmit={(e) => { submit(e) }} className="mainForm">
                <input
                    type="text"
                    name="name"
                    value={inputs.name}
                    placeholder={`${btnName} name...`}
                    onChange={handleChange}
                    required />
                <br />
                <input
                    type="text"
                    name="address"
                    value={inputs.address}
                    placeholder={`${btnName} address...`}
                    onChange={handleChange}
                    required />
                <br />
                <input
                    className='phone'
                    type="phone"
                    // min='1900'
                    // max='3000'
                    name="phone"
                    value={inputs.phone}
                    placeholder={`phone...`}
                    onChange={handleChange}
                    required />
                <br />
                
                <div >
                    <button > Add {btnName}</button>
                   
                </div>
            </form>

        </div>
    );
};

export default Form;
