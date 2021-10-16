import React from "react";
import {useState} from "react";

var initialState = {
    fname: "",
    lname: "",
    email: "",
    comments: ""
}

function Contact(){
    var  [state, setState] = useState(initialState)

    function handleFormChange(e){
        var newValue = e.target.value;
        var name= e.target.name;

        setState({
            ...state,
            [name]: newValue
        })

    }
    return (
       <>
        <fieldset>
            <label>First Name</label>
            <br/>
            <input value = {state.fname} type="name" name="fname" placeholder="First Name" onChange={handleFormChange}/>
        </fieldset>

        <fieldset>
            <label>Last Name</label>
            <br />
            <input value = {state.lname} type="name" name="lname" placeholder="Last Name" onChange={handleFormChange}/>
        </fieldset>

        <fieldset>
            <label>Email</label>
            <br />
            <input value = {state.email} type="email" name="email" placeholer="Email" onChange={handleFormChange}/>
        </fieldset>

        <fieldset>
            <label>Comments</label>
            <br/>
            <textarea value= {state.comments} name="comments" placeholder="What would you like to say?" onChange={handleFormChange} rows="10" cols="60"/>
        </fieldset>

        <button>Submit</button>

       </>
    
    );
 };
export default Contact;