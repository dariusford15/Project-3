import React from "react";


function Contact(){
    return (
       <>
        <fieldset>
            <label>First Name</label>
            <br/>
            <input type="name" name="first-name" placeholder="First Name"/>
        </fieldset>

        <fieldset>
            <label>Last Name</label>
            <br />
            <input type="name" name="last-name" placeholder="Last Name"/>
        </fieldset>

        <fieldset>
            <label>Email</label>
            <br />
            <input type="email" placeholer="Email"/>
        </fieldset>

        <fieldset>
            <label>Comments</label>
            <br/>
            <textarea name="comments" placeholder="What would you like to say?"/>
        </fieldset>

        <button>Submit</button>

       </>
    
    );
 };
export default Contact;