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
       <div className="form-container">
            <form>
            <label>First Name</label>
            <br/>
            <input value = {state.fname} type="text" name="fname" placeholder="First Name" onChange={handleFormChange}
            style={{width: "100%",
                padding: "12px 20px",
                margin: "8px 0",
                borderRadius: "5px",
                borderColor: "rgb(194, 194, 194)"}}/>
        
        
            <label>Last Name</label>
            <br />
            <input value = {state.lname} type="text" name="lname" placeholder="Last Name" onChange={handleFormChange}
             style={{width: "100%",
             padding: "12px 20px",
             margin: "8px 0",
             borderRadius: "5px",
             borderColor: "rgb(194, 194, 194)"}}/>
      
        
            <label>Email</label>
            <br />
            <input value = {state.email} type="email" name="email" placeholder="Email" onChange={handleFormChange}/>
       
        
            <label>Comments</label>
            <br/>
            <textarea value= {state.comments} name="comments" placeholder="What would you like to say?" onChange={handleFormChange} rows="10" cols="60"/>
        

        <input type="submit" name="submit" value="Submit"/>

        </form>
        </div>
       </>
    
    );
 };
export default Contact;